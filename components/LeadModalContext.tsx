"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Bot,
  PhoneCall,
  MessageSquare,
  Workflow,
  Database,
  Cpu,
  Check,
  Clock,
  Briefcase,
  Layers,
  TrendingUp,
  FileText,
  Repeat,
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

const AI_SERVICES_OPTIONS = [
  {
    id: "sales-leads",
    label: "AI-Powered Sales & Lead Generation",
    desc: "B2B scraping, personalized cold emails/LinkedIn & auto-meeting booking",
    icon: TrendingUp,
  },
  {
    id: "document-workflow",
    label: "AI Document & Workflow Automation",
    desc: "100% error-free PDF/invoice data extraction & sync to HubSpot / Sheets",
    icon: FileText,
  },
  {
    id: "support-bots",
    label: "24/7 Customer Support Bots",
    desc: "Custom AI chatbots trained on your company data for instant answers",
    icon: MessageSquare,
  },
  {
    id: "content-pipelines",
    label: "AI Content Pipelines & Repurposing",
    desc: "Convert long videos/podcasts into viral shorts, blogs & threads",
    icon: Repeat,
  },
  {
    id: "voice-ai",
    label: "Real-Time Voice AI Agents",
    desc: "Human-sounding inbound/outbound phone calling & live appointment scheduling",
    icon: PhoneCall,
  },
];

const TIMELINE_OPTIONS = [
  { id: "immediate", label: "ASAP (< 2 weeks)", icon: Clock },
  { id: "medium", label: "2 to 4 Weeks", icon: Clock },
  { id: "planning", label: "1 to 2 Months", icon: Clock },
  { id: "exploring", label: "Just Exploring", icon: Sparkles },
];

