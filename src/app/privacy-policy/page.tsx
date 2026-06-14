import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Tri Build Projects",
  description: "Read the Privacy Policy of Tri Build Projects Pty Ltd. Learn how we collect, use, and protect your personal information in compliance with Australian Privacy Principles.",
};

export default function PrivacyPolicyPage() {
  const policySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Tri Build Projects Pty Ltd explaining compliance with the Privacy Act 1988 (Cth).",
    "publisher": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Tri Build Projects",
      "telephone": "0406880403"
    }
  };

  return (
    <>
      <JsonLd data={policySchema} />

      <section className="relative overflow-hidden pt-6 pb-20 lg:pt-8 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent-amber/5 blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-slate-900/20 blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-accent-amber transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Heading */}
          <div className="space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-amber/30 bg-accent-amber/10 px-4 py-1.5 text-xs font-semibold text-accent-amber">
              <Shield className="h-3.5 w-3.5" />
              <span>Australian Privacy Act 1988 (Cth) Compliant</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-sm">
              Last updated: June 14, 2026
            </p>
            <div className="h-1 w-20 bg-accent-amber mt-4"></div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-slate-300 space-y-8 text-sm sm:text-base leading-relaxed">
            <p>
              At <strong>Tri Build Projects Pty Ltd</strong> (ABN 15 697 975 732), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">1. Personal Information We Collect</h2>
              <p>
                We collect personal information that is reasonably necessary to provide our residential scaffolding, edge protection, and temporary site fencing services. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact details such as your name, billing address, site address, email address, and phone numbers.</li>
                <li>Project details, building layouts, and access site specifications.</li>
                <li>Financial details including credit card information, bank account details, and transaction histories for invoicing and billing.</li>
                <li>Communications and interactions you have with us via phone, email, or our online quote form.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">2. How We Collect Personal Information</h2>
              <p>
                We collect personal information directly from you when you:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Submit a request on our website quote form.</li>
                <li>Contact us via telephone, email, or social media to discuss scaffolding and fencing hire.</li>
                <li>Engage us to provide scaffolding or site hoarding setup.</li>
                <li>Provide feedback or make inquiries about our services.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">3. Purpose of Collection and Use</h2>
              <p>
                We use the personal information we collect to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide you with accurate quotes, project estimations, and scheduling.</li>
                <li>Deliver, erect, inspect, dismantle, and pick up hired scaffolding and fencing assets.</li>
                <li>Process payments, manage accounts, and issue compliance certificates (scaffold handover certificates).</li>
                <li>Comply with workplace health and safety (WHS) laws and SafeWork NSW directives.</li>
                <li>Respond to your requests, queries, and provide customer support.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">4. Disclosure of Personal Information</h2>
              <p>
                We do not sell or trade your personal information. We may disclose your information to trusted third parties in limited circumstances, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Our subcontracted riggers or scaffold erectors who require site access details to complete the installation.</li>
                <li>Professional advisers, including accountants, auditors, insurers, and legal counsel.</li>
                <li>Government bodies, regulatory agencies, or law enforcement where required by law (e.g., SafeWork NSW audits).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">5. Data Security</h2>
              <p>
                We take all reasonable steps to secure your personal information against misuse, loss, unauthorized access, modification, or disclosure. Your information is stored electronically on secure databases with encrypted access controls.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">6. Accessing and Correcting Your Information</h2>
              <p>
                Under the APPs, you have the right to access the personal information we hold about you and request corrections. If you wish to update your site details or contact information, please reach out to us at <a href="mailto:info@tribuildprojects.com.au" className="text-accent-amber hover:underline">info@tribuildprojects.com.au</a>. We will process your request within a reasonable timeframe.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">7. Contact and Complaints</h2>
              <p>
                If you have any questions about this Privacy Policy, or if you wish to register a complaint regarding how we have handled your personal information, please contact us:
              </p>
              <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-5 space-y-1.5 text-sm">
                <p className="font-bold text-white">Tri Build Projects Pty Ltd</p>
                <p><strong>Phone:</strong> 0406 880 403</p>
                <p><strong>Email:</strong> info@tribuildprojects.com.au</p>
                <p><strong>Address:</strong> Sydney, New South Wales, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
