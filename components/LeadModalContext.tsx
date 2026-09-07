"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
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
  HelpCircle,
} from "lucide-react";

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

import { useGlobalCountry, GLOBAL_COUNTRIES, CountryOption } from "@/components/GlobalCountryContext";

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

  // Helper to extract numeric base price in INR if not directly provided
  const getBasePriceInr = (): number | null => {
    if (options.basePriceInr) return options.basePriceInr;
    if (!options.planName) return null;

    const lower = options.planName.toLowerCase();
    if (lower.includes("workflow")) return 9999;
    if (lower.includes("rag") || lower.includes("chat")) return 19999;
    if (lower.includes("voice") || lower.includes("enterprise")) return 39999;
    return null;
  };

  // Calculate dynamic currency converted price text
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

    // 1. Anti-Bot Security Check: Honeypot trap filled
    if (honeypot.trim() !== "") {
      console.warn("Spam Bot Detected via Honeypot trap.");
      // Silently pretend success to fool automated bots
      setSubmitted(true);
      return;
    }

    // 2. Anti-Bot Security Check: Speed check (<1.2 seconds submission)
    if (Date.now() - modalOpenTime < 1200) {
      alert("Submission too fast. Please verify details and try again.");
      return;
    }

    // 3. Anti-Bot Security Check: Math challenge
    if (parseInt(userMathAns.trim(), 10) !== mathNum1 + mathNum2) {
      alert(`Incorrect human verification sum. Please answer ${mathNum1} + ${mathNum2}.`);
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, Mobile Number).");
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

      {/* Global Lead Capture Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[10002] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md animate-in fade-in-0 duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-white p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
            {/* Ambient Background Glow */}
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
                <h3 className="text-xl font-extrabold text-slate-900">Lead Saved in HubSpot CRM!</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you <span className="font-bold text-slate-900">{formData.name || "there"}</span>! Our executive team received your request for{" "}
                  <span className="font-bold text-[#305eff]">{options.planName || "AI Solutions"}</span> ({formatConvertedPrice()}) and will reach out via WhatsApp/Call shortly.
                </p>
                <button
                  onClick={closeLeadModal}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#305eff] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#1f47e0] transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                {/* Modal Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eff4ff] text-[#305eff] border border-[#d0ddfd]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      {options.title || "Request Consultation / Schedule Demo"}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Globe className="h-3 w-3 text-[#305eff]" /> Direct Sync with TCB Executive Lead Desk
                    </p>
                  </div>
                </div>

                {/* 1. NON-EDITABLE PLAN & PACKAGE SUMMARY CARD */}
                <div className="mb-5 rounded-2xl border border-[#d0ddfd] bg-[#eff4ff]/70 p-3.5 backdrop-blur-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1f47e0] flex items-center gap-1">
                      <Lock className="h-3 w-3 text-[#305eff]" />
                      Selected Package (Non-Editable)
                    </span>
                    <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[9px] font-bold text-[#305eff] border border-[#305eff]/20">
                      {selectedCountry.flag} {selectedCountry.name}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between gap-3 border-t border-[#d0ddfd]/60 pt-2">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">
                        {options.planName || "Custom AI Agent & Workflow Solution"}
                      </h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        {options.source ? `Location: ${options.source}` : "Direct Website Inquiry"}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-base font-black text-[#305eff] block">
                        {formatConvertedPrice()}
                      </span>
                      <span className="text-[9px] font-semibold text-slate-500 block">
                        {selectedCountry.currency} equivalent
                      </span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Anti-Bot Invisible Honeypot Trap */}
                  <input
                    type="text"
                    name="website_url_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Enter your Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Enter your Full Name <span className="text-red-500">*</span>
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

                  {/* Enter your Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Enter your Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-2.5 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                      />
                    </div>
                  </div>

                  {/* International Mobile Input with Dynamic Country Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-slate-700">
                        Enter your Mobile <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[10px] text-slate-500 font-semibold">
                        Country selection auto-updates price
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Country Code Dropdown */}
                      <select
                        value={selectedCountry.code}
                        onChange={(e) => {
                          const found = GLOBAL_COUNTRIES.find((c) => c.code === e.target.value);
                          if (found) setSelectedCountry(found);
                        }}
                        className="rounded-xl border border-slate-300 bg-slate-50 px-2.5 py-2.5 text-xs font-bold text-slate-800 focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 shrink-0 cursor-pointer"
                      >
                        {GLOBAL_COUNTRIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code} ({c.dialCode})
                          </option>
                        ))}
                      </select>

                      {/* Mobile Number Input */}
                      <div className="relative flex-1">
                        <Phone className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder={selectedCountry.samplePhone}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 pl-10 pr-3 py-2.5 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company / Academy Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Store / Academy Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. Apex Academy / Patel Retail"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 pl-10 pr-3.5 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                      />
                    </div>
                  </div>

                  {/* Enter your Requirement */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Enter your Requirement
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us what business processes or AI workflows you want to automate..."
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                    />
                  </div>

                  {/* Anti-Bot Security Verification Math Challenge */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <Bot className="h-4 w-4 text-[#305eff]" />
                      <span>Human Check: {mathNum1} + {mathNum2} =</span>
                    </div>
                    <input
                      type="number"
                      required
                      placeholder="Answer"
                      value={userMathAns}
                      onChange={(e) => setUserMathAns(e.target.value)}
                      className="w-20 rounded-lg border border-slate-300 px-2.5 py-1 text-center text-xs font-bold focus:border-[#305eff] focus:outline-none bg-white"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#305eff] to-[#1f47e0] py-3 text-xs font-bold text-white shadow-lg shadow-[#305eff]/25 transition-all hover:shadow-[#305eff]/40 active:scale-98 disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting to HubSpot CRM...</span>
                      ) : (
                        <>
                          <span>Submit &amp; Connect with Executive Desk</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold pt-1">
                    <span className="flex items-center gap-1 text-emerald-600">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Direct Encrypted HubSpot Sync
                    </span>
                    <span className="text-slate-400">Anti-Spam &amp; Bot Protected 🔒</span>
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
