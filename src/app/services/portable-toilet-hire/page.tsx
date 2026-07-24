import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, ArrowLeft } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Portable Toilet Hire Sydney | Construction Portaloo Hire",
  description:
    "Clean, hygienic, and fully compliant portable toilet hire in Sydney. Perfect for residential building sites and renovations. Request a quote from Tri Build Projects today.",
};

export default function PortableToiletHirePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Portable Toilet Hire",
    "description": "Clean, modern, and hygienic portable construction toilets and portaloo units for residential builders and owner-builders in Sydney.",
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
                Portable Toilet Hire
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Provide clean, hygienic, and compliant sanitation facilities for your building project. Tri Build Projects delivers premium portable toilet hire solutions across all Sydney suburbs, ensuring your site remains fully compliant with SafeWork NSW standards.
              </p>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our portable toilet units are modern, spacious, and thoroughly sanitized before delivery. Designed specifically for construction environments, they feature hands-free foot-pump operations and heavy-duty designs to withstand active worksites.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Our Portaloo Standards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Fully self-contained units",
                    "Hygienic foot-pump flush and hand wash",
                    "Spacious, well-ventilated interiors",
                    "SafeWork NSW safety compliant",
                    "Regular cleaning services available",
                    "Fast delivery & pickup options",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Details */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">Complete Site Setup Packages</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  By pairing your Portable Toilet Hire with our Residential Scaffolding or Temporary Fencing packages, you can centralize your site setup logistics under a single team. Bundling services avoids multiple delivery fees, coordinates schedules seamlessly, and saves builder setup costs.
                </p>
              </div>
            </div>

            {/* Right Sidebar column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              {/* Image box */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src="/images/portable_toilet.webp"
                    alt="Clean hygienic portable toilet portaloo unit hired on a construction site"
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
                    <h3 className="text-base font-bold text-white">Get a Sanitation Quote</h3>
                    <p className="text-xs text-slate-400">Response in less than 24 hours</p>
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
                  <span>Safe & Hygienic Site Toilet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
