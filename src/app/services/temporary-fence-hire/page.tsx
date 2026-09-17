import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Shield, Calendar, HelpCircle } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Temporary Fence Hire Sydney | Construction Fencing & Gates",
  description:
    "Secure temporary fence hire in Sydney for residential building sites. Durable mesh panels, concrete feet, and gates. Request a quote from Tri Build Projects today.",
  alternates: {
    canonical: "/services/temporary-fence-hire",
  },
};

const faqs = [
  {
    question: "Who is temporary fence hire suitable for?",
    answer:
      "Our temporary fence hire services cater to residential home builders, owner-builders, roofing contractors, demolition teams, landscapers, and civil contractors across Sydney who require compliant perimeter security.",
  },
  {
    question: "What fencing and access options does Tri Build supply?",
    answer:
      "We supply anti-climb galvanized steel mesh panels, high-visibility concrete-filled plastic support feet, heavy-duty connecting clamps, lockable vehicle access gates, and dedicated pedestrian gates.",
  },
  {
    question: "How long can I hire temporary fencing for my project?",
    answer:
      "We offer flexible hire terms ranging from short-term emergency repairs and roof restorations to multi-month new residential home construction and development projects.",
  },
  {
    question: "Can I bundle temporary fencing with scaffolding or site amenities?",
    answer:
      "Yes. Many Sydney builders bundle temporary fence hire with residential scaffolding, roof access towers, and portable toilet hire to save on transport logistics and manage site setup through a single trusted provider.",
  },
];

export default function TemporaryFenceHirePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Temporary Fence Hire Sydney",
    "description":
      "Professional temporary construction fencing, anti-climb mesh panels, concrete-filled support feet, and lockable vehicle and pedestrian gates for residential building sites across Sydney.",
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
        "name": "Temporary Fence Hire",
        "item": "https://tribuildprojects.com.au/services/temporary-fence-hire",
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
            <span className="text-accent-amber">Temporary Fence Hire</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Temporary Fence Hire Sydney
              </h1>
              <div className="h-1 w-20 bg-accent-amber"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                A secure worksite is a safe worksite. Tri Build Projects provides reliable temporary fence hire solutions designed to protect residential construction perimeters, deter unauthorized access, secure building equipment, and maintain public safety across Greater Sydney.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                From new residential builds in Western Sydney to major home renovations and roof replacements, our temporary fencing systems feature anti-climb galvanized steel mesh panels anchored by concrete-filled support feet and heavy-duty clamps. We deliver and install fencing systems that keep your worksite secure, compliant, and organized.
              </p>

              {/* Who It Is For */}
              <div className="space-y-3 pt-2">
                <h2 className="text-xl font-bold text-white">Who Our Temporary Fencing Is For</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  {[
                    "Residential home builders & developers",
                    "Owner-builders managing new homes",
                    "Roofing contractors & restoration teams",
                    "Demolition & excavation contractors",
                    "Homeowners undertaking major renovations",
                    "Landscapers & swimming pool contractors",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Fencing & Access Options */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Available Fencing & Access Systems</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Galvanized anti-climb mesh panels",
                    "High-visibility concrete-filled plastic feet",
                    "Sturdy connecting clamps & bracing",
                    "Lockable vehicle access gates",
                    "Dedicated pedestrian access gates",
                    "Flexible short & long-term hire terms",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-accent-amber shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Use Cases */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white">Common Sydney Construction Use Cases</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-0.5">•</span>
                    <span><strong>New Residential Builds:</strong> Securing open site boundaries, building materials, and timber framing from initial earthworks to practical completion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-0.5">•</span>
                    <span><strong>Home Extensions & Renovations:</strong> Separating active work zones from occupied living areas, footpaths, and neighboring properties.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-0.5">•</span>
                    <span><strong>Demolition & Groundworks:</strong> Providing a secure perimeter to protect the public from hazards, dust, and heavy machinery movements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-amber mt-0.5">•</span>
                    <span><strong>Roof Replacements & Solar Work:</strong> Creating a safe ground perimeter beneath scaffolding and loading areas to prevent pedestrian access.</span>
                  </li>
                </ul>
              </div>

              {/* Where It Is Available */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white">Service Areas Across Greater Sydney</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Based from our operations yard in Maraylya, Tri Build Projects provides temporary fence delivery, setup, and collection throughout Western Sydney, the Hills District, Blacktown, Penrith, Parramatta, Box Hill, Caddens, and all surrounding Sydney metropolitan suburbs.
                </p>
              </div>

              {/* 3-Step Hire Process */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-white">Our 3-Step Fencing Hire Process</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 1</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Enquiry & Meterage</h4>
                    <p className="text-xs text-slate-400 mt-1">Contact us with your site address, perimeter meterage, and access gate needs for a prompt quote.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 2</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Delivery & Setup</h4>
                    <p className="text-xs text-slate-400 mt-1">Our team delivers and installs your temporary fencing securely to your site layout.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40">
                    <span className="text-accent-amber font-bold text-sm">Step 3</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Prompt Collection</h4>
                    <p className="text-xs text-slate-400 mt-1">When your project reaches completion, notify us for systematic dismantling and removal.</p>
                  </div>
                </div>
              </div>

              {/* Package Details / Bundling */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white">Combine with Scaffolding & Site Amenities</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Streamline your project logistics by sourcing your site establishment needs under one roof. Bundle your temporary fencing with our{" "}
                  <Link href="/services/residential-scaffolding" className="text-accent-amber underline hover:text-accent-amber-hover">
                    residential scaffolding
                  </Link>{" "}
                  or{" "}
                  <Link href="/services/portable-toilet-hire" className="text-accent-amber underline hover:text-accent-amber-hover">
                    portable toilet hire
                  </Link>{" "}
                  packages. Coordinating delivery with a single team saves on freight fees and ensures your job site is fully compliant from day one.
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
                <h3 className="text-lg font-bold text-white">Helpful Fencing & Site Safety Guides</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/blog/temporary-fence-hire-sydney"
                    className="group flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      Temporary Fence Hire Sydney: When Do You Need It and Why Is It Important?
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Read our homeowner and builder guide on temporary fencing rules, benefits, and boundary security tips.</span>
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
                    src="/images/temporary_fence.webp"
                    alt="Durable temporary chain link construction boundary fencing in Sydney"
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
                    <h3 className="text-base font-bold text-white">Get a Fencing Quote</h3>
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
                  <span>Compliant Perimeter Fencing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
