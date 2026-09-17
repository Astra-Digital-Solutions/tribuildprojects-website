import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, HelpCircle } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Scaffold Erect & Dismantle Sydney | Professional Scaffolding Crew",
  description:
    "Professional scaffold erect and dismantle services in Sydney. Fully licensed riggers and scaffolders. Secure, compliant site deliveries. Call 0489 150 675.",
  alternates: {
    canonical: "/services/erect-dismantle",
  },
};

const faqs = [
  {
    question: "Who is qualified to erect and dismantle scaffolding in NSW?",
    answer:
      "Under SafeWork NSW regulations, any scaffold where a person or object can fall more than 4.0 metres must be erected, altered, and dismantled by a licensed scaffolder holding the appropriate high-risk work licence.",
  },
  {
    question: "What is an official scaffold handover certificate?",
    answer:
      "A handover certificate is a formal compliance document issued by our licensed scaffolder upon completing erection. It certifies that the structure has been inspected, built to plan, and is safe for trade workers to access.",
  },
  {
    question: "How does your crew protect the home during the dismantling phase?",
    answer:
      "Our team conducts a systematic top-down dismantle, taking meticulous care around glazed windows, gutters, solar panels, landscaping, and newly rendered or painted walls to leave the property clean and undamaged.",
  },
];

export default function ErectDismantlePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Scaffold Erect & Dismantle Sydney",
    "description":
      "Professional erection and dismantling of steel and aluminum scaffolding by licensed scaffolders across Sydney, including SafeWork handover certificates.",
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
        "name": "Scaffold Erect & Dismantle",
        "item": "https://tribuildprojects.com.au/services/erect-dismantle",
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
            <span className="text-accent-amber">Scaffold Erect & Dismantle</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Scaffold Erect & Dismantle Sydney
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Scaffold rigging is a specialized discipline strictly regulated by SafeWork NSW. Tri Build Projects provides full-service scaffold erection and dismantling services across Sydney, ensuring that your height access structures are assembled safely, certified on handover, and removed cleanly.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our certified team handles every stage of the setup: assessing ground conditions, establishing secure soleplates, erecting the scaffolding to exact plans, signing off handover safety tags, and executing a safe, systematic dismantle when your residential project is complete.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Full-Service Rigging Standards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "SafeWork NSW compliant licensed scaffolders",
                    "Site-specific Safe Work Method Statements (SWMS)",
                    "Comprehensive pre-handover inspections",
                    "Official scaffold handover tags issued",
                    "Careful dismantling near glass & gardens",
                    "Prompt, reliable scheduling across Sydney",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Our 3-Stage Execution Process</h2>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-xs">Stage 1</span>
                    <h3 className="text-sm font-semibold text-white mt-0.5">Site Assessment & Precision Delivery</h3>
                    <p className="text-xs text-slate-400 mt-1">We assess ground levels, driveway access, and boundary constraints, delivering scaffolding components directly to the work staging zone.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-xs">Stage 2</span>
                    <h3 className="text-sm font-semibold text-white mt-0.5">Certified Erection & Handover</h3>
                    <p className="text-xs text-slate-400 mt-1">Our licensed team erects the structure with guardrails, decks, and ties, signing off an official handover certificate before work commences.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-xs">Stage 3</span>
                    <h3 className="text-sm font-semibold text-white mt-0.5">Careful Dismantling & Removal</h3>
                    <p className="text-xs text-slate-400 mt-1">Once trades complete their work, our crew systematically dismantles the scaffold, protecting surrounding walls, windows, and gardens.</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white">Comprehensive Access Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our erect and dismantle service is delivered across all our core systems, including{" "}
                  <Link href="/services/residential-scaffolding" className="text-accent-amber underline hover:text-accent-amber-hover">
                    residential scaffolding
                  </Link>
                  ,{" "}
                  <Link href="/services/roof-access" className="text-accent-amber underline hover:text-accent-amber-hover">
                    roof access scaffolding
                  </Link>
                  , and{" "}
                  <Link href="/services/builder-roofer-access" className="text-accent-amber underline hover:text-accent-amber-hover">
                    builder & roofer access platforms
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
                <h3 className="text-lg font-bold text-white">Helpful Scaffolding Safety & Inspection Guides</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/blog/how-long-can-scaffolding-stay-up-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      How Long Can Scaffolding Stay Up? A Guide for Sydney Homeowners & Builders
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Learn about 30-day inspection mandates, adverse weather checks, and scaffold hire duration rules.</span>
                  </Link>
                  <Link
                    href="/blog/scaffolding-safety-checklist-home-renovations-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Scaffolding Safety Checklist for Home Renovations in Sydney
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Discover the critical pre-start safety checks and handover protocols before accessing scaffolding.</span>
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
                    alt="Licensed scaffold crew erecting residential scaffolding safely in Sydney"
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
                    <h3 className="text-base font-bold text-white">Erect & Dismantle Quote</h3>
                    <p className="text-xs text-slate-400">SafeWork handover included</p>
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
                  <span>Serving Sydney-Wide with Safe Riggers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
