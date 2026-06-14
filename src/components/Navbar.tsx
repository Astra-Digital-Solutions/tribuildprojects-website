"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ShieldCheck, ChevronDown } from "lucide-react";

const services = [
  { name: "Residential Scaffolding", href: "/services/residential-scaffolding" },
  { name: "Edge Protection", href: "/services/edge-protection" },
  { name: "Roof Access Scaffolding", href: "/services/roof-access" },
  { name: "Scaffold Erect & Dismantle", href: "/services/erect-dismantle" },
  { name: "Mobile Scaffold Hire", href: "/services/mobile-scaffold-hire" },
  { name: "Builder & Roofer Access Solutions", href: "/services/builder-roofer-access" },
  { name: "Temporary Fence Hire", href: "/services/temporary-fence-hire" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Tri Build Projects Logo"
                width={48}
                height={48}
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight uppercase text-white sm:text-xl leading-none">
                  Tri <span className="text-accent-amber">Build</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white leading-none mt-1">
                  Projects
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-lg font-bold text-slate-300 hover:text-white hover:text-accent-amber transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-lg font-bold text-slate-300 hover:text-white hover:text-accent-amber transition-colors focus:outline-none"
              >
                Services
                <ChevronDown className="h-5 w-5 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute left-1/2 z-50 mt-2 w-80 -translate-x-1/2 rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-2xl ring-1 ring-black/5"
                >
                  <div className="grid gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2 rounded-lg p-2.5 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-accent-amber transition-all"
                      >
                        <ShieldCheck className="h-4 w-4 text-accent-amber shrink-0" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-lg font-bold text-slate-300 hover:text-white hover:text-accent-amber transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Call CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1GP6BwRVPP/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-110 transition-transform p-1"
              aria-label="Facebook Page"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/tribuildprojects_scaffolding?igsh=eWZkdmIwNWI2MDNo&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform p-1 mr-2"
              aria-label="Instagram Profile"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <linearGradient id="nav-insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="100%" stopColor="#285AEB" />
                  </linearGradient>
                </defs>
                <path fill="url(#nav-insta-grad)" fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.752.052 2.73.124 4.093 1.503 4.218 4.219.043.966.051 1.32.051 3.752 0 2.43-.008 2.784-.052 3.752-.124 2.73-1.503 4.093-4.219 4.219-.966.043-1.32.051-3.752.051-2.43 0-2.784-.008-3.752-.052-2.73-.124-4.093-1.503-4.218-4.219-.043-.966-.051-1.32-.051-3.752 0-2.43.008-2.784.052-3.752.124-2.73 1.503-4.093 4.219-4.219.966-.043 1.32-.051 3.752-.051zM12 2.25c-2.405 0-2.75.007-3.702.05-2.51.115-3.56 1.166-3.676 3.676-.043.951-.05 1.296-.05 3.702 0 2.405.007 2.75.05 3.702.115 2.51 1.166 3.56 3.676 3.676.951.043 1.296.05 3.702.05 2.405 0 2.75-.007 3.702-.05 2.51-.115 3.56-1.166 3.676-3.676.043-.951.05-1.296.05-3.702 0-2.405-.007-2.75-.05-3.702-.115-2.51-1.166-3.56-3.676-3.676-.951-.043-1.296-.05-3.702-.05zM12 7.125A4.875 4.875 0 1016.875 12 4.875 4.875 0 0012 7.125zM12 15a3 3 0 110-6 3 3 0 010 6zm4.72-8.34a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="tel:0406880403"
              className="group flex items-center gap-2 rounded-xl bg-accent-amber px-5 py-2.5 text-sm font-bold text-slate-950 transition-all hover:bg-accent-amber-hover hover:scale-[1.02] shadow-lg shadow-accent-amber/15"
            >
              <Phone className="h-4 w-4 shrink-0 fill-current animate-pulse" />
              <span>0406 880 403</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:0406880403"
              className="flex items-center justify-center rounded-xl bg-accent-amber p-2.5 text-slate-950 sm:hidden shadow-md shadow-accent-amber/20"
              aria-label="Call Tri Build Projects"
            >
              <Phone className="h-5 w-5 shrink-0" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-6 shadow-2xl transition-all duration-300">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-900 hover:text-accent-amber transition-all"
            >
              Home
            </Link>

            <div className="space-y-2">
              <span className="block px-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                Our Services
              </span>
              <div className="pl-2 grid gap-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-accent-amber transition-all"
                  >
                    <ShieldCheck className="h-4 w-4 text-accent-amber shrink-0" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-900 hover:text-accent-amber transition-all"
            >
              Contact & Quote
            </Link>

            <div className="pt-4 border-t border-slate-900 px-4 space-y-4">
              <a
                href="tel:0406880403"
                className="flex items-center justify-center gap-3 rounded-xl bg-accent-amber py-3 text-center text-base font-bold text-slate-950 shadow-lg shadow-accent-amber/10 hover:bg-accent-amber-hover"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>Call 0406 880 403</span>
              </a>
              <div className="flex justify-center gap-6 pt-2">
                <a
                  href="https://www.facebook.com/share/1GP6BwRVPP/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-[#1877F2] hover:opacity-80 transition-opacity"
                >
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/tribuildprojects_scaffolding?igsh=eWZkdmIwNWI2MDNo&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <defs>
                      <linearGradient id="mobile-insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="100%" stopColor="#285AEB" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#mobile-insta-grad)" fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.752.052 2.73.124 4.093 1.503 4.218 4.219.043.966.051 1.32.051 3.752 0 2.43-.008 2.784-.052 3.752-.124 2.73-1.503 4.093-4.219 4.219-.966.043-1.32.051-3.752.051-2.43 0-2.784-.008-3.752-.052-2.73-.124-4.093-1.503-4.218-4.219-.043-.966-.051-1.32-.051-3.752 0-2.43.008-2.784.052-3.752.124-2.73 1.503-4.093 4.219-4.219.966-.043 1.32-.051 3.752-.051zM12 2.25c-2.405 0-2.75.007-3.702.05-2.51.115-3.56 1.166-3.676 3.676-.043.951-.05 1.296-.05 3.702 0 2.405.007 2.75.05 3.702.115 2.51 1.166 3.56 3.676 3.676.951.043 1.296.05 3.702.05 2.405 0 2.75-.007 3.702-.05 2.51-.115 3.56-1.166 3.676-3.676.043-.951.05-1.296.05-3.702 0-2.405-.007-2.75-.05-3.702-.115-2.51-1.166-3.56-3.676-3.676-.951-.043-1.296-.05-3.702-.05zM12 7.125A4.875 4.875 0 1016.875 12 4.875 4.875 0 0012 7.125zM12 15a3 3 0 110-6 3 3 0 010 6zm4.72-8.34a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" clipRule="evenodd" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
