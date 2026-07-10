import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Height Access Scaffolding & Site Services Blog | Tri Build Projects",
  description: "Industry insights, safety guides, and updates on residential scaffolding, edge protection, and temporary fencing in Sydney.",
  robots: {
    index: true,
    follow: true,
  },
};

interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  published: string;
  readingTime: string;
  services?: string[];
  keywords?: string[];
}

export default async function BlogArchivePage() {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  let posts: PostMetadata[] = [];

  if (fs.existsSync(blogDir)) {
    const filenames = fs.readdirSync(blogDir);
    posts = await Promise.all(
      filenames
        .filter((fn) => fn.endsWith(".mdx"))
        .map(async (filename) => {
          const { frontmatter } = await import(`@/content/blog/${filename}`);
          return {
            ...frontmatter,
            slug: filename.replace(/\.mdx$/, ""),
          };
        })
    );
    // Sort posts by date descending
    posts.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
  }

  return (
    <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl mb-4">
            Tri Build Projects Blog
          </h1>
          <div className="h-1 w-20 bg-accent-amber mx-auto mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg">
            Insights, guides, and compliance standards for residential scaffolding, edge protection, and height access in Sydney.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-slate-500 py-12">
            <p>No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/20 p-6 shadow-xl hover:border-slate-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.published}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent-amber transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-900/60">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent-amber hover:text-accent-amber-hover transition-colors group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
