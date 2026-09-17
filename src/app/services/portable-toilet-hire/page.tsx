import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, HelpCircle } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Portable Toilet Hire Sydney | Construction Portaloo Hire",
  description:
    "Clean, hygienic, and fully compliant portable toilet hire in Sydney. Perfect for residential building sites and renovations. Request a quote from Tri Build Projects today.",
  alternates: {
    canonical: "/services/portable-toilet-hire",
  },
};

const faqs = [
  {
    question: "When is portable toilet hire needed for residential projects?",
    answer:
      "A site toilet is essential whenever construction, renovation, or demolition work takes place on sites where existing household bathrooms are disconnected, being remodeled, or inaccessible to external trades.",
  },
  {
    question: "How are portable toilets delivered and positioned on Sydney properties?",
    answer:
      "Our team transports and positions self-contained units onto accessible, level ground—such as front driveways, site staging bays, or turf areas—ensuring easy access for workers and service vehicles.",
  },
  {
    question: "How does site toilet maintenance and servicing work during the hire?",
    answer:
      "Units arrive fully sanitized, stocked, and ready for immediate use. For ongoing projects, scheduled cleaning and servicing packages can be tailored to your project duration and crew requirements.",
  },
  {
    question: "Can I bundle portable toilet hire with temporary fencing and scaffolding?",
    answer:
      "Yes. Sourcing your site amenities together with temporary fencing and residential scaffolding streamlines delivery logistics, reduces setup overheads, and keeps site management under a single provider.",
  },
];

export default function PortableToiletHirePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Portable Toilet Hire Sydney",
    "description":
      "Clean, modern, and hygienic portable construction toilets and portaloo units for residential builders, renovators, and owner-builders across Sydney.",
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
        "name": "Portable Toilet Hire",
        "item": "https://tribuildprojects.com.au/services/portable-toilet-hire",
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
            <span className="text-accent-amber">Portable Toilet Hire</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Portable Toilet Hire Sydney
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Provide clean, hygienic, and compliant sanitation facilities for your construction project. Tri Build Projects delivers premium portable toilet hire solutions across all Sydney suburbs, helping builders, owner-builders, and trade contractors maintain safe and organized site amenities.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our portable toilet units are modern, spacious, and thoroughly sanitized before dispatch. Designed specifically to endure tough construction environments, each unit features hands-free foot-pump flushing and hand-wash basins to uphold high hygiene standards on active worksites.
              </p>

              {/* Key Features */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Our Portaloo Standards & Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Fully self-contained, robust units",
                    "Hygienic foot-pump flush operation",
                    "Integrated foot-pump hand wash basin",
                    "Spacious, well-ventilated interiors",
                    "Non-slip flooring & secure door lock",
                    "Reliable delivery & pickup across Sydney",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Construction Use Cases */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Construction & Renovation Use Cases</h2>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>New Residential Home Builds:</strong> Essential trade amenities from vacant block groundworks through framing, bricklaying, and final fit-out.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Major Home Renovations & Additions:</strong> Providing dedicated facilities for subcontractors when house plumbing is disconnected or homeowners are in residence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Roof Replacements & Restorations:</strong> Convenient ground-level facilities for roofing teams working long hours on site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-1">•</span>
                    <span><strong>Demolition & Civil Works:</strong> Independent, heavy-duty sanitation that requires no permanent utility connection during site prep.</span>
                  </li>
                </ul>
              </div>

              {/* Delivery & Hire Process */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">Delivery, Placement & Hire Process</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 1</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Book Your Unit</h4>
                    <p className="text-xs text-slate-400 mt-1">Contact us with your project address, start date, and estimated duration for a fast quote.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 2</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Site Placement</h4>
                    <p className="text-xs text-slate-400 mt-1">We position the clean unit on accessible, level ground ready for immediate crew use.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 3</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Prompt Removal</h4>
                    <p className="text-xs text-slate-400 mt-1">When your project reaches completion, our team collects and removes the unit cleanly.</p>
                  </div>
                </div>
              </div>

              {/* Complete Site Setup Bundles */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white">Bundle with Fencing & Scaffolding</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Avoid coordinating multiple hire suppliers. By pairing your portable toilet hire with our{" "}
                  <Link href="/services/temporary-fence-hire" className="text-accent-amber underline hover:text-accent-amber-hover">
                    temporary fence hire
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/residential-scaffolding" className="text-accent-amber underline hover:text-accent-amber-hover">
                    residential scaffolding
                  </Link>{" "}
                  packages, your entire site establishment is delivered and managed by one dedicated Sydney team.
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
                <h3 className="text-lg font-bold text-white">Helpful Site Establishment Guides</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/blog/temporary-fence-hire-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Temporary Fence Hire Sydney: When Do You Need It and Why Is It Important?
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Learn how proper boundary fencing and site amenities keep residential projects safe and compliant.</span>
                  </Link>
                  <Link
                    href="/blog/residential-scaffolding-sydney-complete-homeowners-guide"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Residential Scaffolding Sydney: The Complete Homeowner&apos;s Guide
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Explore complete site safety requirements and access setups for home construction.</span>
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
                    src="/images/portable_toilet.webp"
                    alt="Clean hygienic portable toilet portaloo unit hired on a construction site in Sydney"
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
                    <h3 className="text-base font-bold text-white">Get a Sanitation Quote</h3>
                    <p className="text-xs text-slate-400">Response in less than 24 hours</p>
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
                  <span>Safe & Hygienic Site Amenities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
