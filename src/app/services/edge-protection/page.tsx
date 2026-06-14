import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, ArrowLeft } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Edge Protection Sydney | Roof Guardrail & Fall Prevention",
  description:
    "Compliant roof edge protection and guardrail systems in Sydney. Protect your crew on residential roofs. Contact Tri Build Projects on 0406 880 403.",
};

export default function EdgeProtectionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Edge Protection Services",
    "description": "SafeWork NSW compliant temporary roof edge protection, handrails, and fall prevention barriers for residential worksites.",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Tri Build Projects",
      "telephone": "0406880403"
    },
    "areaServed": "Sydney, NSW, Australia"
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-accent-amber transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Services</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Edge Protection Systems
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Working at heights presents serious risks. Tri Build Projects installs high-visibility, heavy-duty temporary edge protection systems and roof guardrails to ensure full compliance and complete safety for tradespeople working on residential structures.
              </p>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you are installing solar panels, re-sheeting a roof, or constructing timber framing, our temporary guardrail systems mount securely to concrete structures, timber eaves, or existing metal brackets, ensuring a solid protective envelope.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Temporary Roof Edge Safety</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Gutter/Eave mount brackets",
                    "Gable-end protection barriers",
                    "SafeWork NSW compliant designs",
                    "Quick install and removal",
                    "Sturdy handrails & kickboards",
                    "Perfect for solar and metal roofers",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements details */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">When is Edge Protection Required?</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  According to SafeWork NSW guidelines, edge protection or fallback prevention systems are required on all construction projects where there is a risk of falling from heights (typically exceeding 2.0 meters). This is highly critical for builders, carpenters, painters, and roof tilers.
                </p>
              </div>
            </div>

            {/* Right Sidebar column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src="/images/edge_protection.webp"
                    alt="Active residential roof tiling and edge protection rails setup"
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
                    <h3 className="text-base font-bold text-white">Get a Safety Quote</h3>
                    <p className="text-xs text-slate-400">Inspections & Setup Sydney wide</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:0406880403"
                    className="flex items-center justify-center gap-2 rounded-xl bg-accent-amber py-3 text-sm font-bold text-slate-950 hover:bg-accent-amber-hover transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call 0406 880 403</span>
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
