import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Hammer,
  HardHat,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  Compass,
  UserCheck,
  Fence,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";

const services = [
  {
    title: "Residential Scaffolding",
    description: "Tailored scaffold systems for houses, townhouses, and renovations. Engineered for safe, easy access on all residential profiles.",
    href: "/services/residential-scaffolding",
    icon: HardHat,
  },
  {
    title: "Edge Protection",
    description: "Guardrails and physical barriers to protect tradespeople working at heights. Compliant with SafeWork NSW guidelines.",
    href: "/services/edge-protection",
    icon: Shield,
  },
  {
    title: "Roof Access Scaffolding",
    description: "Custom-configured platform towers and stair access for roofers, solar installers, and gutter maintenance crew.",
    href: "/services/roof-access",
    icon: Compass,
  },
  {
    title: "Scaffold Erect & Dismantle",
    description: "Full-service scaffold erection and dismantle by licensed, ticketed professionals. Handover certificate provided.",
    href: "/services/erect-dismantle",
    icon: Hammer,
  },
  {
    title: "Mobile Scaffold Hire",
    description: "Heavy-duty aluminum mobile towers. Easy to maneuver and perfect for paint jobs, repairs, and interior high-access work.",
    href: "/services/mobile-scaffold-hire",
    icon: Clock,
  },
  {
    title: "Builder & Roofer Access Solutions",
    description: "Targeted access scaffolds designed specifically to streamline residential builders' and roofers' workflows.",
    href: "/services/builder-roofer-access",
    icon: UserCheck,
  },
  {
    title: "Temporary Fence Hire",
    description: "Galvanized temporary mesh fencing and lockable access gates for residential construction sites. Keep your site secure and compliant.",
    href: "/services/temporary-fence-hire",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Do you service all of Sydney for residential scaffolding and fencing?",
    answer: "Yes, Tri Build Projects operates Sydney-wide. We service all metropolitan areas, providing scaffolding and temporary fencing for owner-builders, residential developers, roofers, and paint contractors.",
  },
  {
    question: "Are you licensed and insured with SafeWork NSW?",
    answer: "Absolutely. We are fully insured, and our scaffold erectors hold high-risk work licenses certified by SafeWork NSW. We issue official handover certificates upon completing any scaffold installation.",
  },
  {
    question: "Do you offer combined packages for scaffolding and temporary fencing?",
    answer: "Yes. Since we specialize in both residential scaffolding and temporary fencing, we offer bundled packages. This helps simplify site management and saves residential builders on delivery and setup costs.",
  },
  {
    question: "How long can we hire the scaffolding or fencing for?",
    answer: "We offer flexible hire terms tailored to your residential build schedule. Standard hire periods are typically 4, 8, or 12 weeks, with options to extend weekly to accommodate any project delays.",
  },
  {
    question: "What is edge protection, and is it mandatory for residential roofing?",
    answer: "Edge protection consists of temporary guardrails designed to prevent falls from heights. SafeWork NSW requires fall protection measures on any residential roofing or height-work where a risk of fall exists (typically 2 meters or more).",
  },
];

