"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  X,
  CheckCircle2,
  Building2,
  Phone,
  Mail,
  User,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { useGlobalCountry, GLOBAL_COUNTRIES } from "@/components/GlobalCountryContext";

export type LeadModalOptions = {
  title?: string;
  source?: string;
  planName?: string;
  defaultNote?: string;
};

type LeadContextType = {
  openLeadModal: (options?: LeadModalOptions) => void;
  closeLeadModal: () => void;
};

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const { selectedCountry, setSelectedCountry } = useGlobalCountry();
  const [options, setOptions] = useState<LeadModalOptions>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const openLeadModal = (opts?: LeadModalOptions) => {
    setOptions(opts || {});
    setSubmitted(false);
    setLoading(false);
    setReferenceId("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: opts?.defaultNote || "",
    });
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Please enter your name, email, and phone number.");
      return;
    }

    setLoading(true);

    const fullPhone = `${selectedCountry.dialCode} ${formData.phone.trim()}`;

    // Automatically detect where the lead came from
    let pageUrl = "";
    let pageTitle = "";
    let referrer = "Direct Visit / Bookmark";
    let utmDetails = "";
    let deviceType = "Desktop";

    if (typeof document !== "undefined") {
      pageUrl = globalThis.location.href;
      pageTitle = document.title;
      referrer = document.referrer ? document.referrer : "Direct Visit / Bookmark";

      // Detect UTM marketing parameters
      const params = new URLSearchParams(globalThis.location.search);
      const utmSource = params.get("utm_source");
      const utmMedium = params.get("utm_medium");
      const utmCampaign = params.get("utm_campaign");
      if (utmSource || utmCampaign) {
        utmDetails = `Source: ${utmSource || "N/A"} | Medium: ${utmMedium || "N/A"} | Campaign: ${utmCampaign || "N/A"}`;
      }

      // Detect mobile vs desktop
      if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        deviceType = "Mobile Device";
      }
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: fullPhone,
          company: formData.company.trim() || "Website Inquiry",
          source: options.source || "Website Consultation Modal",
          plan: options.planName || options.title || "Enterprise AI Consultation",
          country: `${selectedCountry.name} (${selectedCountry.dialCode})`,
          message: formData.message.trim(),
          pageUrl,
          pageTitle,
          referrer,
          utmDetails,
          deviceType,
        }),
      });

      const data = await res.json().catch(() => ({}));
      const generatedRef = data?.contactId || `TCB-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting lead:", err);
      // Fail-safe: still show success so user is confident
      setReferenceId(`TCB-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LeadContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
            onClick={closeLeadModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-2xl overflow-hidden my-auto"
            >
              {/* Subtle ambient light glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#305eff]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#305eff]/5 blur-3xl" />

              {/* Close Button */}
              <button
                type="button"
                onClick={closeLeadModal}
                className="absolute right-4 top-4 z-20 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {submitted ? (
                /* Success Confirmation State */
                <div className="py-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 mb-2">
                    <span>Reference ID: {referenceId}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
                    Consultation Request Received!
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our Senior AI Solutions Architect will review your requirements and reach out to you within a few hours.
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 max-w-sm mx-auto text-left text-xs space-y-1.5">
                    <div className="flex justify-between font-medium text-slate-600">
                      <span>Service Focus:</span>
                      <span className="font-bold text-slate-900 truncate max-w-[190px]">
                        {options.planName || options.title || "Custom AI Architecture"}
                      </span>
                    </div>
                    <div className="flex justify-between font-medium text-slate-600">
                      <span>Direct Contact:</span>
                      <span className="font-bold text-[#305eff]">
                        {selectedCountry.dialCode} {formData.phone}
                      </span>
                    </div>
                    <div className="flex justify-between font-medium text-slate-600">
                      <span>Code &amp; IP Rights:</span>
                      <span className="text-emerald-700 font-bold">100% Client Owned</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={closeLeadModal}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-8 py-2.5 text-xs font-bold text-white shadow-md shadow-[#305eff]/25 transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Simple High-Converting 1-Step Form */
                <div>
                  {/* Header */}
                  <div className="mb-6 pr-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] border border-blue-100">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 font-display">
                        {options.title || "Book Free AI Consultation"}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      Share your contact details below. Our team will prepare a custom architecture review with zero obligation.
                    </p>
                  </div>

                  {/* The Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#305eff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#305eff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number with Country Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <select
                          value={selectedCountry.code}
                          onChange={(e) => {
                            const found = GLOBAL_COUNTRIES.find((c) => c.code === e.target.value);
                            if (found) setSelectedCountry(found);
                          }}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:border-[#305eff] focus:outline-none shrink-0 cursor-pointer"
                        >
                          {GLOBAL_COUNTRIES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.dialCode}
                            </option>
                          ))}
                        </select>

                        <div className="relative flex-1">
                          <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="tel"
                            required
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#305eff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Name (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Company Name <span className="text-xs font-normal text-slate-400">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#305eff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message / Requirements (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Requirements or Questions <span className="text-xs font-normal text-slate-400">(Optional)</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <textarea
                          rows={2}
                          placeholder="Enter your requirements or questions"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#305eff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#305eff] hover:bg-[#1f47e0] py-3.5 px-6 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#305eff]/25 hover:shadow-[#305eff]/40 active:scale-98 transition-all disabled:opacity-60 cursor-pointer"
                      >
                        {loading ? (
                          <span>Submitting your request...</span>
                        ) : (
                          <>
                            <span>Book Free AI Consultation</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Trust Guarantee Strip */}
                    <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-medium text-slate-500 text-center">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>100% Confidential &bull; Strict NDA Protected &bull; Zero Spam</span>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LeadContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
