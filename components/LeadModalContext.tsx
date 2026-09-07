"use client";

import React, { createContext, useContext, useState } from "react";
import { Sparkles, X, ArrowRight, CheckCircle2, Building2, Phone, Mail, User, ShieldCheck } from "lucide-react";

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

  const [options, setOptions] = useState<LeadModalOptions>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const openLeadModal = (opts?: LeadModalOptions) => {
    setOptions(opts || {});
    if (opts?.defaultNote) {
      setFormData((prev) => ({ ...prev, message: opts.defaultNote || "" }));
    }
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          source: options.source || "Website CTA Button",
          plan: options.planName || "",
          message: formData.message || options.defaultNote || "",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", company: "", message: "" });
      } else {
        alert(`Submission Error: ${data.error || "Failed to submit lead"}`);
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      alert("Something went wrong submitting your lead. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LeadContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}

      {/* Global Lead Capture Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[10002] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md animate-in fade-in-0 duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-white p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#305eff]/15 blur-3xl" />

            <button
              onClick={closeLeadModal}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Lead Received &amp; Saved in HubSpot!</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{formData.name || "there"}</span>! Our AI Solutions team has received your request and will contact you on WhatsApp within 15 minutes.
                </p>
                <button
                  onClick={closeLeadModal}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#305eff] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#1f47e0] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eff4ff] text-[#305eff] border border-[#d0ddfd]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {options.title || "Get Started / Schedule AI Demo"}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {options.planName ? `Selected Interest: ${options.planName}` : "Direct Sync with TCB Executive Lead Desk"}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-2.5 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-2.5 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-2.5 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Store / Academy Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. Apex Academy / Patel Retail"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-2.5 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Requirements / Notes</label>
                    <textarea
                      rows={2}
                      placeholder="Tell us what workflows or AI agents you want to automate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#305eff] to-[#1f47e0] py-3 text-xs font-bold text-white shadow-lg shadow-[#305eff]/25 transition-all hover:shadow-[#305eff]/40 active:scale-98 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting to HubSpot CRM...</span>
                      ) : (
                        <>
                          <span>Submit &amp; Connect with AI Lead Specialist</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-semibold pt-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Direct 256-Bit Encrypted HubSpot CRM Sync</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
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
