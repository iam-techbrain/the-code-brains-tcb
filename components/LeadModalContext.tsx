"use client";

import React, { createContext, useContext, useState } from "react";
import {
  Sparkles,
  X,
  ArrowRight,
  CheckCircle2,
  Building2,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Lock,
  Globe,
  Bot,
} from "lucide-react";
import { useGlobalCountry, GLOBAL_COUNTRIES } from "@/components/GlobalCountryContext";

export type LeadModalOptions = {
  title?: string;
  source?: string;
  planName?: string;
  defaultNote?: string;
  basePriceInr?: number;
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

  const { selectedCountry, setSelectedCountry } = useGlobalCountry();
  const [options, setOptions] = useState<LeadModalOptions>({});

  // Form Fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirement: "",
  });

  // Anti-Bot Security States
  const [honeypot, setHoneypot] = useState("");
  const [modalOpenTime, setModalOpenTime] = useState<number>(0);
  const [mathNum1, setMathNum1] = useState(3);
  const [mathNum2, setMathNum2] = useState(4);
  const [userMathAns, setUserMathAns] = useState("");

  const openLeadModal = (opts?: LeadModalOptions) => {
    setOptions(opts || {});
    if (opts?.defaultNote) {
      setFormData((prev) => ({ ...prev, requirement: opts.defaultNote || "" }));
    }
    // Generate new Anti-Bot math challenge
    const n1 = Math.floor(Math.random() * 5) + 2;
    const n2 = Math.floor(Math.random() * 5) + 1;
    setMathNum1(n1);
    setMathNum2(n2);
    setUserMathAns("");
    setHoneypot("");
    setModalOpenTime(Date.now());
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
    setLoading(false);
  };

  // Extract base price in INR
  const getBasePriceInr = (): number | null => {
    if (options.basePriceInr) return options.basePriceInr;
    if (!options.planName) return null;

    const lower = options.planName.toLowerCase();
    if (lower.includes("workflow")) return 9999;
    if (lower.includes("rag") || lower.includes("chat")) return 19999;
    if (lower.includes("voice") || lower.includes("enterprise")) return 39999;
    return null;
  };

  // Format dynamic currency converted price text
  const formatConvertedPrice = () => {
    const baseInr = getBasePriceInr();
    if (!baseInr) return "Custom Quote";

    if (selectedCountry.code === "IN") {
      return `₹${baseInr.toLocaleString("en-IN")}`;
    }

    const converted = Math.round(baseInr * selectedCountry.multiplier);
    return `${selectedCountry.symbol}${converted.toLocaleString("en-US")} ${selectedCountry.currency}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-Bot: Honeypot check
    if (honeypot.trim() !== "") {
      setSubmitted(true);
      return;
    }

    // 2. Anti-Bot: Speed check (<1.2 seconds)
    if (Date.now() - modalOpenTime < 1200) {
      alert("Submission too fast. Please verify details and try again.");
      return;
    }

    // 3. Anti-Bot: Math check
    if (parseInt(userMathAns.trim(), 10) !== mathNum1 + mathNum2) {
      alert(`Incorrect human verification sum. Please answer ${mathNum1} + ${mathNum2}.`);
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const fullPhone = `${selectedCountry.dialCode} ${formData.phone.trim()}`;
    const convertedPrice = formatConvertedPrice();

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          company: formData.company,
          source: options.source || "Website Modal",
          plan: options.planName || "Custom AI Solution",
          priceText: convertedPrice,
          country: `${selectedCountry.name} (${selectedCountry.dialCode})`,
          message: formData.requirement || options.defaultNote || "",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", requirement: "" });
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

      {/* Compact, Ultra-Sleek Global Lead Capture Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[10002] flex items-center justify-center bg-slate-950/80 p-3 sm:p-4 backdrop-blur-md animate-in fade-in-0 duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-white p-5 sm:p-6 shadow-2xl overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#305eff]/15 blur-3xl" />

            <button
              onClick={closeLeadModal}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Lead Saved in HubSpot CRM!</h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  Thank you <span className="font-bold text-slate-900">{formData.name || "there"}</span>! Our team has received your request for{" "}
                  <span className="font-bold text-[#305eff]">{options.planName || "AI Solutions"}</span> ({formatConvertedPrice()}) and will reach out shortly.
                </p>
                <button
                  onClick={closeLeadModal}
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#305eff] px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-[#1f47e0] transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eff4ff] text-[#305eff] border border-[#d0ddfd]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {options.title || "Schedule AI Consultation"}
                    </h3>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Globe className="h-3 w-3 text-[#305eff]" /> Direct Executive Lead Sync
                    </p>
                  </div>
                </div>

                {/* Single Sleek Non-Editable Package Badge (No Duplicate Header) */}
                <div className="mb-4 rounded-xl border border-[#d0ddfd] bg-[#eff4ff]/60 px-3 py-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#305eff] text-white">
                      <Lock className="h-3 w-3" />
                    </span>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-900 truncate block">
                        {options.planName || "Custom AI Agent Solution"}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-black text-[#305eff] block">
                      {formatConvertedPrice()}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Invisible Honeypot Trap */}
                  <input
                    type="text"
                    name="website_url_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* 2-Column Responsive Form Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Enter Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Dr. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                        />
                      </div>
                    </div>

                    {/* Enter Email */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                        />
                      </div>
                    </div>

                    {/* Mobile Input with Flag Selector */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-1">
                        <select
                          value={selectedCountry.code}
                          onChange={(e) => {
                            const found = GLOBAL_COUNTRIES.find((c) => c.code === e.target.value);
                            if (found) setSelectedCountry(found);
                          }}
                          className="rounded-xl border border-slate-300 bg-slate-50 px-2 py-2 text-xs font-bold text-slate-800 focus:border-[#305eff] focus:outline-none shrink-0 cursor-pointer"
                        >
                          {GLOBAL_COUNTRIES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>

                        <div className="relative flex-1">
                          <input
                            type="tel"
                            required
                            placeholder={selectedCountry.samplePhone}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company / Academy Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Company / Store Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Apex Retail / Academy"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Requirement Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Requirement / Notes
                    </label>
                    <input
                      type="text"
                      placeholder="Briefly state your AI workflow goals..."
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                    />
                  </div>

                  {/* Anti-Bot Verification + Submit Button in Single Row */}
                  <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    {/* Compact Math Check */}
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 shrink-0">
                      <Bot className="h-3.5 w-3.5 text-[#305eff]" />
                      <span className="text-[11px] font-bold text-slate-700">{mathNum1} + {mathNum2} =</span>
                      <input
                        type="number"
                        required
                        placeholder="?"
                        value={userMathAns}
                        onChange={(e) => setUserMathAns(e.target.value)}
                        className="w-12 rounded-lg border border-slate-300 px-1.5 py-0.5 text-center text-xs font-bold focus:border-[#305eff] focus:outline-none bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#305eff] to-[#1f47e0] py-2.5 text-xs font-bold text-white shadow-md shadow-[#305eff]/25 transition-all hover:shadow-[#305eff]/40 active:scale-98 disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting to HubSpot...</span>
                      ) : (
                        <>
                          <span>Submit Lead Request</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold pt-0.5">
                    <span className="flex items-center gap-1 text-emerald-600">
                      <ShieldCheck className="h-3 w-3" /> Encrypted HubSpot CRM Sync
                    </span>
                    <span>Anti-Spam Verified 🔒</span>
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
