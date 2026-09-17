import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, HelpCircle, HardHat, Layers, ArrowRight } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Builder & Roofer Access Solutions Sydney | Scaffold Platforms",
  description:
    "Tailored height access scaffolding for Sydney residential builders and roofers. Platform bays, material staging decks, and stair access. Call 0489 150 675.",
  alternates: {
    canonical: "/services/builder-roofer-access",
  },
};

const faqs = [
  {
    question: "How do you coordinate scaffolding erection with building schedules?",
    answer:
      "We work closely with project managers and site supervisors to plan phased scaffold installations matching construction milestones—such as brickwork, framing, fascia installation, roofing, and cladding—preventing site delays.",
  },
  {
    question: "Can the scaffold layout be altered as construction progresses?",
    answer:
      "Yes. Our licensed scaffolders perform staged adaptations, such as raising working decks, adding hop-up brackets for renderers, or adjusting top lifts to clear roof overhangs.",
  },
  {
    question: "Do your builder access systems include materials loading bays?",
    answer:
      "Yes. We configure dedicated heavy-duty loading bays and landing decks to allow safe, efficient placement of bricks, timber framing, metal roofing sheets, and exterior cladding.",
  },
  {
    question: "Are handover certificates provided for builder site compliance files?",
    answer:
      "Yes. Following every installation or major modification, our licensed scaffolders issue a SafeWork NSW compliant scaffold handover certificate verifying structural compliance for your site records.",
  },
];

export default function BuilderRooferAccessPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Builder and Roofer Access Solutions",
    "description":
      "Custom scaffold access platforms, staging decks, and overhead protection tailored for builders and roofing contractors in Sydney.",
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
        "name": "Builder & Roofer Access Solutions",
        "item": "https://tribuildprojects.com.au/services/builder-roofer-access",
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
            <span className="text-accent-amber">Builder &amp; Roofer Access</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Builder &amp; Roofer Access Solutions
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Residential building sites are fast-paced environments requiring precise multi-trade coordination.
                Tri Build Projects engineers access scaffolding systems tailored around the specific workflow of
                builders, carpenters, roofers, and external cladders to avoid site bottlenecks and downtime.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you are managing a second-storey addition, multi-dwelling development, or complete re-roofing
                project, we configure scaffold structures that facilitate material handling, continuous perimeter fall
                protection, and ergonomic working levels across every construction stage.
              </p>

              {/* Multi-Trade Coordination */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <HardHat className="h-5 w-5 text-accent-amber" />
                  <span>Coordinated Multi-Trade Height Access</span>
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Different trades require different platform configurations. By collaborating with site supervisors
                  during the scheduling phase, we ensure scaffolds accommodate:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                    <h4 className="text-sm font-bold text-white mb-1">Framing &amp; Structural</h4>
                    <p className="text-xs text-slate-400">
                      Clear internal access with staging decks for timber, steel posts, and roof trusses.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                    <h4 className="text-sm font-bold text-white mb-1">Bricklaying &amp; Masonry</h4>
                    <p className="text-xs text-slate-400">
                      Heavy-duty working decks and dedicated loading bays configured to hold brick packs and mortar tubs.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                    <h4 className="text-sm font-bold text-white mb-1">Roofing &amp; Fascia</h4>
                    <p className="text-xs text-slate-400">
                      Platform heights set precisely below eave levels with top guardrails for unhindered gutter and sheet installation.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                    <h4 className="text-sm font-bold text-white mb-1">Cladding, Render &amp; Paint</h4>
                    <p className="text-xs text-slate-400">
                      Hop-up bracket extensions and unobstructed face runs allowing continuous finishes without wall ties in work zones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Access Solutions Tailored for Trades</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Wide barrow-runs & landing decks",
                    "Heavy-duty loading bays",
                    "A-frame & cantilever scaffolds",
                    "Integrated safety catch screens",
                    "Overhead trade protection gantries",
                    "Coordinated progress dismantle",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services & Bundling */}
              <div className="space-y-4 pt-6 border-t border-slate-800/60">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-accent-amber" />
                  <span>Related Builder Site Services</span>
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Tri Build Projects offers integrated site packages for residential construction sites across Sydney.
                  Combine access scaffolding with perimeter site security and essential amenities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/services/residential-scaffolding"
                    className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors block">
                        Residential Scaffolding
                      </span>
                      <span className="text-xs text-slate-500">Full perimeter and modular systems</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-accent-amber transition-colors" />
                  </Link>
                  <Link
                    href="/services/roof-access"
                    className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors block">
                        Roof Access Scaffolding
                      </span>
                      <span className="text-xs text-slate-500">Stair towers and ladder access</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-accent-amber transition-colors" />
                  </Link>
                  <Link
                    href="/services/temporary-fence-hire"
                    className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors block">
                        Temporary Fence Hire
                      </span>
                      <span className="text-xs text-slate-500">Site boundary security panels</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-accent-amber transition-colors" />
                  </Link>
                  <Link
                    href="/services/portable-toilet-hire"
                    className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors block">
                        Portable Toilet Hire
                      </span>
                      <span className="text-xs text-slate-500">Hygienic site amenities</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-accent-amber transition-colors" />
                  </Link>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-4 pt-6 border-t border-slate-800/60">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-accent-amber" />
                  <h3 className="text-lg font-bold text-white">Frequently Asked Questions</h3>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-xl border border-slate-800 bg-slate-900/30 p-4">
                      <h4 className="text-sm font-bold text-white mb-2">{faq.question}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Helpful Guides / Related Articles */}
              <div className="space-y-4 pt-6 border-t border-slate-800/60 mt-6">
                <h3 className="text-lg font-bold text-white">Helpful Trade Access Guides</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/blog/do-i-need-scaffolding-for-roof-repairs-in-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Do I Need Scaffolding for Roof Repairs in Sydney?
                    </span>
                    <span className="text-xs text-slate-500 mt-1">
                      Guideline on height access safety rules for roofing crews and builders.
                    </span>
                  </Link>
                  <Link
                    href="/blog/choosing-the-right-scaffolding-company-western-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Choosing the Right Scaffolding Company in Western Sydney (2026 Guide)
                    </span>
                    <span className="text-xs text-slate-500 mt-1">
                      Tips on comparing scaffolding suppliers for residential and commercial sites.
                    </span>
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
                    alt="Custom scaffolding solutions for builder and roofer height access"
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center"
                    loading="lazy"
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
                    <h3 className="text-base font-bold text-white">Get a Builder Quote</h3>
                    <p className="text-xs text-slate-400">Coordinated scheduling Sydney wide</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:0489150675"
                    className="flex items-center justify-center gap-2 rounded-xl bg-accent-amber py-3 text-sm font-bold text-slate-950 hover:bg-accent-amber-hover transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call 0489 150 675</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 py-3 text-sm font-bold text-white hover:bg-slate-900 transition-colors"
                  >
                    <Calendar className="h-4 w-4 text-accent-amber" />
                    <span>Get Quote</span>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 border-t border-slate-900 pt-4">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Staged Rigging &amp; SafeWork Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

