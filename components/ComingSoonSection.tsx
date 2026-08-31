"use client";

import { useState } from "react";
import {
  MessageSquare,
  BellRing,
  FolderLock,
  FileCheck,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Send,
  Clock,
  ShieldAlert,
  Flame,
  BadgeCheck,
  X,
} from "lucide-react";

type UpcomingTool = {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  icon: any;
  glowColor: string;
  accentBorder: string;
  badgeColor: string;
  features: string[];
  expectedLaunch: string;
};

const UPCOMING_TOOLS: UpcomingTool[] = [
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation Suite",
    category: "Instant Alerts & Parent Updates",
    badge: "In Active Dev",
    description:
      "Send instant class schedules, attendance alerts, exam results, and institute broadcast announcements automatically via WhatsApp API.",
    icon: MessageSquare,
    glowColor: "group-hover:shadow-[0_0_35px_-5px_rgba(34,197,94,0.4)]",
    accentBorder: "group-hover:border-emerald-400",
    badgeColor: "border-emerald-500/40 bg-emerald-950/80 text-emerald-400",
    features: [
      "Instant WhatsApp notifications for attendance & absent alerts",
      "Broadcast batch announcements & holiday notices with 1 click",
      "Direct PDF report card & fee receipt dispatch to parents",
      "Interactive WhatsApp chatbot for parent inquiries & fee status",
    ],
    expectedLaunch: "Q3 2026",
  },
  {
    id: "fee-reminders",
    title: "Fees Dues Automated Reminders",
    category: "Automated Payment Workflow",
    badge: "Private Beta",
    description:
      "Auto-trigger smart payment links, due date countdowns, and scheduled WhatsApp alerts for uncollected tuition fees.",
    icon: BellRing,
    glowColor: "group-hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.4)]",
    accentBorder: "group-hover:border-amber-400",
    badgeColor: "border-amber-500/40 bg-amber-950/80 text-amber-400",
    features: [
      "Auto-trigger payment reminder links 3 days before due date",
      "Embedded Razorpay / PhonePe / Paytm UPI payment links",
      "Multi-level friendly reminder sequences (Email & WhatsApp)",
      "Automated payment reconciliation & instant receipt trigger",
    ],
    expectedLaunch: "Q3 2026",
  },
  {
    id: "storage-system",
    title: "Storage Management System",
    category: "Secure Cloud Asset Vault",
    badge: "Architecture Phase",
    description:
      "Encrypted cloud repository for study materials, lecture notes, video recordings, student certificates, and institute archives.",
    icon: FolderLock,
    glowColor: "group-hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.4)]",
    accentBorder: "group-hover:border-emerald-400",
    badgeColor: "border-emerald-500/40 bg-emerald-950/80 text-emerald-400",
    features: [
      "Organized folder vault per batch, subject, and student roll number",
      "Granular access control: Share study PDFs with specific student groups",
      "Automatic virus scanning & HIPAA-level 256-bit AES file encryption",
      "High-speed CDN for instant assignment download on mobile",
    ],
    expectedLaunch: "Q4 2026",
  },
  {
    id: "invoice-ledger",
    title: "Automated Invoice Ledger Generator",
    category: "Tax & Financial Intelligence",
    badge: "In Active Dev",
    description:
      "Synthesize store sales, fee collections, operational expenses, and tax ledgers into automated GST & P&L financial statements.",
    icon: FileCheck,
    glowColor: "group-hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.4)]",
    accentBorder: "group-hover:border-purple-400",
    badgeColor: "border-purple-500/40 bg-purple-950/80 text-purple-400",
    features: [
      "1-Click automated GST B2B & B2C tax ledger generation",
      "Daily profit/loss reconciliation across store & institute modules",
      "Export directly to Tally, Zoho Books, or Excel formats",
      "Automated monthly audit reports for CA and financial compliance",
    ],
    expectedLaunch: "Q4 2026",
  },
];

export default function ComingSoonSection() {
  const [email, setEmail] = useState("");
  const [selectedToolModal, setSelectedToolModal] = useState<UpcomingTool | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setSelectedToolModal(null);
    }, 3500);
  };

  return (
    <section
      id="coming-soon"
      className="relative overflow-hidden bg-white py-24 text-slate-900 sm:py-32 border-t border-slate-100"
    >
      {/* Background Radial Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#059669_0.6px,transparent_0.6px)] [background-size:28px_28px] opacity-10"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Badge & Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-xs">
            <Flame className="h-4 w-4 text-emerald-600 animate-bounce" />
            <span>Next-Gen Automation Roadmap</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Coming Soon:{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Advanced Automation Suite
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We are engineering high-impact automation tools and storage modules to accelerate institute growth and streamline business operations.
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {UPCOMING_TOOLS.map((tool) => {
            const IconComp = tool.icon;
            return (
              <div
                key={tool.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-md"
              >
                {/* Glowing Top Shimmer Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700" />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-xs transition-transform group-hover:scale-110">
                      <IconComp className="h-7 w-7 text-emerald-600" />
                    </div>

                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-extrabold text-emerald-800">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="mt-6 text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {tool.title}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-emerald-700">
                    {tool.category}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-600">
                    {tool.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 border-t border-slate-100 pt-4 space-y-2">
                    {tool.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA & Launch Indicator */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-emerald-600" />
                    Target: {tool.expectedLaunch}
                  </span>

                  <button
                    onClick={() => setSelectedToolModal(tool)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Waitlist Banner */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-emerald-200 bg-slate-50 p-8 sm:p-12 shadow-xs">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                <Sparkles className="h-4 w-4" />
                <span>Early Access VIP Network</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                Be First to Access Next-Gen WhatsApp &amp; Storage Tools
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Subscribe to receive early beta access, 30-day extended free trial tokens, and priority setup assistance for your coaching center or retail store.
              </p>
            </div>

            <div className="lg:col-span-5">
              {submitted ? (
                <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-center text-slate-900 shadow-xs animate-fade-in">
                  <BadgeCheck className="mx-auto h-10 w-10 text-emerald-600" />
                  <h4 className="mt-2 font-bold text-sm text-emerald-800">You are on the VIP Waitlist!</h4>
                  <p className="mt-1 text-xs text-slate-600">
                    We have reserved your early access spot. Check your inbox for updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-xs text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-6 py-3.5 text-xs font-extrabold text-white shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
                  >
                    <span>Join Waitlist</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Waitlist Modal */}
      {selectedToolModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-500/50 bg-slate-900 p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setSelectedToolModal(null)}
              className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-800 p-2 text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  Early Access Beta
                </span>
                <h3 className="text-lg font-black text-white">{selectedToolModal.title}</h3>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-300">
              Get priority access to <strong>{selectedToolModal.title}</strong> before public launch ({selectedToolModal.expectedLaunch}).
            </p>

            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 p-4 text-center">
                <BadgeCheck className="mx-auto h-8 w-8 text-emerald-400" />
                <div className="mt-2 text-xs font-bold text-emerald-300">Access Reserved!</div>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="mt-6 space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Your Business or Institute Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Coaching Institute"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-extrabold text-slate-950 shadow-md hover:bg-emerald-400 transition-all"
                >
                  <span>Confirm Early Beta Registration</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
