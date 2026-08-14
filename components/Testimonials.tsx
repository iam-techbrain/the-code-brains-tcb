"use client";

import { Star, Building2, CheckCircle2, Sparkles } from "lucide-react";

type Review = {
  id: string;
  name: string;
  role: string;
  storeName: string;
  location: string;
  category: "Kirana" | "Garments" | "Electronics" | "Hardware";
  rating: number;
  quote: string;
  impactMetric: string;
  avatarBg: string;
  avatarText: string;
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Rajesh Kumar",
    role: "Proprietor",
    storeName: "Rajesh Super Store",
    location: "Jaipur, Rajasthan",
    category: "Kirana",
    rating: 5,
    quote:
      "Earlier I maintained 3 separate physical registers — one for credit ledger, one for daily sales, and one for stock. TCB Store consolidated everything onto my mobile app. With automated WhatsApp payment reminders, I recovered ₹1.2 Lakh in pending customer credit within 15 days!",
    impactMetric: "Recovered ₹1.2L Credit",
    avatarBg: "bg-emerald-100 text-emerald-800",
    avatarText: "RK",
  },
  {
    id: "r2",
    name: "Vikram Shah",
    role: "Owner",
    storeName: "Shah Electronics & Mobile",
    location: "Ahmedabad, Gujarat",
    category: "Electronics",
    rating: 5,
    quote:
      "Barcode scanning is super fast! Customers come in and a GST bill is generated & sent via WhatsApp in 10 seconds. Thermal printing support keeps counter lines short during peak hours.",
    impactMetric: "4x Faster Counter Billing",
    avatarBg: "bg-blue-100 text-blue-800",
    avatarText: "VS",
  },
  {
    id: "r3",
    name: "Sunita Verma",
    role: "Managing Director",
    storeName: "Modern Fashion Collection",
    location: "Indore, Madhya Pradesh",
    category: "Garments",
    rating: 5,
    quote:
      "Low stock alerts have saved me thousands in lost revenue. Previously, stock would run out without me noticing. Now I receive instant notifications to reorder items before they sell out.",
    impactMetric: "Zero Out-of-Stock Sales Lost",
    avatarBg: "bg-purple-100 text-purple-800",
    avatarText: "SV",
  },
  {
    id: "r4",
    name: "Amitabh Choudhury",
    role: "Founder",
    storeName: "Choudhury Hardware & Paints",
    location: "Kolkata, West Bengal",
    category: "Hardware",
    rating: 5,
    quote:
      "Simple, clear, and GST compliant. My accountant gets monthly sales data exported in Excel with just 1 click. Highly recommended for any retailer!",
    impactMetric: "1-Click Accountant Excel Export",
    avatarBg: "bg-amber-100 text-amber-800",
    avatarText: "AC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative border-t border-zinc-100 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Badges & Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            Loved By 5,000+ Retail &amp; Education Business Owners
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Real stories from real business owners
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
            See how retail store owners and coaching institutes transformed their operations, billing, and cash flows with TCB.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:grid-cols-4 sm:px-8 sm:py-6">
          <div className="text-center">
            <div className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">5,000+</div>
            <div className="mt-1 text-xs font-medium text-zinc-500">Active Stores &amp; Institutes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-emerald-600 sm:text-3xl">4.9 / 5</div>
            <div className="mt-1 text-xs font-medium text-zinc-500">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">₹50 Cr+</div>
            <div className="mt-1 text-xs font-medium text-zinc-500">Invoices Processed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-emerald-600 sm:text-3xl">99.4%</div>
            <div className="mt-1 text-xs font-medium text-zinc-500">Dues Recovery Rate</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5"
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
                  <span className="inline-flex items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3 w-3" />
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
