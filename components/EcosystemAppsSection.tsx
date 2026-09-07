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
    badgeStyle: "bg-[#eff4ff] text-[#305eff] border-[#d0ddfd]",
    href: "/school",
    icon: GraduationCap,
    iconBg: "bg-[#305eff] text-white",
  },
  {
    id: "store",
    name: "TCB Store SaaS",
    category: "Retail Inventory & POS",
    description: "Barcode stock master, GST invoicing, supplier ledgers & credit Udhar Khata.",
    badge: "Beta Workspace",
    badgeStyle: "bg-[#eff4ff] text-[#305eff] border-[#d0ddfd]",
    href: "/store",
    icon: Boxes,
    iconBg: "bg-[#305eff] text-white",
  },
  {
    id: "health",
    name: "TCB Health Cloud",
    category: "Healthcare & Clinic EHR",
    description: "Doctor OPD scheduler, patient medical records & pharmacy POS.",
    badge: "Coming Soon",
    badgeStyle: "bg-[#eff4ff] text-[#1f47e0] border-[#d0ddfd]",
    href: "/health",
    icon: Stethoscope,
    iconBg: "bg-[#305eff] text-white",
  },
  {
    id: "fitness",
    name: "TCB Fitness Suite",
    category: "Gym & Club Platform",
    description: "Biometric access control, trainer scheduling & automated monthly dues.",
    badge: "Coming Soon",
    badgeStyle: "bg-[#eff4ff] text-[#1f47e0] border-[#d0ddfd]",
    href: "/fitness",
    icon: Dumbbell,
    iconBg: "bg-[#305eff] text-white",
  },
  {
    id: "hotel",
    name: "TCB Stay & Desk",
    category: "Hospitality & Hotel Desk",
    description: "Room reservation engine, guest check-in/out & housekeeping billing.",
    badge: "Coming Soon",
    badgeStyle: "bg-[#eff4ff] text-[#1f47e0] border-[#d0ddfd]",
    href: "/hotel",
    icon: Hotel,
    iconBg: "bg-[#305eff] text-white",
  },
  {
    id: "dine",
    name: "TCB Dine POS",
    category: "Restaurant & Kitchen KOT",
    description: "Contactless QR table menu ordering & kitchen display sync.",
    badge: "Coming Soon",
    badgeStyle: "bg-[#eff4ff] text-[#1f47e0] border-[#d0ddfd]",
    href: "/dine",
    icon: Utensils,
    iconBg: "bg-[#305eff] text-white",
  },
];

export default function EcosystemAppsSection() {
  return (
    <section id="ecosystem-apps" className="relative overflow-hidden border-t border-slate-200/60 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      
      {/* Radial Background Accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        
        {/* Compact Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d0ddfd] bg-[#eff4ff] px-4 py-1 text-xs font-bold text-[#305eff] shadow-xs">
            <Layers className="h-3.5 w-3.5 text-[#305eff]" />
            TCB Micro-SaaS Product Portfolio
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Specialized SaaS Solutions <span className="bg-gradient-to-r from-[#305eff] via-[#1f47e0] to-[#305eff] bg-clip-text text-transparent">Engineered by Our Studio</span>
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            We build custom AI agents &amp; automations tailored to your specific business requirements. Explore pre-engineered vertical frameworks:
          </p>
        </div>

        {/* Unified Compact Product Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAAS_PRODUCTS.map((prod) => {
            const IconComp = prod.icon;
            return (
              <Link
                key={prod.id}
                href={prod.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-400 hover:shadow-md active:scale-[0.99]"
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
                  <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
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
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-brand-700 group-hover:text-brand-800">
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
