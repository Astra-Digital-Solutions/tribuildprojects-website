"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Shield } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    service: "Residential Scaffolding",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "311fa770-aecf-48f0-8e0f-1a0506bcaff5",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          suburb: formData.suburb,
          service: formData.service,
          message: formData.message,
          from_name: "Tri Build Projects Quote Form",
          subject: `New Quote Request from ${formData.name} (${formData.suburb})`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          suburb: "",
          service: "Residential Scaffolding",
          message: "",
        });
      } else {
        setError(result.message || "Failed to submit. Please check your credentials.");
      }
    } catch {
      setError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-accent-amber/5 blur-[100px] z-0"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-amber">
            Get In Touch
          </span>
          <h1 className="text-3xl font-black text-white sm:text-5xl">
            Contact Us & Request a Quote
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Need residential scaffolding or site hoarding in Sydney? Provide your project details below, or call us directly. We respond to all quotes in less than 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Contacts</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:0406880403"
                  className="flex items-center gap-4 group rounded-xl border border-slate-900 bg-slate-900/40 p-4 hover:border-accent-amber/30 transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-amber/10 text-accent-amber group-hover:bg-accent-amber group-hover:text-slate-950 transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Call Us Directly</p>
                    <p className="text-sm font-bold text-white mt-0.5">0406 880 403</p>
                  </div>
                </a>

                <a
                  href="mailto:info@tribuildprojects.com.au"
                  className="flex items-center gap-4 group rounded-xl border border-slate-900 bg-slate-900/40 p-4 hover:border-accent-amber/30 transition-all break-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-amber/10 text-accent-amber group-hover:bg-accent-amber group-hover:text-slate-950 transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Email Us Details</p>
                    <p className="text-sm font-bold text-white mt-0.5">info@tribuildprojects.com.au</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-slate-900 bg-slate-900/40 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-amber/10 text-accent-amber">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Coverage Area</p>
                    <p className="text-sm font-bold text-white mt-0.5">Sydney Wide, NSW, Australia</p>
                  </div>
                </div>
              </div>

              {/* Compliance & Credentials box */}
              <div className="border-t border-slate-900 pt-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Registration</h4>
                <div className="text-xs text-slate-500 space-y-1">
                  <p className="font-bold text-slate-300">TRI BUILD PROJECTS PTY LTD</p>
                  <p>ABN: 15 697 975 732</p>
                  <p>ACN: 697 975 732</p>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 px-3 py-2 text-xs font-semibold text-slate-400">
                  <Shield className="h-4 w-4 text-accent-amber" />
                  <span>Licensed & Fully Insured for Heights Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-amber/10 text-accent-amber">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-slate-400 max-w-sm mx-auto text-sm">
                    Your quote request has been sent successfully. One of our project managers will review details and contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-white px-5 py-2.5 hover:bg-slate-800 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-900 bg-slate-900/50 px-4 py-3 text-sm text-white focus:border-accent-amber/50 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0400 000 000"
                        className="w-full rounded-xl border border-slate-900 bg-slate-900/50 px-4 py-3 text-sm text-white focus:border-accent-amber/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-900 bg-slate-900/50 px-4 py-3 text-sm text-white focus:border-accent-amber/50 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="suburb" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Sydney Suburb / Project Site
                      </label>
                      <input
                        type="text"
                        id="suburb"
                        required
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        placeholder="Parramatta, NSW"
                        className="w-full rounded-xl border border-slate-900 bg-slate-900/50 px-4 py-3 text-sm text-white focus:border-accent-amber/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Required Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-900 bg-slate-900/50 px-4 py-3 text-sm text-white focus:border-accent-amber/50 focus:outline-none transition-colors"
                    >
                      <option value="Residential Scaffolding">Residential Scaffolding</option>
                      <option value="Edge Protection">Edge Protection</option>
                      <option value="Roof Access Scaffolding">Roof Access Scaffolding</option>
                      <option value="Scaffold Erect & Dismantle">Scaffold Erect & Dismantle</option>
                      <option value="Mobile Scaffold Hire">Mobile Scaffold Hire</option>
                      <option value="Builder & Roofer Access Solutions">Builder & Roofer Access Solutions</option>
                      <option value="Temporary Site Hoarding">Temporary Site Hoarding</option>
                      <option value="Temporary Fence Hire">Temporary Fence Hire</option>
                      <option value="Combined Package">Combined Scaffold & Hoarding</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Describe Your Project Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include wall heights, roof types, or temporary fencing length needed..."
                      className="w-full rounded-xl border border-slate-900 bg-slate-900/50 px-4 py-3 text-sm text-white focus:border-accent-amber/50 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="rounded-xl border border-red-950 bg-red-950/20 p-4 text-sm text-red-400 text-center">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent-amber py-4 text-base font-bold text-slate-950 shadow-lg shadow-accent-amber/20 hover:bg-accent-amber-hover disabled:opacity-50 transition-all"
                  >
                    {loading ? (
                      <span>Submitting Details...</span>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5" />
                        <span>Send Quote Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
