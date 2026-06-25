import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, ArrowLeft } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Scaffold Erect & Dismantle Sydney | Professional Scaffolding Crew",
  description:
    "Professional scaffold erect and dismantle services in Sydney. Fully licensed riggers and scaffolders. Secure, compliant site deliveries. Call 0489 150 675.",
};

export default function ErectDismantlePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Scaffold Erect & Dismantle",
    "description": "Professional erection and dismantling of steel and aluminum scaffolding by licensed riggers in Sydney.",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Tri Build Projects",
      "telephone": "0489150675"
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
                Scaffold Erect & Dismantle
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Scaffold rigging is a highly specialized skill regulated strictly by SafeWork NSW. Tri Build Projects provides comprehensive scaffold erection and dismantling services, ensuring the scaffolding is set up safely and taken down cleanly.
              </p>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our team handles everything from transporting materials to your Sydney site, inspecting ground conditions, erecting the structures, signing off handover certificates, and executing safe, systematic dismantles once your residential project is complete.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Full-Service Rigging Standards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "SafeWork licensed scaffolders",
                    "Site-specific risk assessments (SWMS)",
                    "Pre-handover inspections",
                    "Official scaffold handovers",
                    "Careful dismantling near glass & gardens",
                    "Prompt, reliable scheduling",
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
                <h3 className="text-lg font-bold text-white">Our Execution Process</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-slate-900 bg-slate-950/40">
                    <h4 className="text-sm font-semibold text-white">1. Site Assessment & Delivery</h4>
                    <p className="text-xs text-slate-400 mt-1">We assess ground levels, overhead power lines, and site access. We then deliver premium components directly to your site.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-900 bg-slate-950/40">
                    <h4 className="text-sm font-semibold text-white">2. Precision Erection</h4>
                    <p className="text-xs text-slate-400 mt-1">Our licensed riggers erect the scaffolding using heavy-duty fittings, safety guardrails, mesh, and base plates.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-900 bg-slate-950/40">
                    <h4 className="text-sm font-semibold text-white">3. Handover & Dismantle</h4>
                    <p className="text-xs text-slate-400 mt-1">We provide an official handover tag. When your trade work is finished, we return to safely dismantle and clear the materials.</p>
                  </div>
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
                    alt="Licensed scaffold crew erecting residential scaffolding safely"
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
                    <h3 className="text-base font-bold text-white">Erect & Dismantle Quote</h3>
                    <p className="text-xs text-slate-400">SafeWork handover included</p>
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
