import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, CheckCircle2, Shield, Calendar, ArrowLeft } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Residential Scaffolding Sydney | House & Renovation Access",
  description:
    "Expert residential scaffolding services in Sydney. Specializing in safe access solutions for houses, townhouses, and renovations. Get a free quote today.",
};

export default function ResidentialScaffoldingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Scaffolding Services",
    "description": "Safe, custom-engineered scaffolding for residential projects, extensions, and renovations throughout Sydney.",
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
          {/* Breadcrumb / Back Link */}
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
                Residential Scaffolding
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                At Tri Build Projects, we specialize in offering custom-designed residential scaffolding solutions. Every project, from a single-story home extension to a multi-level new residential build, requires safe, reliable access for all trades.
              </p>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We work closely with home builders, bricklayers, painters, and owner-builders in Sydney to design scaffolding structures that maximize productivity without compromising on strict SafeWork compliance.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Why Choose Our Residential Scaffolding?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Erected to exact specifications",
                    "Handover safety certificates issued",
                    "Narrow access & difficult terrain solutions",
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

              {/* Scope of Work */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">Ideal Applications</h3>
                <ul className="space-y-2.5 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>New House Builds:</strong> Perimeter scaffolding for bricklayers, roofers, and cladding installers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Home Renovation & Extensions:</strong> Specialized structures to reach second-story add-ons.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Exterior Maintenance:</strong> Secure workspace platforms for painters, window installers, and renderers.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Sidebar column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              {/* Image box */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src="/images/residential_scaffolding.png"
                    alt="Active residential construction scaffolding setup"
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
                    <h3 className="text-base font-bold text-white">Get a Rapid Quote</h3>
                    <p className="text-xs text-slate-400">Response in less than 24 hours</p>
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