const STACK_TAGS = [
  "HubSpot CRM",
  "Salesforce",
  "Google Sheets",
  "PostgreSQL / SQL",
  "Custom REST API",
  "Zoho CRM",
  "Shopify / WooCommerce",
  "ERP / Internal DB",
];

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const { selectedCountry, setSelectedCountry } = useGlobalCountry();
  const [options, setOptions] = useState<LeadModalOptions>({});

  // Step 1: Scope & Intent
  const [selectedServices, setSelectedServices] = useState<string[]>(["voice-ai"]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("immediate");
  const [budgetTier, setBudgetTier] = useState<string>("Standard Scope");

  // Step 2: Contact & Company Profile
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    selectedTools: [] as string[],
    requirement: "",
  });

  // Anti-bot Security
  const [honeypot, setHoneypot] = useState("");
  const [modalOpenTime, setModalOpenTime] = useState<number>(0);
  const [mathNum1, setMathNum1] = useState(3);
  const [mathNum2, setMathNum2] = useState(4);
  const [userMathAns, setUserMathAns] = useState("");

  const openLeadModal = (opts?: LeadModalOptions) => {
    setOptions(opts || {});
    setCurrentStep(1);
    setSubmitted(false);
    setLoading(false);
    setReferenceId("");

    // Set initial service selection if matching option title or planName
    if (opts?.planName) {
      const match = AI_SERVICES_OPTIONS.find((s) =>
        opts.planName!.toLowerCase().includes(s.label.toLowerCase())
      );
      if (match) setSelectedServices([match.id]);
    }

    if (opts?.defaultNote) {
      setFormData((prev) => ({ ...prev, requirement: opts.defaultNote || "" }));
    }

    // New verification challenge
    const n1 = Math.floor(Math.random() * 5) + 2;
    const n2 = Math.floor(Math.random() * 5) + 1;
    setMathNum1(n1);
    setMathNum2(n2);
    setUserMathAns("");
    setHoneypot("");
    setModalOpenTime(Date.now());
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
    setLoading(false);
  };

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) : [...prev, id]
    );
  };

  const toggleTool = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTools: prev.selectedTools.includes(tool)
        ? prev.selectedTools.filter((t) => t !== tool)
        : [...prev.selectedTools, tool],
    }));
  };

  const handleStep1Next = () => {
    if (selectedServices.length === 0) {
      alert("Please select at least one AI service or workflow to proceed.");
      return;
    }
    setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-Bot: Honeypot
    if (honeypot.trim() !== "") {
      setSubmitted(true);
      return;
    }

    // 2. Anti-Bot: Speed
    if (Date.now() - modalOpenTime < 1500) {
      alert("Please review your information before submitting.");
      return;
    }

    // 3. Anti-Bot: Math verification
    if (parseInt(userMathAns.trim(), 10) !== mathNum1 + mathNum2) {
      alert(`Verification question: What is ${mathNum1} + ${mathNum2}?`);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Please provide your name, email, and phone number.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      alert("Please enter a valid work email address.");
      return;
    }

    setLoading(true);

    const fullPhone = `${selectedCountry.dialCode} ${formData.phone.trim()}`;
    const selectedServiceNames = selectedServices
      .map((id) => AI_SERVICES_OPTIONS.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    const detailedScopeMessage = [
      `🎯 Target AI Solutions: ${selectedServiceNames}`,
      `⏱️ Target Timeline: ${TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline)?.label || selectedTimeline}`,
      `💰 Budget Scale: ${budgetTier}`,
      formData.selectedTools.length > 0
        ? `🛠️ Existing Stack / Integrations: ${formData.selectedTools.join(", ")}`
        : null,
      formData.requirement ? `📝 Project Scope Notes: ${formData.requirement}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: fullPhone,
          company: formData.company.trim() || "Independent / Startup",
          source: options.source || "Enterprise Consultation Form",
          plan: selectedServiceNames,
          priceText: budgetTier,
          country: `${selectedCountry.name} (${selectedCountry.dialCode})`,
          message: detailedScopeMessage,
        }),
      });

      const data = await res.json();
      if (data.success) {
        const genId = `TCB-AI-${Math.floor(100000 + Math.random() * 900000)}`;
        setReferenceId(genId);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          selectedTools: [],
          requirement: "",
        });
      } else {
        alert(`Error: ${data.error || "Failed to submit consultation request."}`);
      }
    } catch (err) {
      console.error("Consultation submission error:", err);
      alert("Network error. Please try submitting again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LeadContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}

      {/* Advanced Full-Featured Consultation Wizard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10002] flex items-center justify-center bg-slate-950/80 p-3 sm:p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full bg-[#305eff]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={closeLeadModal}
              className="absolute right-4 top-4 z-20 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              /* Success Screen */
              <div className="py-8 text-center my-auto">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 mb-2">
                  <span>Ticket Ref: {referenceId}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Consultation Request Confirmed!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Our Senior AI Solutions Architect will review your requirements and reach out within 2–4 hours with a customized architecture &amp; deployment blueprint.
                </p>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 max-w-md mx-auto text-left text-xs space-y-1.5">
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span className="text-slate-500">Selected Services:</span>
                    <span className="font-bold text-slate-900 text-right">
                      {selectedServices
                        .map((id) => AI_SERVICES_OPTIONS.find((s) => s.id === id)?.label)
                        .join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span className="text-slate-500">Ownership:</span>
                    <span className="text-emerald-700 font-bold">100% Client Source Code</span>
                  </div>
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span className="text-slate-500">Hosting:</span>
                    <span className="text-slate-900">Private AWS Cloud (Zero Markup)</span>
                  </div>
                </div>

                <button
                  onClick={closeLeadModal}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#305eff] px-7 py-3 text-xs font-bold text-white shadow-md hover:bg-[#1f47e0] transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-full overflow-hidden">
                {/* Header with Step Indicator */}
                <div className="mb-4 shrink-0">
                  <div className="flex items-center justify-between pr-8">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eff4ff] text-[#305eff] border border-[#d0ddfd]">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900">
                          {options.title || "Book AI Architecture Consultation"}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium">
                          Zero obligation &bull; 100% source code ownership &bull; Custom scope
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step Progress Pill Bar */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-1">
                        <span>
                          {currentStep === 1
                            ? "Step 1 of 2: AI Scope & Solutions"
                            : "Step 2 of 2: Business & Contact Details"}
                        </span>
                        <span className="text-[#305eff]">
                          {currentStep === 1 ? "50% Completed" : "Almost Done"}
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#305eff] to-indigo-600 transition-all duration-300 rounded-full"
                          style={{ width: currentStep === 1 ? "50%" : "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Body with Scroll */}
                <div className="overflow-y-auto pr-1 flex-1 py-1">
                  {currentStep === 1 ? (
                    /* STEP 1: Solutions, Timeline, Budget */
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-2">
                          1. Select the AI Solutions you wish to engineer:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {AI_SERVICES_OPTIONS.map((srv) => {
                            const Icon = srv.icon;
                            const isSelected = selectedServices.includes(srv.id);
                            return (
                              <div
                                key={srv.id}
                                onClick={() => toggleService(srv.id)}
                                className={`group flex items-start gap-2.5 rounded-2xl border p-3 cursor-pointer transition-all duration-200 ${
                                  isSelected
                                    ? "border-[#305eff] bg-[#eff4ff]/70 shadow-xs ring-1 ring-[#305eff]/30"
                                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70"
                                }`}
                              >
                                <div
                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                    isSelected
                                      ? "bg-[#305eff] text-white"
                                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                                  }`}
                                >
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-900 truncate">
                                      {srv.label}
                                    </span>
                                    <div
                                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full transition-colors ${
                                        isSelected
                                          ? "bg-[#305eff] text-white"
                                          : "border border-slate-300 bg-white"
                                      }`}
                                    >
                                      {isSelected && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                                    </div>
                                  </div>
                                  <p className="text-[10px] text-slate-500 leading-snug mt-0.5">
                                    {srv.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Project Timeline */}
                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-2">
                          2. Expected Launch Timeline:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {TIMELINE_OPTIONS.map((t) => {
                            const isSelected = selectedTimeline === t.id;
                            return (
                              <button
                                key={t.id}
                                type="button"
                                onClick={() => setSelectedTimeline(t.id)}
                                className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all text-center cursor-pointer ${
                                  isSelected
                                    ? "border-[#305eff] bg-[#305eff] text-white shadow-xs"
                                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                {t.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Budget Scale */}
                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-2">
                          3. Estimated Project Budget / Scope Tier:
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { label: "Standard Workflow", range: "< ₹35,000 (~$400)" },
                            { label: "Growth / Multi-Agent", range: "₹35k – ₹1 Lakh" },
                            { label: "Enterprise Scale", range: "₹1 Lakh+ / Custom" },
                          ].map((b) => {
                            const isSelected = budgetTier === b.label;
                            return (
                              <div
                                key={b.label}
                                onClick={() => setBudgetTier(b.label)}
                                className={`rounded-xl border p-2.5 cursor-pointer text-center transition-all ${
                                  isSelected
                                    ? "border-[#305eff] bg-[#eff4ff] ring-1 ring-[#305eff]"
                                    : "border-slate-200 bg-white hover:bg-slate-50"
                                }`}
                              >
                                <span className="block text-[11px] font-bold text-slate-900">
                                  {b.label}
                                </span>
                                <span className="block text-[10px] text-slate-500 font-semibold mt-0.5">
                                  {b.range}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* STEP 2: Contact Information & Integrations */
                    <form id="lead-step2-form" onSubmit={handleSubmit} className="space-y-3.5">
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Name */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. John Doe / Rajesh Sharma"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                            />
                          </div>
                        </div>

                        {/* Work Email */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Work Email <span className="text-red-500">*</span>
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

                        {/* Mobile Phone */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="flex items-center gap-1.5">
                            <select
                              value={selectedCountry.code}
                              onChange={(e) => {
                                const found = GLOBAL_COUNTRIES.find((c) => c.code === e.target.value);
                                if (found) setSelectedCountry(found);
                              }}
                              className="rounded-xl border border-slate-300 bg-slate-50 px-2.5 py-2 text-xs font-bold text-slate-800 focus:border-[#305eff] focus:outline-none shrink-0 cursor-pointer"
                            >
                              {GLOBAL_COUNTRIES.map((c) => (
                                <option key={c.code} value={c.code}>
                                  {c.flag} {c.dialCode}
                                </option>
                              ))}
                            </select>

                            <div className="relative flex-1">
                              <input
                                type="tel"
                                required
                                placeholder="98765 43210"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Company Name */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Company / Organization Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. Apex Global / NovaScale"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Existing Tools Tags */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                          Existing Tools or CRMs to integrate (Optional):
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {STACK_TAGS.map((tag) => {
                            const isSelected = formData.selectedTools.includes(tag);
                            return (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => toggleTool(tag)}
                                className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-[#305eff] text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                              >
                                {isSelected ? `✓ ${tag}` : `+ ${tag}`}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Specific Goals or Notes */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Brief description of your business workflow or bottleneck:
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Tell us about the repetitive tasks, calls, or data sync you want AI agents to handle..."
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 resize-none"
                        />
                      </div>

                      {/* Human Verification */}
                      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                        <Bot className="h-3.5 w-3.5 text-[#305eff]" />
                        <span className="text-[11px] font-bold text-slate-700">
                          Verification: What is {mathNum1} + {mathNum2}?
                        </span>
                        <input
                          type="number"
                          required
                          placeholder="?"
                          value={userMathAns}
                          onChange={(e) => setUserMathAns(e.target.value)}
                          className="w-14 rounded-lg border border-slate-300 px-2 py-0.5 text-center text-xs font-bold focus:border-[#305eff] focus:outline-none bg-white"
                        />
                      </div>
                    </form>
                  )}
                </div>

                {/* Footer Navigation Buttons */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
                  {currentStep === 1 ? (
                    <>
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Private &bull; SOC 2 Standards</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleStep1Next}
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#305eff] to-[#1f47e0] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#305eff]/25 hover:shadow-[#305eff]/40 active:scale-98 transition-all cursor-pointer"
                      >
                        <span>Continue to Contact Details</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        form="lead-step2-form"
                        disabled={loading}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#305eff] to-[#1f47e0] py-2.5 px-5 text-xs font-bold text-white shadow-md shadow-[#305eff]/25 hover:shadow-[#305eff]/40 active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
                      >
                        {loading ? (
                          <span>Submitting to HubSpot CRM...</span>
                        ) : (
                          <>
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Schedule AI Consultation</span>
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>
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
