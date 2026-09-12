"use client";

import { motion } from "motion/react";
import { Star, Building2, CheckCircle2, Sparkles } from "lucide-react";

type Review = {
  id: string;
  name: string;
  role: string;
  storeName: string;
  location: string;
  category: string;
  rating: number;
  quote: string;
  impactMetric: string;
  avatarBg: string;
  avatarText: string;
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Rajesh Sharma",
    role: "Director & Founder",
    storeName: "Apex EduVentures",
    location: "Jaipur, Rajasthan",
    category: "Voice AI & Inquiries",
    rating: 5,
    quote:
      "TCB engineered a custom voice calling and automated lead outreach agent for our team. It qualifies inbound leads and triggers instant personalized follow-ups within seconds, boosting conversion by 45%!",
    impactMetric: "45% Higher Inquiries Conversion",
    avatarBg: "bg-blue-100 text-blue-800",
    avatarText: "RS",
  },
  {
    id: "r2",
    name: "Vikram Patel",
    role: "Managing Partner",
    storeName: "Patel Logistics & Trade",
    location: "Ahmedabad, Gujarat",
    category: "Workflow Automation",
    rating: 5,
    quote:
      "TCB designed an automated invoice reconciliation and dispatch pipeline connected to our ERP. It extracts PO numbers with OCR, sends instant customer dispatch confirmations, and completely eliminated manual data entry.",
    impactMetric: "Zero Manual Data Entry",
    avatarBg: "bg-indigo-100 text-indigo-800",
    avatarText: "VP",
  },
  {
    id: "r3",
    name: "Sneha Kulkarni",
    role: "Head of Operations",
    storeName: "NovaScale Commerce",
    location: "Bengaluru, Karnataka",
    category: "AI Workflow Automation",
    rating: 5,
    quote:
      "TCB built an autonomous AI customer support and lead qualification workflow for us. It seamlessly resolves 75% of customer inquiries 24/7 across omnichannel web chat and ticketing without human intervention, saving our team over 35 hours every single week.",
    impactMetric: "35+ Hours Saved / Week",
    avatarBg: "bg-emerald-100 text-emerald-800",
    avatarText: "SK",
  },
  {
    id: "r4",
    name: "Amitabh Verma",
    role: "Chief Operating Officer",
    storeName: "Zenith Healthcare Clinics",
    location: "Delhi NCR, India",
    category: "Healthcare & Enterprise",
    rating: 5,
    quote:
      "TCB centralized our multi-center billing, patient records, and expense ledgers into a single unified dashboard. At month-end, our accounts team generates complete CA-ready financial Excel and GST reports with just 1 click.",
    impactMetric: "1-Click Financial Excel Export",
    avatarBg: "bg-purple-100 text-purple-800",
    avatarText: "AV",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden border-t border-slate-200/60 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Badges & Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d0ddfd] bg-[#eff4ff] px-3.5 py-1 text-xs font-bold text-[#305eff] shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
            Trusted by Fast-Growing Businesses &amp; Enterprises
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Real impact from our custom AI agents &amp; workflows
          </h2>
          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            See how modern enterprises and growing teams automate daily operations, eliminate manual bottlenecks, and accelerate revenue with TCB.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 rounded-2xl border border-[#d0ddfd] bg-[#eff4ff]/60 p-4 sm:p-6 sm:grid-cols-4 sm:px-8 sm:py-6">
          <div className="text-center">
            <div className="text-xl font-extrabold text-slate-900 sm:text-3xl">100+</div>
            <div className="mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">Active Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-extrabold text-[#305eff] sm:text-3xl">4.9 / 5</div>
            <div className="mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">Client Satisfaction Rating</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-extrabold text-slate-900 sm:text-3xl">50,000+</div>
            <div className="mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">Hours Saved for Clients</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-extrabold text-[#305eff] sm:text-3xl">99.4%</div>
            <div className="mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">Automated Resolution Rate</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-[#305eff]/40 hover:shadow-xl transition-all"
            >
              <div>
                {/* Rating Stars & Impact Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 text-[11px] font-bold text-[#305eff]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#305eff]" />
                    {review.impactMetric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="mt-5 text-sm leading-relaxed text-slate-700 italic font-normal">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author & Store Info Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-bold text-sm ${review.avatarBg}`}
                  >
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Building2 className="h-3.5 w-3.5 text-slate-400" />
                      <span>{review.storeName}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-medium text-slate-400">
                  {review.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
