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
    name: "Marcus Vance",
    role: "Managing Director",
    storeName: "Vance Tech Hardware",
    location: "Austin, Texas",
    category: "Electronics",
    rating: 5,
    quote:
      "Earlier I maintained 3 separate software applications — one for customer credit, one for daily sales, and one for stock. TCB consolidated everything into a single platform. With automated payment reminders, we recovered ₹12 Lakh in overdue credit in just 15 days!",
    impactMetric: "Recovered ₹12L Credit",
    avatarBg: "bg-emerald-100 text-emerald-800",
    avatarText: "MV",
  },
  {
    id: "r2",
    name: "Elena Rostova",
    role: "VP Operations",
    storeName: "Apex Digital Solutions",
    location: "Chicago, Illinois",
    category: "Electronics",
    rating: 5,
    quote:
      "Barcode scanning is lightning fast! Customers check out and an automated tax invoice is generated & sent via WhatsApp/Email in under 10 seconds. Thermal receipt printing keeps counter lines short.",
    impactMetric: "4x Faster Billing Speed",
    avatarBg: "bg-emerald-100 text-emerald-800",
    avatarText: "ER",
  },
  {
    id: "r3",
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    storeName: "Modern Supply Co.",
    location: "Seattle, Washington",
    category: "Hardware",
    rating: 5,
    quote:
      "Low stock alerts have saved us tens of thousands in lost revenue. Previously, catalog items would go out of stock without warning. Now we get instant automated reorder notifications.",
    impactMetric: "Zero Out-of-Stock Sales Lost",
    avatarBg: "bg-purple-100 text-purple-800",
    avatarText: "SJ",
  },
  {
    id: "r4",
    name: "David Chen",
    role: "Operations Lead",
    storeName: "Nexus Global Logistics",
    location: "San Francisco, California",
    category: "Hardware",
    rating: 5,
    quote:
      "Simple, robust, and tax compliant. Our finance team gets monthly financial reports exported in Excel/PDF with just 1 click. Highly recommended for any scaling business!",
    impactMetric: "1-Click Financial Excel Export",
    avatarBg: "bg-amber-100 text-amber-800",
    avatarText: "DC",
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
            Loved By 5,000+ Enterprise Business Owners
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Real stories from real enterprise leaders
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
            See how commerce leaders and educational academies transformed their operations, billing, and cash flows with TCB.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:grid-cols-4 sm:px-8 sm:py-6">
          <div className="text-center">
            <div className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">5,000+</div>
            <div className="mt-1 text-xs font-medium text-zinc-500">Global Enterprises &amp; Academies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-emerald-600 sm:text-3xl">4.9 / 5</div>
            <div className="mt-1 text-xs font-medium text-zinc-500">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">₹50 Cr+</div>
            <div className="mt-1 text-xs font-medium text-zinc-500">Transactions Processed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-emerald-600 sm:text-3xl">99.4%</div>
            <div className="mt-1 text-xs font-medium text-zinc-500">Receivables Collection Rate</div>
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
