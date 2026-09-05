"use client";

import { use } from "react";
import EcosystemHeader from "@/components/EcosystemHeader";
import Footer from "@/components/Footer";
import { Stethoscope, Dumbbell, Hotel, Utensils, Sparkles, Clock, CheckCircle2, Send } from "lucide-react";

type ProductDetails = {
  name: string;
  category: string;
  description: string;
  price: string;
  launch: string;
  icon: any;
  features: string[];
};

const PRODUCTS_MAP: Record<string, ProductDetails> = {
  health: {
    name: "TCB Health Cloud",
    category: "Healthcare & EHR Platform",
    description: "Cloud EHR for clinics and hospitals featuring doctor consultation records, patient medical history, lab test reports, and pharmacy billing.",
    price: "₹699/mo",
    launch: "Q4 2026",
    icon: Stethoscope,
    features: [
      "Patient EHR & Digital Health Cards",
      "Doctor OPD Consultation Scheduler",
      "Pharmacy Inventory & Billing POS",
      "WhatsApp Appointment Reminders",
    ],
  },
  fitness: {
    name: "TCB Fitness Suite",
    category: "Gym & Fitness Club Platform",
    description: "All-in-one gym management software with biometric access control, personal trainer scheduling, and automated monthly dues collection.",
    price: "₹399/mo",
    launch: "Q4 2026",
    icon: Dumbbell,
    features: [
      "Biometric & QR Access Control",
      "Automated Monthly Dues Collection",
      "Trainer Class & Workout Scheduling",
      "WhatsApp Membership Expiry Alerts",
    ],
  },
  hotel: {
    name: "TCB Stay & Desk",
    category: "Hospitality & Hotel Front Desk",
    description: "Property management software for hotels, resorts & PG stays with room reservation engine, guest check-in/out, and room service billing.",
    price: "₹899/mo",
    launch: "Q4 2026",
    icon: Hotel,
    features: [
      "Room Booking & Availability Engine",
      "Guest ID Verification & Check-in",
      "Housekeeping & Room Service POS",
      "Automated WhatsApp Bill Dispatch",
    ],
  },
  dine: {
    name: "TCB Dine POS",
    category: "Restaurant & KOT Display System",
    description: "Complete restaurant POS with digital QR table ordering, kitchen display system (KDS), takeaway billing, and Swiggy/Zomato sync.",
    price: "₹499/mo",
    launch: "Q4 2026",
    icon: Utensils,
    features: [
      "Table Contactless QR Menu Ordering",
      "Kitchen Display System (KDS) Sync",
      "GST Compliant Thermal Billing",
      "WhatsApp Digital Bill & Feedback",
    ],
  },
};

export default function ProductComingSoonPage({ params }: { params: Promise<{ product: string }> }) {
  const resolvedParams = use(params);
  const productKey = resolvedParams.product;
  const product = PRODUCTS_MAP[productKey] || {
    name: "TCB SaaS Product",
    category: "Upcoming Enterprise Vertical",
    description: "This specialized micro-SaaS module is currently in active private beta development.",
    price: "₹499/mo",
    launch: "Q4 2026",
    icon: Sparkles,
    features: [
      "Multi-tenant Cloud Architecture",
      "AWS 99.95% Guaranteed Uptime",
      "Encrypted Tenant Data Isolation",
      "Automated WhatsApp Alert Engine",
    ],
  };

  const IconComp = product.icon;

  return (
    <main className="min-h-screen bg-brand-50 text-brand-900 antialiased flex flex-col justify-between">
      <EcosystemHeader />

      {/* DEDICATED PRODUCT COMING SOON HERO */}
      <section className="relative overflow-hidden bg-white px-4 pb-20 pt-14 text-slate-900 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 flex-1 flex items-center justify-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-100/50 blur-[120px]"
        />

        <div className="mx-auto max-w-4xl text-center w-full">
          
          {/* Eyebrow Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-extrabold text-amber-900 shadow-xs">
            <Clock className="h-4 w-4 text-amber-600 animate-pulse" />
            <span>COMMING SOON — PRIVATE BETA IN PROGRESS ({product.launch})</span>
          </div>

          {/* Product Icon & Name Header */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-md">
              <IconComp className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              {product.name}
            </h1>
            <span className="text-sm font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              {product.category} • Indicative Price: {product.price}
            </span>
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {product.description}
          </p>

          {/* Key Capabilities */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 text-left max-w-2xl mx-auto">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-slate-50 p-3 text-xs font-bold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Interest Registration Form CTA */}
          <div className="mt-10 mx-auto max-w-md rounded-2xl border border-brand-300 bg-brand-50/60 p-6 shadow-sm">
            <h3 className="text-sm font-extrabold text-brand-950 flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-500" />
              <span>Register Early Interest for {product.name}</span>
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Be the first to get 50% lifetime discount when early beta opens.
            </p>

            <form className="mt-4 flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name / Business Name"
                className="w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-hidden"
              />
              <input
                type="text"
                placeholder="WhatsApp Number / Phone"
                className="w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-hidden"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-brand-500 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-brand-700 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Register Interest &amp; Join Waitlist</span>
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