export default function HomePage() {
  // Schema markup data
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Tri Build Projects",
    "legalName": "TRI BUILD PROJECTS PTY LTD",
    "description": "Sydney's specialist in residential scaffolding, edge protection, roof access, and temporary fencing. Serving Sydney wide.",
    "telephone": "0489150675",
    "email": "info@tribuildprojects.com.au",
    "priceRange": "$$",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Sydney, NSW, Australia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "ABN",
        "value": "15697975732"
      },
      {
        "@type": "PropertyValue",
        "name": "ACN",
        "value": "697975732"
      }
    ]
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
      {/* Schema Injection */}
      <JsonLd data={businessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-20 lg:pt-8 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent-amber/5 blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-slate-900 blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-stretch">
            {/* Left text column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-amber/30 bg-accent-amber/10 px-4 py-1.5 text-sm font-semibold text-accent-amber animate-pulse">
                <Shield className="h-4 w-4" />
                <span>Sydney Wide | Residential Scaffolding & Fencing</span>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                Safe, Compliant <br />
                <span className="text-gradient-gold">Residential Scaffold & Fencing</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Tri Build Projects Pty Ltd delivers top-tier residential scaffolding, roof access solutions, and temporary fencing. We specialize exclusively in residential builds, framing, and roofing across Sydney.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:0489150675"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-accent-amber px-8 py-5 text-lg sm:text-xl font-extrabold text-slate-950 shadow-xl shadow-accent-amber/20 hover:bg-accent-amber-hover hover:scale-[1.02] transition-all w-full sm:w-auto text-center"
                >
                  <Phone className="h-6 w-6 shrink-0 fill-current" />
                  <span>Call 0489 150 675</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-800 bg-slate-900/90 px-8 py-5 text-lg sm:text-xl font-extrabold text-white hover:bg-slate-800 hover:border-slate-700 hover:scale-[1.02] transition-all w-full sm:w-auto text-center"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-6 w-6 shrink-0 text-accent-amber" />
                </Link>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-900 pt-8 max-w-lg">
                <div className="space-y-1">
                  <p className="text-xl font-bold text-white">100%</p>
                  <p className="text-xs text-slate-400">Residential Focus</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold text-white">SafeWork</p>
                  <p className="text-xs text-slate-400">NSW Compliant</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold text-white">Sydney</p>
                  <p className="text-xs text-slate-400">Wide Coverage</p>
                </div>
              </div>
            </div>

            {/* Right graphic/image column */}
            <div className="lg:col-span-6 relative flex flex-col justify-stretch">
              <div className="relative mx-auto max-w-[540px] lg:max-w-none w-full h-full flex flex-col justify-stretch">
                {/* Visual frame decorative bg */}
                <div className="absolute -inset-4 rounded-3xl border border-accent-amber/20 bg-slate-900/40 blur-sm"></div>
                <div className="relative flex-grow overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-3 shadow-2xl flex flex-col">
                  {/* Hero Image: Residential Scaffolding and Fencing */}
                  <div className="relative w-full h-full min-h-[350px] lg:min-h-0 flex-grow overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src="/images/residential_scaffold.webp"
                      alt="Residential building frame under construction with safety scaffolding"
                      fill
                      priority
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 to-transparent p-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-amber">
                        Featured Project
                      </span>
                      <p className="text-sm font-semibold text-white">
                        Sydney Residential Scaffold Setup
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-slate-950/40 border-y border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-amber">
              What We Do
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Professional Access & Protection Solutions
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We provide fully engineered, SafeWork-compliant scaffolding and temporary fencing packages specifically designed for Sydney residential construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="glass-panel group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-accent-amber/30 hover:shadow-xl hover:shadow-accent-amber/5"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-amber/10 text-accent-amber transition-colors group-hover:bg-accent-amber group-hover:text-slate-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-amber transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href={service.href}
                      className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800/80 py-3.5 px-4 text-sm font-extrabold text-slate-300 hover:bg-accent-amber hover:text-slate-950 hover:border-accent-amber transition-all duration-200"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Strengths (Safety & Compliance) */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-3 shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src="/images/builder_access.webp"
                    alt="Safe steel scaffolding access stair tower leading to residential roof level"
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-amber">
                Our Standard
              </span>
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Built on Safety, Engineered for Compliance
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Tri Build Projects Pty Ltd operates with an uncompromising focus on worksite safety. Whether we are erecting simple mobile scaffolding or multi-tier roof access configurations, our structures undergo rigorous safety checks.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent-amber/10 text-accent-amber">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Handover Certification</h4>
                    <p className="text-xs text-slate-400">Every installation comes with an official handover certificate verifying SafeWork compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent-amber/10 text-accent-amber">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Durable Temporary Fencing</h4>
                    <p className="text-xs text-slate-400">Durable galvanized fence panels installed dynamically to protect your site perimeter and prevent unauthorized entry.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent-amber/10 text-accent-amber">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Licensed Scaffold Crew</h4>
                    <p className="text-xs text-slate-400">All crew members are licensed, card-carrying professionals with extensive residential experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-950/60 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-amber">
              Service Configurations
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Typical Scaffolding & Fencing Setups
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Reference guide of typical steel scaffolds, roof safety rail systems, and temporary fencing layouts.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/residential_scaffold.webp",
                title: "Residential Scaffold Setup",
                desc: "Edge protection & multi-tier access scaffold configuration.",
              },
              {
                src: "/images/steel_scaffold_platform.webp",
                title: "Safe Working Platforms",
                desc: "Wide platform configuration for masonry and framing access.",
              },
              {
                src: "/images/temporary_fence.webp",
                title: "Temporary Fence Hire",
                desc: "Durable galvanized mesh fencing panels and gates.",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-2 transition-all duration-300 hover:border-accent-amber/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-950">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <h4 className="text-sm font-bold text-white">{img.title}</h4>
                    <p className="text-xs text-slate-300 mt-1">{img.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (AI Chatbot & SEO Friendly) */}
      <section className="py-20 border-t border-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-amber">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              We compile answers to our most popular inquiries for both residential builders and AI search crawlers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 sm:p-8"
              >
                <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-3">
                  <span className="text-accent-amber font-black select-none">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed pl-7 border-l-2 border-slate-800">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Block */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-t border-slate-900 bg-slate-950">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-amber/5 blur-[80px]"></div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="glass-panel-amber rounded-3xl p-8 sm:p-12 space-y-6 border-accent-amber/20 shadow-2xl">
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Ready to Secure Your Worksite?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Get an obligation-free quote on residential scaffolding and temporary fencing. Reach out directly via phone or email, and our team will get back to you shortly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href="tel:0489150675"
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-accent-amber px-8 py-5 text-base sm:text-lg font-extrabold text-slate-950 shadow-xl shadow-accent-amber/20 hover:bg-accent-amber-hover hover:scale-[1.02] transition-all"
              >
                <Phone className="h-5 w-5 shrink-0 fill-current" />
                <span>Call 0489 150 675</span>
              </a>
              <a
                href="mailto:info@tribuildprojects.com.au"
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-800 bg-slate-900/60 px-8 py-5 text-base sm:text-lg font-extrabold text-white hover:bg-slate-800 hover:scale-[1.02] transition-all"
              >
                <Mail className="h-5 w-5 shrink-0 text-accent-amber" />
                <span>info@tribuildprojects.com.au</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-500 pt-4 flex flex-wrap justify-center gap-4">
              <span>TRI BUILD PROJECTS PTY LTD</span>
              <span>•</span>
              <span>ABN: 15 697 975 732</span>
              <span>•</span>
              <span>ACN: 697 975 732</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
