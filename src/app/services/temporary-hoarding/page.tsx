import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, CheckCircle2, Shield, Calendar, ArrowLeft } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Temporary Site Hoarding & Fencing Sydney | Secure Site Boundaries",
  description:
    "Secure temporary site hoarding and construction fencing in Sydney. Durable boundary panels and lockable vehicle gates. Request a quote from Tri Build Projects.",
};

export default function TemporaryHoardingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Temporary Site Hoarding and Fencing",
    "description": "Secure temporary site hoarding, perimeter fencing, and construction boundary panels for residential sites in Sydney.",
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
                Temporary Site Hoarding & Fencing
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Securing the perimeter of a residential project is a key legal and safety obligation. Tri Build Projects supplies and installs heavy-duty temporary site hoarding and steel mesh fence panels to secure your project boundary.
              </p>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our site hoarding systems prevent public access, protect pedestrians, and keep valuable building materials secure inside the worksite. We offer stable panels with concrete feet, wind braces, and secure, lockable vehicle and pedestrian gates.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Temporary Fencing Standards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Sturdy galvanized steel fence panels",
                    "Heavy-duty concrete filled feet",
                    "Wind bracing for exposed zones",
                    "Vehicle & pedestrian access gates",
                    "Shade cloth/mesh attachment options",
                    "Fast setup & dismantle matching scaffold timelines",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Deals */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">Save with Scaffolding + Fencing Packages</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Managing multiple contractors for site set-up wastes time and money. Tri Build Projects offers combined residential scaffolding and temporary site hoarding packages. We deliver and install both scaffolding and fencing simultaneously, reducing overall freight costs.
                </p>
              </div>
            </div>

            {/* Right Sidebar column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              {/* Image box */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src="/images/site_hoarding.png"
                    alt="Active temporary site hoarding fencing setup on construction perimeter"
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
                    <h3 className="text-base font-bold text-white">Get a Hoarding Quote</h3>
                    <p className="text-xs text-slate-400">Bundled deals for scaffolding & fencing</p>
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
                  <span>Durable Boundary Hoarding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
