import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tri Build Projects",
  description: "Read the Terms & Conditions of Tri Build Projects Pty Ltd. Learn about our scaffolding hire terms, equipment safety, liability, and payment conditions under Australian standards.",
};

export default function TermsConditionsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions",
    "description": "Terms and Conditions of Trade for Tri Build Projects Pty Ltd scaffolding and fencing hire.",
    "publisher": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Tri Build Projects",
      "telephone": "0489150675"
    }
  };

  return (
    <>
      <JsonLd data={termsSchema} />

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
              <FileText className="h-3.5 w-3.5" />
              <span>Australian Consumer Law (ACL) Compliant Terms of Trade</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Terms & Conditions
            </h1>
            <p className="text-slate-400 text-sm">
              Last updated: June 14, 2026
            </p>
            <div className="h-1 w-20 bg-accent-amber mt-4"></div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-slate-300 space-y-8 text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to <strong>Tri Build Projects Pty Ltd</strong> (ABN 15 697 975 732). These Terms & Conditions govern the hiring of scaffolding, temporary fencing, edge protection, and related installation services from us. By accepting our quote or booking our services, you agree to comply with and be bound by these terms.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">1. Scaffolding & Fencing Hire Terms</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Hire Period:</strong> The hire period begins on the day the scaffolding or temporary fencing is installed and signed off with a handover certificate. Standard hire durations are specified in your quote (typically 4, 8, or 12 weeks).</li>
                <li><strong>Extensions:</strong> Hire extensions will automatically be charged on a weekly pro-rata basis if the equipment is required on-site past the standard agreed hire period. Please notify us at least 7 days prior to your hire end date.</li>
                <li><strong>Equipment Ownership:</strong> All scaffolding tubes, couplers, boards, stairs, and mesh fencing remain the absolute property of Tri Build Projects Pty Ltd.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">2. Safety & Compliance (Workplace Health & Safety)</h2>
              <p>
                Scaffolding safety is highly regulated under NSW law. You must strictly adhere to the following safety rules:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Strict Modification Ban:</strong> Under SafeWork NSW guidelines, you must NOT modify, alter, adjust, dismantle, or interfere with any erected scaffolding structure. Any alterations must be carried out exclusively by a licensed scaffold erector employed by Tri Build Projects.</li>
                <li><strong>Safety Handover:</strong> Upon erection, we will inspect the scaffold and issue a Handover Certificate. The scaffold must not be used unless a current green handover tag is displayed.</li>
                <li><strong>Site Inspections:</strong> Under WHS regulations, scaffolds must be inspected by a competent person every 30 days. We will coordinate with you to carry out these scheduled safety checks.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">3. Site Access & Delivery</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The client must ensure safe, clear, and unobstructed access to the site for our transport vehicles and riggers.</li>
                <li>The site ground must be stable, level, and capable of supporting scaffold base plate loads. We are not liable for any surface damage caused by standard base plate positioning.</li>
                <li>Any council permits, lane closure licenses, or powerline clearances required for scaffolding erection are the responsibility of the client unless specifically outlined in our quote.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">4. Payment & Cancellation</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Payment Terms:</strong> Payments are due in accordance with the payment schedule outlined on your quote/invoice (e.g. deposit before delivery, balance post-erection). Outstanding balances may incur interest charges.</li>
                <li><strong>Cancellations:</strong> Cancellations made within 48 hours of scheduled delivery/erection may incur a cancellation fee to cover labor and transport bookings.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">5. Liability, Loss & Damage</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The client assumes full responsibility for all hired equipment while it remains on their site. Any loss, theft, or damage (including paint spills or mortar residue exceeding normal wear and tear) will be charged to the client at full replacement value.</li>
                <li><strong>Australian Consumer Law (ACL):</strong> Nothing in these terms excludes, restricts, or modifies any consumer guarantees or rights under the <em>Competition and Consumer Act 2010</em> (Cth) that cannot be legally excluded.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">6. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of New South Wales, Australia. You submit to the exclusive jurisdiction of the courts of New South Wales.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2">7. Contact Information</h2>
              <p>
                If you have questions regarding these terms, please contact:
              </p>
              <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-5 space-y-1.5 text-sm">
                <p className="font-bold text-white">Tri Build Projects Pty Ltd</p>
                <p><strong>Phone:</strong> 0489 150 675</p>
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
