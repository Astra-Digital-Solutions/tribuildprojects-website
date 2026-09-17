import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, HelpCircle } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Residential Scaffolding Sydney | House & Renovation Access",
  description:
    "Expert residential scaffolding services in Sydney. Specializing in safe access solutions for houses, townhouses, and renovations. Get a free quote today.",
  alternates: {
    canonical: "/services/residential-scaffolding",
  },
};

const faqs = [
  {
    question: "Do I need scaffolding for double-storey renovations in Sydney?",
    answer:
      "Yes. Work at heights exceeding 2.0 metres requires compliant fall protection under SafeWork NSW regulations. Full perimeter scaffolding provides safe, stable platform access for builders, roofers, renderers, and painters.",
  },
  {
    question: "How does the residential scaffolding quote process work?",
    answer:
      "You can send through your architectural elevations, site plans, or property photos along with your project timeline. Our estimators review your access requirements and provide a transparent, detailed quote.",
  },
  {
    question: "Are handover safety certificates provided upon erection?",
    answer:
      "Yes. Every residential scaffolding structure erected by Tri Build Projects is inspected by a qualified scaffolder and issued with an official handover safety certificate before any trade work commences.",
  },
  {
    question: "Which areas of Greater Sydney does Tri Build Projects service?",
    answer:
      "From our depot base in Maraylya, we service residential projects across Western Sydney, the Hills District, Blacktown, Penrith, Parramatta, Box Hill, Caddens, Kingsford, and all Greater Sydney metropolitan areas.",
  },
];

export default function ResidentialScaffoldingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Scaffolding Sydney",
    "description":
      "Safe, custom-designed residential scaffolding solutions for new home construction, extensions, renovations, and re-roofing projects throughout Sydney.",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Tri Build Projects",
      "telephone": "0489150675",
      "url": "https://tribuildprojects.com.au",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1460 Boundary Rd",
        "addressLocality": "Maraylya",
        "addressRegion": "NSW",
        "postalCode": "2765",
        "addressCountry": "AU",
      },
    },
    "areaServed": [
      { "@type": "City", "name": "Sydney" },
      { "@type": "AdministrativeArea", "name": "Western Sydney" },
      { "@type": "AdministrativeArea", "name": "Hills District" },
    ],
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
        "name": "Services",
        "item": "https://tribuildprojects.com.au/#services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Residential Scaffolding",
        "item": "https://tribuildprojects.com.au/services/residential-scaffolding",
      },
    ],
  };

  const faqSchema = {
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
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Semantic Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-accent-amber transition-colors">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/#services" className="hover:text-accent-amber transition-colors">
              Services
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-accent-amber">Residential Scaffolding</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Residential Scaffolding Sydney
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                At Tri Build Projects, we specialize in offering custom-designed residential scaffolding solutions across Greater Sydney. Every project—from a single-storey home extension to a multi-level new architectural build—requires safe, stable, and reliable working platforms for all construction trades.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We work closely with home builders, roofers, bricklayers, painters, carpenters, and owner-builders in Sydney to design scaffolding structures that maximize productivity while complying with strict SafeWork NSW standards and Australian Standards (AS/NZS 1576).
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Why Choose Our Residential Scaffolding?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Erected to exact architectural specifications",
                    "Handover safety certificates issued",
                    "Narrow access & sloping terrain solutions",
                    "Sydney metropolitan coverage",
                    "Compliant with SafeWork NSW regulations",
                    "Insured up to $20M Public Liability",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope of Work / Applications */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Residential Project Applications</h2>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>New Home Construction:</strong> Perimeter scaffolding tailored for bricklayers, carpenters, cladding contractors, and roof tilers on single and multi-level residential homes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Home Extensions & Second Storey Additions:</strong> Specialized access configurations designed around existing ground floors, boundary fences, and adjoining roofs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Roof Replacements & Restorations:</strong> Walk-up access and stable perimeter working decks that protect workers carrying tiles, sheeting, and solar equipment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Exterior Rendering & House Painting:</strong> Multi-tier working decks providing continuous, uninterrupted access to upper walls, eaves, and high gable ends.</span>
                  </li>
                </ul>
              </div>

              {/* Quoting Process */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">How Our Quoting & Execution Works</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 1</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Plans or Site Review</h4>
                    <p className="text-xs text-slate-400 mt-1">Send us your architectural drawings, site plans, or property photos for an accurate assessment.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 2</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Certified Erection</h4>
                    <p className="text-xs text-slate-400 mt-1">Our certified team erects the scaffold safely and issues an official handover certificate.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 3</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Safe Dismantle</h4>
                    <p className="text-xs text-slate-400 mt-1">Once your trades complete their work, we dismantle and remove the scaffold promptly.</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white">Related Access & Site Safety Services</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Depending on your site layout and trade scope, your project may also benefit from specialized{" "}
                  <Link href="/services/roof-access" className="text-accent-amber underline hover:text-accent-amber-hover">
                    roof access scaffolding
                  </Link>
                  , perimeter{" "}
                  <Link href="/services/edge-protection" className="text-accent-amber underline hover:text-accent-amber-hover">
                    edge protection systems
                  </Link>
                  , or certified{" "}
                  <Link href="/services/erect-dismantle" className="text-accent-amber underline hover:text-accent-amber-hover">
                    scaffold erect & dismantle
                  </Link>{" "}
                  services. For complete site establishment, we also provide{" "}
                  <Link href="/services/temporary-fence-hire" className="text-accent-amber underline hover:text-accent-amber-hover">
                    temporary fence hire
                  </Link>{" "}
                  across Sydney.
                </p>
              </div>

              {/* Service-related FAQs */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 text-accent-amber shrink-0" />
                        <h4 className="text-sm font-semibold text-white">{faq.question}</h4>
                      </div>
                      <p className="text-xs text-slate-400 pl-6 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Helpful Guides / Related Articles */}
              <div className="space-y-4 pt-6 border-t border-slate-800/60 mt-6">
                <h3 className="text-lg font-bold text-white">Helpful Scaffolding Guides & Pricing</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/blog/residential-scaffolding-cost-sydney-2026-pricing-guide"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      How Much Does Residential Scaffolding Cost in Sydney? (2026 Pricing Guide)
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Read our comprehensive cost breakdown and budgeting guide.</span>
                  </Link>
                  <Link
                    href="/blog/residential-scaffolding-sydney-complete-homeowners-guide"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Residential Scaffolding Sydney: The Complete Homeowner&apos;s Guide
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Learn everything about safety, regulations, and process for home scaffolding.</span>
                  </Link>
                  <Link
                    href="/blog/choosing-the-right-scaffolding-company-western-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Choosing the Right Scaffolding Company in Western Sydney (2026 Guide)
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Tips on finding a reliable and compliant scaffolding provider for your project.</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              {/* Image box */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src="/images/residential_scaffold.webp"
                    alt="Active residential construction scaffolding setup in Sydney"
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Quote box */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-amber/10 text-accent-amber">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Get a Rapid Quote</h3>
                    <p className="text-xs text-slate-400">Response in less than 24 hours</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:0489150675"
                    className="flex items-center justify-center gap-2 rounded-xl bg-accent-amber py-3 text-sm font-bold text-slate-950 hover:bg-accent-amber-hover transition-colors shadow-lg shadow-accent-amber/10"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call 0489 150 675</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 py-3 text-sm font-bold text-white hover:bg-slate-900 transition-colors"
                  >
                    <Calendar className="h-4 w-4 text-accent-amber" />
                    <span>Request Online Quote</span>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 border-t border-slate-900 pt-4">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Flexible Hire & Scaffold Handover Issued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
