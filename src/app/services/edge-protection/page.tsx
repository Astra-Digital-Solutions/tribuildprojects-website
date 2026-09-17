import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, HelpCircle } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Edge Protection Sydney | Roof Guardrail & Fall Prevention",
  description:
    "Compliant roof edge protection and guardrail systems in Sydney. Protect your crew on residential roofs. Contact Tri Build Projects on 0489 150 675.",
  alternates: {
    canonical: "/services/edge-protection",
  },
};

const faqs = [
  {
    question: "When is roof edge protection required in NSW?",
    answer:
      "Under SafeWork NSW regulations and Australian Standards, edge protection or fall prevention controls are required whenever there is a risk of a fall from height, typically exceeding 2.0 metres. This applies to builders, roofers, and solar installers.",
  },
  {
    question: "Can edge protection be mounted on both tile and metal roofs?",
    answer:
      "Yes. Our temporary edge protection systems utilize specialized bracket mounts configured for timber eaves, top plates, fascia brackets, and metal roof structures, providing a secure perimeter without damaging building materials.",
  },
  {
    question: "Does roof edge protection replace full perimeter scaffolding?",
    answer:
      "For roof replacement, re-sheeting, and solar panel installation, edge protection often provides an efficient, cost-effective alternative. However, if external wall work or multiple trade working decks are required, full residential scaffolding is recommended.",
  },
];

export default function EdgeProtectionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Edge Protection Sydney",
    "description":
      "SafeWork NSW compliant temporary roof edge protection, guardrails, and fall prevention barriers for residential construction and roofing across Sydney.",
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
        "name": "Edge Protection",
        "item": "https://tribuildprojects.com.au/services/edge-protection",
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
            <span className="text-accent-amber">Edge Protection</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Edge Protection Systems Sydney
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Working at heights presents serious safety risks. Tri Build Projects installs heavy-duty temporary roof edge protection systems and guardrails across Sydney to ensure full compliance and fall protection for tradespeople working on residential rooflines.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you are installing solar panels, re-sheeting a tiled or metal roof, replacing gutters, or completing timber framing, our temporary guardrail systems mount securely to eaves, trusses, or structural members to create a secure, compliant working perimeter.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Temporary Roof Edge Safety Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Gutter & eave mount bracket systems",
                    "Gable-end protection barriers",
                    "Compliant with SafeWork NSW standards",
                    "Rapid installation and dismantling",
                    "Sturdy handrails & kickboard barriers",
                    "Ideal for solar, roofing & framing trades",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Common Roofing & Trade Applications</h2>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Solar Panel Installation:</strong> Protecting solar technicians moving around roof perimeters while hoisting heavy photovoltaic panels and tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Roof Replacements & Restorations:</strong> Essential fall barrier systems during tile stripping, metal sheeting, and ridge-capping works.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Fascia, Gutter & Eaves Repairs:</strong> Continuous handrail protection allowing trades to complete edge carpentry and metalwork safely.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>New Home Framing:</strong> Perimeter guardrails installed during truss erection to provide immediate upper-level fall protection.</span>
                  </li>
                </ul>
              </div>

              {/* Requirements & SafeWork */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white">When is Edge Protection Required?</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Under SafeWork NSW guidelines, edge protection or fall prevention systems are required on all construction projects where there is a risk of a fall from height (typically 2.0 metres or greater). For projects that also require walk-up access with heavy materials, consider pairing edge protection with our{" "}
                  <Link href="/services/roof-access" className="text-accent-amber underline hover:text-accent-amber-hover">
                    roof access scaffolding
                  </Link>{" "}
                  or full{" "}
                  <Link href="/services/residential-scaffolding" className="text-accent-amber underline hover:text-accent-amber-hover">
                    residential scaffolding
                  </Link>{" "}
                  solutions.
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
                <h3 className="text-lg font-bold text-white">Helpful Edge Protection Guides</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/blog/edge-protection-requirements-nsw"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Edge Protection Requirements in NSW Explained (2026 Guide)
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Understand the height safety codes and when edge protection is required for roofs.</span>
                  </Link>
                  <Link
                    href="/blog/do-solar-panel-installers-need-scaffolding-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Do Solar Panel Installers Need Scaffolding in Sydney? A Complete Guide
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Learn how solar installation teams utilize temporary edge protection and roof access systems.</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src="/images/edge_protection.webp"
                    alt="Active residential roof tiling and edge protection rails setup in Sydney"
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
                    <h3 className="text-base font-bold text-white">Get a Safety Quote</h3>
                    <p className="text-xs text-slate-400">Inspections & Setup Sydney wide</p>
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
                  <span>Licensed Riggers & SafeWork Handover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
