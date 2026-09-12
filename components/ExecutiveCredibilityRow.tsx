"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Quote, ShieldCheck, Sparkles, Cpu, Zap } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function ExecutiveCredibilityRow() {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="proven-impact" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Narrative & Metrics (Matches Reference Image) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#305eff]">
              <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
              <span>Proven Enterprise Agility</span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-4xl leading-tight">
              How enterprise leaders transform operational agility with TCB
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                Leading businesses deploy our custom AI agents, WhatsApp automations, and Zapier &amp; Make pipelines to eliminate repetitive manual bottlenecks and solve complex integration challenges.
              </p>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#305eff]/40 hover:shadow-md transition-all">
                <Quote className="h-6 w-6 text-[#305eff]/40 mb-2" />
                <p className="italic text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                  &ldquo;TCB engineered our automated phone qualification, WhatsApp lead dispatch, and Google Sheets sales tracking pipelines. We eliminated 30+ hours of manual follow-ups weekly, and complex edge cases across our software were solved seamlessly.&rdquo;
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Operations Director</span>
                  <span className="text-[#305eff] font-semibold">Verified Client Partner</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: "Explore Enterprise Case Studies",
                    source: "Executive Credibility Spotlight CTA",
                    defaultNote: "Requesting detailed ROI blueprints and relevant case studies.",
                  })
                }
                className="inline-flex items-center justify-center rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#305eff]/20 transition-all active:scale-95 cursor-pointer"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Holographic AI Command Console + Delivery Architects */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xl hover:border-[#305eff]/40 transition-all">
              {/* Card Header */}
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-mono font-bold text-slate-800">
                    Holographic AI Command Console
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live Supervisory Mesh
                </span>
              </div>

              {/* Holographic GIF Showcase Screen */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-950 flex items-center justify-center aspect-[16/10] max-h-[300px] sm:max-h-[340px] shadow-inner group">
                <Image
                  src="/A%20Man%20with%20VR%20headset%20touches%20a%20holographic%20screen.gif"
                  alt="A Man with VR headset touches a holographic screen"
                  width={480}
                  height={298}
                  unoptimized
                  priority
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle futuristic scanline & vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />

                {/* Floating telemetry HUD badge 1: Top-Right */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-3 right-3 rounded-full border border-white/20 bg-slate-950/70 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold text-blue-300 shadow-lg flex items-center gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#305eff]" />
                  <span>Sub-350ms Neural Sync</span>
                </motion.div>

                {/* Floating telemetry HUD badge 2: Bottom-Left */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute bottom-3 left-3 rounded-2xl border border-white/20 bg-slate-950/70 backdrop-blur-md p-2 sm:p-2.5 text-left text-white shadow-lg flex items-center gap-2.5"
                >
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-xl bg-[#305eff]/40 border border-[#305eff]/60 flex items-center justify-center text-[#305eff]">
                    <Cpu className="h-4 w-4 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Human-in-the-Loop</div>
                    <div className="text-[9px] font-mono text-cyan-300/90">Autonomous Swarm Oversight</div>
                  </div>
                </motion.div>
              </div>

              {/* Delivery Architects Strip */}
              <div className="mt-4 pt-3.5 border-t border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Delivery Architects &amp; Engineering Leads
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                    <ShieldCheck className="h-3 w-3 text-emerald-600" /> Verified Architects
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { name: "Dr. Marcus Vance", role: "Principal AI", exp: "12+ Yrs LLMs" },
                    { name: "Afzal & Team", role: "Solutions Lead", exp: "Cloud & Ops" },
                    { name: "David Sterling", role: "Voice Telephony", exp: "SIP Trunking" },
                  ].map((lead, lIdx) => (
                    <div
                      key={lIdx}
                      className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 sm:p-2 flex items-center justify-between sm:flex-col sm:text-center"
                    >
                      <div className="text-left sm:text-center">
                        <div className="text-xs sm:text-[11px] font-bold text-slate-900">{lead.name}</div>
                        <div className="text-[10px] sm:text-[9px] text-[#305eff] font-semibold">{lead.role}</div>
                      </div>
                      <div className="text-[10px] sm:text-[9px] font-mono text-slate-500 sm:mt-0.5">{lead.exp}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Zap className="h-3.5 w-3.5 text-[#305eff]" />
                    <span>Direct architect access on every build</span>
                  </span>
                  <span className="text-slate-800 font-semibold font-mono text-[11px]">100% Code Ownership</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
