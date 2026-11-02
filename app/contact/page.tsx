"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Building2,
  User,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Clock,
  MessageSquare,
  Copy,
  Check,
  ChevronRight,
} from "lucide-react";
import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import EcosystemHeader from "@/components/EcosystemHeader";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";
import { useGlobalCountry, GLOBAL_COUNTRIES } from "@/components/GlobalCountryContext";
import JsonLd from "@/components/JsonLd";
import { getContactPageJsonLd } from "@/lib/jsonLd";

const SERVICES_OPTIONS = [
  "WhatsApp Business & CRM Automation",
  "Real-Time Voice AI Calling & Reception Bots",
  "Custom Autonomous AI Agents & Lead Gen",
  "Enterprise RAG Knowledge Vaults",
  "Complex Zapier & Make (n8n) Workflows",
  "Platform & Google Sheets Sync with Alerts",
  "AI Document & Invoice OCR Extraction",
  "Direct AWS Cloud Private Deployment",
];

export default function ContactPage() {
  const { selectedCountry, setSelectedCountry } = useGlobalCountry();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "WhatsApp Business & CRM Automation",
  ]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@thecodebrains.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Please enter your name, email, and phone number.");
      return;
    }

    setLoading(true);

    const fullPhone = `${selectedCountry.dialCode} ${formData.phone.trim()}`;

    // Capture visitor attribution
    let pageUrl = "";
    let referrer = "Direct Visit / Bookmark";
    let utmDetails = "";
    let deviceType = "Desktop";

    if (typeof document !== "undefined") {
      pageUrl = globalThis.location.href;
      referrer = document.referrer ? document.referrer : "Direct Visit / Bookmark";

      const params = new URLSearchParams(globalThis.location.search);
      const utmSource = params.get("utm_source");
      const utmMedium = params.get("utm_medium");
      const utmCampaign = params.get("utm_campaign");
      if (utmSource || utmCampaign) {
        utmDetails = `Source: ${utmSource || "N/A"} | Medium: ${utmMedium || "N/A"} | Campaign: ${utmCampaign || "N/A"}`;
      }

      if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        deviceType = "Mobile Device";
      }
    }

    const noteWithServices = `Selected Services: ${selectedServices.join(", ")}\n\nClient Note: ${formData.message.trim() || "N/A"}`;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: fullPhone,
          company: formData.company.trim() || "Website Inquiry",
          source: "Dedicated Contact Page",
          plan: selectedServices.join(", "),
          country: `${selectedCountry.name} (${selectedCountry.dialCode})`,
          message: noteWithServices,
          pageUrl,
          pageTitle: "TCB — Contact Us & Architecture Consultation",
          referrer,
          utm: utmDetails,
          device: deviceType,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setReferenceId(data.leadId || `TCB-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitted(true);
      } else {
        alert("Failed to submit request. Please email us directly at contact@thecodebrains.com");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please email us at contact@thecodebrains.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full bg-white text-slate-900 antialiased selection:bg-[#305eff] selection:text-white">
      <JsonLd data={getContactPageJsonLd()} />
      {/* 0. Top Worldwide Ticker & Header */}
      <WorldwideClientsBanner />
      <EcosystemHeader />

      {/* Hero Breadcrumb & Header */}
      <section className="relative overflow-hidden bg-white px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs - Kept Left Aligned */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#305eff] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Contact</span>
          </nav>

          {/* Hero Content - Centered */}
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-display leading-[1.12] max-w-3xl mx-auto">
              Let&apos;s build AI agents that <span className="electric-gradient-text">run your business</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Share your current workflow, tech stack, and automation goals. We scope custom agents, n8n pipelines, and voice telephony — with guaranteed response within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="relative bg-slate-50/50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Interactive Consultation Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border-2 border-emerald-200 shadow-sm">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <span className="inline-block rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 mb-3">
                    INQUIRY RECEIVED • REF: {referenceId}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                    Thank you, {formData.name.split(" ")[0]}!
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our lead solutions architect is reviewing your workflow details. We will reach out within 24 hours at <strong>{formData.email}</strong> with a scoped architecture proposal.
                  </p>

                  <div className="mt-8 p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-left max-w-md mx-auto text-xs text-slate-700 space-y-2">
                    <div className="font-bold text-[#305eff] flex items-center gap-1.5 text-sm">
                      <Clock className="h-4 w-4" /> Next Steps:
                    </div>
                    <p>• 30-minute discovery call to map exact APIs and credentials.</p>
                    <p>• Scoped system design with fixed deliverables & direct AWS deployment.</p>
                    <p>• 100% Client Git & Source Code Ownership from Day 1.</p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-6 py-3 text-xs font-bold text-white shadow-md transition-all"
                    >
                      <span>Return to Home</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
                      }}
                      className="text-xs font-semibold text-slate-600 hover:text-[#305eff] underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Send a project inquiry
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      Fill in your details below and our engineering team will get back to you promptly.
                    </p>
                  </div>

                  {/* Service Pills Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      What are you looking to build or automate?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_OPTIONS.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => toggleService(svc)}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-[#305eff] text-white border-[#305eff] shadow-xs"
                                : "bg-white text-slate-700 border-slate-200 hover:border-[#305eff]/40 hover:bg-blue-50/50"
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#305eff] focus:outline-hidden transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email address"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#305eff] focus:outline-hidden transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Phone / WhatsApp with Global Country Dial Code */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={selectedCountry.code}
                          onChange={(e) => {
                            const found = GLOBAL_COUNTRIES.find((c) => c.code === e.target.value);
                            if (found) setSelectedCountry(found);
                          }}
                          className="w-28 rounded-xl border border-slate-200 bg-slate-50/60 px-2.5 py-2.5 text-xs font-bold text-slate-800 focus:bg-white focus:border-[#305eff] focus:outline-hidden transition-all shrink-0 cursor-pointer"
                        >
                          {GLOBAL_COUNTRIES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.dialCode}
                            </option>
                          ))}
                        </select>
                        <div className="relative flex-1">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder={selectedCountry.samplePhone || "Enter phone number"}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#305eff] focus:outline-hidden transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Enter your company name"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#305eff] focus:outline-hidden transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tell us about your project or current workflow
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What manual processes would you like to automate? Any specific apps like HubSpot, Salesforce, WhatsApp, or AWS?"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#305eff] focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#305eff] hover:bg-[#1f47e0] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#305eff]/20 transition-all active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Connecting to Solutions Architect...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry &amp; Book Architecture Call</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#305eff]" />
                      NDA Protected
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#305eff]" />
                      24-Hour Reply
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#305eff]" />
                      No Sales Pressure
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Direct Info, Global Locations & Guarantees (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Contact Card */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#305eff] border border-blue-200">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-[#305eff] border border-blue-200">
                    Direct Email
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Prefer email or have an RFP?
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Send your architecture specs, RFPs, or workflow diagrams directly to our engineering mailbox:
                </p>

                <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5">
                  <span className="font-mono text-xs font-bold text-slate-800">
                    contact@thecodebrains.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-xs font-bold text-[#305eff] hover:underline cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Worldwide Delivery Hubs */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Globe2 className="h-5 w-5 text-[#305eff]" />
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Worldwide Delivery &amp; Presence
                  </h3>
                </div>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="font-bold text-slate-900">🇺🇸 United States</div>
                      <div className="text-[11px] text-slate-500">Delaware &amp; San Francisco • North America Client Hub</div>
                    </div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">EST / PST</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="font-bold text-slate-900">🇦🇪 UAE / Middle East</div>
                      <div className="text-[11px] text-slate-500">Dubai Silicon Oasis • EMEA Strategic Center</div>
                    </div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">GST (UTC+4)</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="font-bold text-slate-900">🇮🇳 India (HQ)</div>
                      <div className="text-[11px] text-slate-500">Jaipur &amp; Bangalore • Core Engineering &amp; AI R&amp;D</div>
                    </div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">IST (UTC+5:30)</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-slate-900">🇦🇺 Australia</div>
                      <div className="text-[11px] text-slate-500">Sydney • APAC Client Coverage</div>
                    </div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">AEST</span>
                  </div>
                </div>
              </div>

              {/* 3 Non-Negotiable Guarantees */}
              <div className="rounded-3xl bg-blue-50/60 p-6 sm:p-8 border border-blue-200">
                <h3 className="text-sm font-bold text-slate-900 font-display mb-3">
                  Why enterprise leaders choose TCB:
                </h3>
                <div className="space-y-3 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#305eff] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">100% Client Git Ownership:</strong> You own all source code, models, prompts, and workflows. Zero vendor lock-in.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#305eff] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Direct AWS Cloud VPS Deployment:</strong> Installed in your private cloud environment. Data never leaks to third-party shared SaaS.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#305eff] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Zero Agency Retainer Markups:</strong> Production-ready architecture delivered transparently with full documentation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Engagement Process */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              What happens after you reach out?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A transparent, engineering-first roadmap from inquiry to production deployment.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] font-bold text-sm mb-4 border border-blue-200">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">Architecture Discovery</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                30-minute discovery session with an AI Solutions Architect to map your data schemas, CRM endpoints, and call volume requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] font-bold text-sm mb-4 border border-blue-200">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">Blueprint &amp; Fixed Scope</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We deliver an exact technical schematic, including model selection (Deepgram, ElevenLabs, Claude), n8n pipeline logic, and fixed timeline.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] font-bold text-sm mb-4 border border-blue-200">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">Production Deployment</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Direct rollout to your AWS Cloud, live SIP/Twilio telephony testing, staff onboarding, and 100% transfer of code repository.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer & Floating Widget */}
      <Footer />
      <DemoFloatWidget />
    </main>
  );
}
