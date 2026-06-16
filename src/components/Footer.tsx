import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield, HelpCircle } from "lucide-react";

const services = [
  { name: "Residential Scaffolding", href: "/services/residential-scaffolding" },
  { name: "Edge Protection", href: "/services/edge-protection" },
  { name: "Roof Access Scaffolding", href: "/services/roof-access" },
  { name: "Scaffold Erect & Dismantle", href: "/services/erect-dismantle" },
  { name: "Mobile Scaffold Hire", href: "/services/mobile-scaffold-hire" },
  { name: "Builder & Roofer Access Solutions", href: "/services/builder-roofer-access" },
  { name: "Temporary Fence Hire", href: "/services/temporary-fence-hire" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950/80 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Info column */}
          <div className="space-y-4 md:col-span-1 lg:col-span-2">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Tri Build Projects Logo"
                width={48}
                height={48}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight uppercase text-white leading-none">
                  Tri <span className="text-accent-amber">Build</span>
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-white leading-none mt-1">
                  Projects
                </span>
              </div>
            </Link>
            <p className="max-w-md text-sm text-slate-400 mt-4 leading-relaxed">
              Sydney’s premier residential scaffolding and temporary fencing specialists. Fully licensed and insured solutions engineered for safety, compliance, and efficiency.
            </p>
            <div className="space-y-1.5 text-xs text-slate-500 pt-2">
              <p className="font-semibold text-slate-300">TRI BUILD PROJECTS PTY LTD</p>
              <p>ABN: 15 697 975 732</p>
              <p>ACN: 697 975 732</p>
            </div>
          </div>

          {/* Quick links to Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-accent-amber transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:0406880403"
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-accent-amber transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-amber" />
                  <span>0406 880 403</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0405865566"
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-accent-amber transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-amber" />
                  <span>0405 865 566</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0466446332"
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-accent-amber transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-amber" />
                  <span>0466 446 332</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tribuildprojects.com.au"
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-accent-amber transition-colors break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-amber" />
                  <span>info@tribuildprojects.com.au</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-accent-amber mt-0.5" />
                <span>Serving all Sydney Metropolitan Areas</span>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1GP6BwRVPP/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-accent-amber transition-colors"
                >
                  <svg className="h-4 w-4 shrink-0 text-accent-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  <span>Facebook Page</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tribuildprojects_scaffolding?igsh=eWZkdmIwNWI2MDNo&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-accent-amber transition-colors"
                >
                  <svg className="h-4 w-4 shrink-0 text-accent-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.752.052 2.73.124 4.093 1.503 4.218 4.219.043.966.051 1.32.051 3.752 0 2.43-.008 2.784-.052 3.752-.124 2.73-1.503 4.093-4.219 4.219-.966.043-1.32.051-3.752.051-2.43 0-2.784-.008-3.752-.052-2.73-.124-4.093-1.503-4.218-4.219-.043-.966-.051-1.32-.051-3.752 0-2.43.008-2.784.052-3.752.124-2.73 1.503-4.093 4.219-4.219.966-.043 1.32-.051 3.752-.051zM12 2.25c-2.405 0-2.75.007-3.702.05-2.51.115-3.56 1.166-3.676 3.676-.043.951-.05 1.296-.05 3.702 0 2.405.007 2.75.05 3.702.115 2.51 1.166 3.56 3.676 3.676.951.043 1.296.05 3.702.05 2.405 0 2.75-.007 3.702-.05 2.51-.115 3.56-1.166 3.676-3.676.043-.951.05-1.296.05-3.702 0-2.405-.007-2.75-.05-3.702-.115-2.51-1.166-3.56-3.676-3.676-.951-.043-1.296-.05-3.702-.05zM12 7.125A4.875 4.875 0 1016.875 12 4.875 4.875 0 0012 7.125zM12 15a3 3 0 110-6 3 3 0 010 6zm4.72-8.34a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" clipRule="evenodd" />
                  </svg>
                  <span>Instagram Profile</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/50 px-2.5 py-1 text-[11px] font-semibold text-slate-400">
                <Shield className="h-3.5 w-3.5 text-accent-amber" />
                <span>100% Insured</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/50 px-2.5 py-1 text-[11px] font-semibold text-slate-400">
                <HelpCircle className="h-3.5 w-3.5 text-accent-amber" />
                <span>SafeWork Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-slate-500 text-center md:text-left">
            <span>&copy; {currentYear} TRI BUILD PROJECTS PTY LTD. All rights reserved.</span>
            <span className="hidden md:inline text-slate-800">|</span>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="hover:text-accent-amber transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="hover:text-accent-amber transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center md:text-right">
            Website designed and developed by{" "}
            <a
              href="https://astrads.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent-amber transition-colors font-medium"
            >
              Astra Digital Solutions
            </a>
            , Sydney, Australia.
          </p>
        </div>
      </div>
    </footer>
  );
}
