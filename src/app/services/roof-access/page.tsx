import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, HelpCircle } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Roof Access Scaffolding Sydney | Safe Stair & Platform Access",
  description:
    "Safe roof access scaffolding for residential projects in Sydney. Stair access towers and custom ladder access platforms. Call Tri Build Projects today.",
  alternates: {
    canonical: "/services/roof-access",
  },
};

const faqs = [
  {
    question: "Why are scaffold stair towers preferred over extension ladders?",
    answer:
      "Scaffold stair towers provide wide, stable, non-slip steps with double handrails and landing platforms, enabling tradespeople to safely carry roofing materials, tools, and solar panels between levels.",
  },
  {
    question: "Can roof access scaffolding be configured for steep or multi-storey roofs?",
    answer:
      "Yes. We design and install custom roof access towers suited for single-storey, double-storey, and steep-pitch residential roofs across Sydney, complying with Australian Standards AS/NZS 1576.",
  },
  {
    question: "Can roof access scaffolding be combined with edge protection?",
    answer:
      "Yes. Most roof restoration and re-sheeting projects combine walk-up stair access towers with perimeter edge protection guardrails to provide complete height safety from ground level to ridge line.",
  },
];

export default function RoofAccessPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Access Scaffolding Sydney",
    "description":
      "Safe access platforms, walk-up stair access towers, and custom ladder runs for residential roofing, solar, and building projects in Sydney.",
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
        "name": "Roof Access Scaffolding",
        "item": "https://tribuildprojects.com.au/services/roof-access",
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
            <span className="text-accent-amber">Roof Access Scaffolding</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Roof Access Scaffolding Sydney
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Roof access can be a major challenge on residential sites with steep roof pitches, multi-storey structures, or tight boundary lines. Tri Build Projects designs and installs safe roof access systems across Sydney, including walk-up scaffold stair towers, ladder access gates, and intermediate landing platforms.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our custom stair access towers provide a secure, walk-up pathway for roofing contractors, solar installers, and builders carrying tools and materials. We erect every tower with heavy-duty safety handrails, non-slip steps, and self-closing gates in full compliance with Australian Standards (AS/NZS 1576) and SafeWork NSW guidelines.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Roof Access Features & Systems</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Walk-up stair access towers",
                    "Self-closing safety gates",
                    "Internal ladder access traps",
                    "Sturdy landing decks & platforms",
                    "Non-slip aluminium treads",
                    "Custom configurations for multi-level roofs",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roofing Crew Protection */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Engineered for Roofers & Solar Trades</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We specialize in scaffolding access solutions that help trades stay productive and compliant. By replacing unstable ladders with structured walk-up stair towers, roofing restoration teams, solar technicians, and builders can transport materials to roof levels easily and safely.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  For comprehensive roofline safety, our roof access towers integrate seamlessly with our{" "}
                  <Link href="/services/edge-protection" className="text-accent-amber underline hover:text-accent-amber-hover">
                    edge protection systems
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/builder-roofer-access" className="text-accent-amber underline hover:text-accent-amber-hover">
                    builder & roofer access solutions
                  </Link>
                  .
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
                <h3 className="text-lg font-bold text-white">Helpful Roof Access Guides</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/blog/do-i-need-scaffolding-for-roof-repairs-in-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Do I Need Scaffolding for Roof Repairs in Sydney?
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Find out when safety regulations and practical needs require scaffold setups for roof work.</span>
                  </Link>
                  <Link
                    href="/blog/edge-protection-requirements-nsw"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Edge Protection Requirements in NSW Explained (2026 Guide)
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Learn NSW safety rules for fall prevention and roof guardrails on construction sites.</span>
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
                    src="/images/builder_access.webp"
                    alt="Australian residential roof safety scaffold setup on suburban build in Sydney"
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
                    <h3 className="text-base font-bold text-white">Get an Access Quote</h3>
                    <p className="text-xs text-slate-400">Custom roof layouts Sydney wide</p>
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
                  <span>Compliant Stair Towers & Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
