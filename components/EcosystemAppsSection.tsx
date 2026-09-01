"use client";

import Link from "next/link";
import {
  GraduationCap,
  Boxes,
  Stethoscope,
  Dumbbell,
  Hotel,
  Utensils,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Layers,
} from "lucide-react";

type SaaSProductCard = {
  id: string;
  name: string;
  category: string;
  description: string;
  badge: string;
  badgeStyle: string;
  href: string;
  icon: any;
  iconBg: string;
};

const SAAS_PRODUCTS: SaaSProductCard[] = [
  {
    id: "school",
    name: "TCB School SaaS",
    category: "Education & Coaching ERP",
    description: "Student rosters, daily attendance, WhatsApp parent alerts & fee ledgers.",
    badge: "Live SaaS",
    badgeStyle: "bg-emerald-50 text-emerald-800 border-emerald-300",
    href: "/school",
    icon: GraduationCap,
    iconBg: "bg-emerald-600 text-white",
  },
  {
    id: "store",
    name: "TCB Store SaaS",
    category: "Retail Inventory & POS",
    description: "Barcode stock master, GST invoicing, supplier ledgers & credit Udhar Khata.",
    badge: "Beta Workspace",
    badgeStyle: "bg-teal-50 text-teal-800 border-teal-300",
    href: "/store",
    icon: Boxes,
    iconBg: "bg-teal-600 text-white",
  },
  {
    id: "health",
    name: "TCB Health Cloud",
    category: "Healthcare & Clinic EHR",
    description: "Doctor OPD scheduler, patient medical records & pharmacy POS.",
    badge: "Coming Soon",
    badgeStyle: "bg-amber-50 text-amber-900 border-amber-300",
    href: "/health",
    icon: Stethoscope,
    iconBg: "bg-slate-800 text-emerald-400",
  },
  {
    id: "fitness",
    name: "TCB Fitness Suite",
    category: "Gym & Club Platform",
    description: "Biometric access control, trainer scheduling & automated monthly dues.",
    badge: "Coming Soon",
    badgeStyle: "bg-amber-50 text-amber-900 border-amber-300",
    href: "/fitness",
    icon: Dumbbell,
    iconBg: "bg-slate-800 text-teal-400",
  },
  {
    id: "hotel",
    name: "TCB Stay & Desk",
    category: "Hospitality & Hotel Desk",
    description: "Room reservation engine, guest check-in/out & housekeeping billing.",
    badge: "Coming Soon",
    badgeStyle: "bg-amber-50 text-amber-900 border-amber-300",
    href: "/hotel",
    icon: Hotel,
    iconBg: "bg-slate-800 text-amber-400",
  },
  {
    id: "dine",
    name: "TCB Dine POS",
    category: "Restaurant & Kitchen KOT",
    description: "Contactless QR table menu ordering & kitchen display sync.",
    badge: "Coming Soon",
    badgeStyle: "bg-amber-50 text-amber-900 border-amber-300",
    href: "/dine",
    icon: Utensils,
    iconBg: "bg-slate-800 text-indigo-400",
  },
];

export default function EcosystemAppsSection() {
  return (
    <section id="ecosystem-apps" className="relative border-t border-slate-200/60 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      
      {/* Radial Background Accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        
        {/* Compact Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1 text-xs font-bold text-emerald-800 shadow-xs">
            <Layers className="h-3.5 w-3.5 text-emerald-600" />
            TCB Micro-SaaS Product Portfolio
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Specialized SaaS Solutions <span className="nuvertos-gradient-text">Engineered by Our Studio</span>
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            We build custom AI agents &amp; automations tailored to your specific business requirements. Explore pre-engineered vertical frameworks:
          </p>
        </div>

        {/* Unified Compact Product Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAAS_PRODUCTS.map((prod) => {
            const IconComp = prod.icon;
            return (
              <Link
                key={prod.id}
                href={prod.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${prod.iconBg} shadow-xs transition-transform group-hover:scale-105`}>
                      <IconComp className="h-5 w-5" />
                    </div>

                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold border ${prod.badgeStyle}`}>
                      {prod.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {prod.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    {prod.category}
                  </span>

                  {/* Short Description */}
                  <p className="mt-1.5 text-xs text-slate-600 leading-snug">
                    {prod.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>View Details</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
