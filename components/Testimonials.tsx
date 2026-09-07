"use client";

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
    storeName: "Apex Coaching Academy",
    location: "Jaipur, Rajasthan",
    category: "Education & Coaching",
    rating: 5,
    quote:
      "Earlier our staff spent days manually tracking tuition fees and calling parents. With TCB School's automated WhatsApp fee reminders and attendance alerts, fee collection jumped by 40% and we recovered over ₹8.5 Lakh in overdue dues within the first month alone!",
    impactMetric: "₹8.5L Overdue Fees Recovered",
    avatarBg: "bg-blue-100 text-blue-800",
    avatarText: "RS",
  },
  {
    id: "r2",
    name: "Vikram Patel",
    role: "Managing Partner",
    storeName: "Patel Supermart & Electronics",
    location: "Ahmedabad, Gujarat",
    category: "Retail POS & Inventory",
    rating: 5,
    quote:
      "The barcode POS is blisteringly fast! Customers check out and receive an itemized GST tax invoice straight on WhatsApp in under 10 seconds. Thermal receipt printing keeps counter lines short, and automated low-stock alerts prevent stock-outs.",
    impactMetric: "4x Faster Checkout Billing",
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
      "TCB built an autonomous AI customer support and lead qualification workflow for us. It seamlessly resolves 75% of customer inquiries 24/7 across WhatsApp and web chat without human intervention, saving our team over 35 hours every single week.",
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
            Trusted by 1,200+ Businesses &amp; Educational Institutes
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Real stories from real founders &amp; academy leaders
          </h2>
          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            See how retail stores, educational academies, and growing businesses automate workflows, streamline billing, and accelerate cash flow with TCB.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 rounded-2xl border border-[#d0ddfd] bg-[#eff4ff]/60 p-4 sm:p-6 sm:grid-cols-4 sm:px-8 sm:py-6">
          <div className="text-center">
            <div className="text-xl font-extrabold text-slate-900 sm:text-3xl">1,200+</div>
            <div className="mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">Active Businesses &amp; Academies</div>
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
        <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#305eff] hover:shadow-xl hover:shadow-[#305eff]/10"
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
                  <span className="inline-flex items-center gap-1 rounded-md border border-[#d0ddfd] bg-[#eff4ff] px-2.5 py-0.5 text-[11px] font-bold text-[#1f47e0]">
                    <CheckCircle2 className="h-3 w-3 text-[#305eff]" />
                    {review.impactMetric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="mt-5 text-sm leading-relaxed text-zinc-700 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author & Store Info Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-sm ${review.avatarBg}`}
                  >
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <Building2 className="h-3 w-3 text-zinc-400" />
                      <span>{review.storeName}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-medium text-zinc-400">
                  {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
