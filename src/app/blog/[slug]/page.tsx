import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Phone, Mail, Globe, Tag, ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  published: string;
  readingTime: string;
  services?: string[];
  keywords?: string[];
  ogImage?: string;
}

// 1. Static route generation
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(blogDir)) return [];

  const filenames = fs.readdirSync(blogDir);
  return filenames
    .filter((fn) => fn.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
    }));
}

// 2. Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const mdxPath = path.join(blogDir, `${slug}.mdx`);

  if (!fs.existsSync(mdxPath)) {
    return {};
  }

  try {
    const { frontmatter } = await import(`@/content/blog/${slug}.mdx`);
    const ogImage = frontmatter.ogImage || "/images/tribuild-og.jpg";
    const fullUrl = `https://tribuildprojects.com.au/blog/${slug}`;

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      alternates: {
        canonical: `/blog/${slug}`,
      },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        url: fullUrl,
        type: "article",
        publishedTime: frontmatter.published,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: frontmatter.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.description,
        images: [ogImage],
      },
    };
  } catch (e) {
    console.error("Error generating metadata for", slug, e);
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const mdxPath = path.join(blogDir, `${slug}.mdx`);

  if (!fs.existsSync(mdxPath)) {
    notFound();
  }

  // Load the MDX file component and frontmatter
  let Post;
  let frontmatter;
  try {
    const mdxModule = await import(`@/content/blog/${slug}.mdx`);
    Post = mdxModule.default;
    frontmatter = mdxModule.frontmatter;
  } catch (e) {
    console.error("Failed to load mdx module for slug:", slug, e);
    notFound();
  }

  // Read raw file content to parse headings (TOC) and FAQs
  const fileContent = fs.readFileSync(mdxPath, "utf8");

  // Parse Table of Contents headings (## and ###)
  const headingLines = fileContent
    .split("\n")
    .filter((line) => line.startsWith("## ") || line.startsWith("### "));
  
  const toc = headingLines
    .map((line) => {
      const isH3 = line.startsWith("### ");
      const text = line.replace(/^#{2,3}\s+/, "").trim();
      const id = text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return { text, id, isH3 };
    })
    .filter(item => item.id !== "frequently-asked-questions");

  // Parse FAQs for schema injection
  const faqs: { question: string; answer: string }[] = [];
  const faqSectionMatch = fileContent.match(/## Frequently Asked Questions\s*\n([\s\S]*)/i);
  if (faqSectionMatch) {
    const faqText = faqSectionMatch[1];
    const faqBlocks = faqText.split(/###\s+/).filter(Boolean);
    faqBlocks.forEach((block) => {
      const lines = block.split("\n");
      const question = lines[0].trim();
      const answer = lines.slice(1).join("\n").trim();
      if (question && answer) {
        faqs.push({ question, answer });
      }
    });
  }

  // Calculate dynamic related articles using weighted scores
  let relatedPosts: PostMetadata[] = [];
  if (fs.existsSync(blogDir)) {
    const filenames = fs.readdirSync(blogDir);
    const allPosts: PostMetadata[] = await Promise.all(
      filenames
        .filter((fn) => fn.endsWith(".mdx") && fn !== `${slug}.mdx`)
        .map(async (filename) => {
          const { frontmatter: otherFrontmatter } = await import(`@/content/blog/${filename}`);
          return {
            title: otherFrontmatter.title,
            slug: filename.replace(/\.mdx$/, ""),
            description: otherFrontmatter.description,
            published: otherFrontmatter.published,
            readingTime: otherFrontmatter.readingTime,
            services: otherFrontmatter.services,
            keywords: otherFrontmatter.keywords,
            ogImage: otherFrontmatter.ogImage,
          };
        })
    );

    // Score other posts
    const scored = allPosts.map((other) => {
      let score = 0;

      // 1. Shared Services (Highest priority)
      const sharedServices = (other.services || []).filter((s: string) =>
        (frontmatter.services || []).includes(s)
      );
      score += sharedServices.length * 10;

      // 2. Shared Keywords
      const sharedKeywords = (other.keywords || []).filter((k: string) =>
        (frontmatter.keywords || []).includes(k)
      );
      score += sharedKeywords.length * 2;

      // 3. Similar Topic (overlap in titles)
      const currentTitleWords = frontmatter.title.toLowerCase().split(/\s+/).filter((w: string) => w.length > 3);
      const otherTitleWords = other.title.toLowerCase().split(/\s+/).filter((w: string) => w.length > 3);
      const titleOverlap = otherTitleWords.filter((w: string) => currentTitleWords.includes(w));
      score += titleOverlap.length * 1;

      return { post: other, score };
    });

    // Sort by score descending, filter out unrelated (score = 0), and limit to 3-5
    relatedPosts = scored
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map((item) => item.post);
  }

  // Define structured data schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": frontmatter.title,
    "description": frontmatter.description,
    "datePublished": frontmatter.published,
    "author": {
      "@type": "Organization",
      "name": "Tri Build Projects",
      "url": "https://tribuildprojects.com.au",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tri Build Projects",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tribuildprojects.com.au/images/logo.webp",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tribuildprojects.com.au/blog/${slug}`,
    },
    "image": frontmatter.ogImage || "https://tribuildprojects.com.au/images/tribuild-og.jpg",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tribuildprojects.com.au",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://tribuildprojects.com.au/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": frontmatter.title,
        "item": `https://tribuildprojects.com.au/blog/${slug}`,
      },
    ],
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-accent-amber transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            <Link href="/blog" className="hover:text-accent-amber transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            <span className="text-slate-400 truncate max-w-[200px] sm:max-w-xs">{frontmatter.title}</span>
          </nav>

          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-accent-amber transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Main Content Column */}
            <article className="lg:col-span-8 space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
                  {frontmatter.title}
                </h1>
                <div className="h-1 w-20 bg-accent-amber"></div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {frontmatter.published}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {frontmatter.readingTime}
                  </span>
                </div>
              </div>

              {/* MDX Post Body Content */}
              <div className="mt-8">
                <Post />
              </div>

              {/* Call to Action Block */}
              <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 space-y-6">
                <h3 className="text-xl font-bold text-white">Need professional scaffolding or site access solutions?</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Contact Tri Build Projects today for a FREE site inspection and no-obligation quote.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="tel:0489150675"
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 hover:border-accent-amber hover:bg-slate-900 transition-all group"
                  >
                    <Phone className="h-5 w-5 text-accent-amber shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-bold uppercase">Call Us</p>
                      <p className="text-sm font-bold text-white">0489 150 675</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@tribuildprojects.com.au"
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 hover:border-accent-amber hover:bg-slate-900 transition-all group"
                  >
                    <Mail className="h-5 w-5 text-accent-amber shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-bold uppercase">Email Us</p>
                      <p className="text-sm font-bold text-white">info@tribuildprojects.com.au</p>
                    </div>
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5" />
                    Serving all Sydney suburbs
                  </span>
                  <span>www.tribuildprojects.com.au</span>
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/10 p-6">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-850 pb-2">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-slate-400 hover:text-accent-amber transition-colors ${
                          item.isH3 ? "pl-4 text-xs" : "font-medium"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Related Services */}
              {frontmatter.services && frontmatter.services.length > 0 && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/10 p-6">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-850 pb-2">
                    Related Services
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontmatter.services.map((service: string) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
                      >
                        <Tag className="h-3 w-3 text-accent-amber" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/10 p-6">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-850 pb-2">
                    Related Articles
                  </h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((related) => (
                      <li key={related.slug} className="group">
                        <Link href={`/blog/${related.slug}`} className="block space-y-1.5">
                          <h4 className="text-sm font-bold text-slate-200 group-hover:text-accent-amber transition-colors line-clamp-2 leading-snug">
                            {related.title}
                          </h4>
                          <span className="block text-xs text-slate-500">
                            {related.published} · {related.readingTime}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
