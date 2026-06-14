import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, CheckCircle2, Shield, Calendar, ArrowLeft } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Builder & Roofer Access Solutions Sydney | Scaffold Platforms",
  description:
    "Tailored height access scaffolding for Sydney residential builders and roofers. Platform bays, material chutes, and stair access. Call 0406 880 403.",
};

export default function BuilderRooferAccessPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Builder and Roofer Access Solutions",
    "description": "Custom scaffold access platforms, staging decks, and overhead protection tailored for builders and roofing contractors in Sydney.",
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
                Builder & Roofer Access Solutions
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Residential building sites are busy and require multi-trade coordination. Tri Build Projects designs access scaffolding systems customized to the precise stages of a builder's and roofer's workflow to avoid delays.
              </p>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you are managing a timber framing stage, installing brickwork, or laying tiles, we configure scaffold structures that facilitate easy material loading. We create wide platform bays and heavy-duty staging decks to hold bricks, mortars, and timber framing parts.
              </p>

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

              {/* Trade specific options */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">Streamline Your Worksite</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Scaffolding shouldn't get in the way. By consulting with you during the layout planning phase, we build scaffolding frames that allow plasterers, carpenters, and roofers to work in tandem. This increases speed on site and guarantees that deadlines are met safely.
                </p>
              </div>
            </div>

            {/* Right Sidebar column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              {/* Image box */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src="/images/builder_access.png"
                    alt="Custom scaffolding solutions for builder and roofer height access"
                    className="h-full w-full object-cover object-center"
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
                  <span>Staged Rigging & SafeWork Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
