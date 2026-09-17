import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, HelpCircle } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mobile Scaffold Hire Sydney | Aluminium Scaffold Towers",
  description:
    "Premium aluminium mobile scaffold hire in Sydney. Lightweight, easy to move, lockable wheels. Perfect for painters and renderers. Get a quote today.",
  alternates: {
    canonical: "/services/mobile-scaffold-hire",
  },
};

const faqs = [
  {
    question: "When should I choose mobile scaffold hire over fixed scaffolding?",
    answer:
      "Mobile scaffold towers are ideal for shorter-duration jobs where work moves frequently along a wall or ceiling, such as interior painting, rendering touch-ups, gutter cleaning, and electrical installations.",
  },
  {
    question: "Can mobile aluminium scaffolding be used both indoors and outdoors?",
    answer:
      "Yes. The lightweight aluminium construction and lockable castor wheels make it suitable for indoor high-ceiling foyers, as well as firm, flat outdoor residential pathways and driveways.",
  },
  {
    question: "How do I request a mobile scaffold hire quote in Sydney?",
    answer:
      "Simply contact our team with your working height requirements, project location, and intended hire duration. We will provide a transparent quote covering delivery, hire, and pickup across Sydney.",
  },
];

export default function MobileScaffoldPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Scaffold Hire Sydney",
    "description":
      "Lightweight, heavy-duty aluminium mobile scaffold tower hire services for residential painting, maintenance, and trade projects in Sydney.",
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
        "name": "Mobile Scaffold Hire",
        "item": "https://tribuildprojects.com.au/services/mobile-scaffold-hire",
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
            <span className="text-accent-amber">Mobile Scaffold Hire</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Mobile Scaffold Hire Sydney
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                For indoor high-ceiling work, exterior paint touch-ups, or rendering projects, traditional steel scaffolding can be too heavy and fixed. Tri Build Projects provides lightweight, heavy-duty aluminium mobile scaffold tower hire across Sydney, offering flexible and easily repositioned access.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our mobile scaffolding towers sit on high-grade, lockable castor wheels, allowing your crew to roll the platform smoothly along the work face as tasks progress. Designed with integrated safety guardrails, internal ladder access, and trapdoor decks, they deliver a stable, secure elevated work station.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Mobile Tower Features & Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Heavy-duty lightweight aluminium construction",
                    "Lockable swivel castor wheels",
                    "Compact footprint for residential pathways",
                    "Safety guardrails and trapdoor platforms",
                    "Internal ladder access for safe climbing",
                    "Prompt delivery & collection Sydney-wide",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage scenario */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Ideal Trade & Residential Applications</h2>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Residential Painters & Decorators:</strong> Move easily along exterior walls, high internal stairwells, and cathedral ceilings without dismantling the tower.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Gutter, Fascia & Eaves Work:</strong> Swift access setup that rolls alongside the house perimeter on flat concrete or firm ground.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Electrical & Light Fitting Trades:</strong> Safe, elevated platform for running conduit, light installations, and air-conditioning ducting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Plastering & Rendering Touch-ups:</strong> Stable working surface with enough room for tools, mud pans, and materials.</span>
                  </li>
                </ul>
              </div>

              {/* Mobile vs Fixed Scaffolding */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white">Need Full Perimeter Access Instead?</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  While mobile aluminium scaffolds are ideal for fast, localized work, projects requiring multi-trade access across an entire house or complex rooflines are best served by our fixed{" "}
                  <Link href="/services/residential-scaffolding" className="text-accent-amber underline hover:text-accent-amber-hover">
                    residential scaffolding systems
                  </Link>
                  . We can advise you on the most cost-effective solution during your quote consultation.
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
                <h3 className="text-lg font-bold text-white">Helpful Scaffold Hire Guides</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/blog/mobile-scaffold-hire-vs-fixed-scaffolding-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Mobile Scaffold Hire vs Fixed Scaffolding: Which Is Right for Your Project?
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Compare mobile aluminium towers and fixed scaffolding to determine the best access system.</span>
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
                    src="/images/mobile_scaffold.webp"
                    alt="Lightweight aluminium mobile scaffold tower hired in Sydney"
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
                    <h3 className="text-base font-bold text-white">Hire Quote Request</h3>
                    <p className="text-xs text-slate-400">Flexible hire terms Sydney wide</p>
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
                  <span>Lightweight Aluminium Towers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
