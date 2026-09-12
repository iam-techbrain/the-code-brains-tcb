"use client";

import { ShieldCheck, Cloud, Award, Lock, CheckCircle2, Zap, Server } from "lucide-react";

export default function TrustBadgesTicker() {
  const badges = [
    { title: "ABDM Compliant", desc: "Ayushman Bharat M1/M2/M3", icon: ShieldCheck, color: "text-brand-500" },
    { title: "AWS Cloud 99.95%", desc: "High Availability & Uptime", icon: Cloud, color: "text-brand-500" },
    { title: "256-bit Encryption", desc: "HIPAA Grade Compliance", icon: Lock, color: "text-brand-500" },
    { title: "41+ Live Deployments", desc: "Verified Production Workflows", icon: CheckCircle2, color: "text-brand-500" },
    { title: "Real-Time Sync", desc: "Sheets, CRMs & Voice Bots", icon: Zap, color: "text-brand-500" },
    { title: "Automated Daily Backups", desc: "Zero Data Loss Guarantee", icon: Server, color: "text-brand-500" },
  ];

  // Duplicate 4x for seamless infinite loop on ultra-wide & zoomed-out screens
  const displayBadges = [...badges, ...badges, ...badges, ...badges];

  return (
    <section className="logo-strip-container">
      <div className="logo-strip">
        {displayBadges.map((badge, idx) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={idx}
              className="mx-4 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-2.5 shadow-xs transition-all hover:border-brand-500/50 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 border border-brand-100">
                <IconComponent className="h-5 w-5 text-brand-500" />
              </div>
              <div className="whitespace-nowrap">
                <div className="text-xs font-bold text-slate-900">{badge.title}</div>
                <div className="text-[10px] font-medium text-slate-500">{badge.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

