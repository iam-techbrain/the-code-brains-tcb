"use client";

import { motion } from "motion/react";
import { ArrowRight, Quote, ShieldCheck, Sparkles } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function ExecutiveCredibilityRow() {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="proven-impact" className="bg-[#f8fafc] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b border-slate-200/80">
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
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#0066cc]">
              <Sparkles className="h-3.5 w-3.5 text-[#0066cc]" />
              <span>Proven Enterprise Agility</span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-4xl leading-tight">
              How enterprise leaders transform operational agility with TCB
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                Leading organizations deploy our custom autonomous agents and n8n workflows to compress complex multi-system operations from days down to sub-second automated executions.
              </p>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <Quote className="h-6 w-6 text-[#0066cc]/40 mb-2" />
                <p className="italic text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                  &ldquo;TCB engineered our autonomous voice qualification and invoice reconciliation workflows on our own AWS cloud. We eliminated 35+ hours of manual data entry weekly and achieved sub-350ms caller response times with zero vendor lock-in.&rdquo;
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Chief Operations Officer</span>
                  <span className="text-[#0066cc] font-semibold">NovaScale Commerce Group</span>
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
                className="inline-flex items-center justify-center rounded-full bg-[#0066cc] hover:bg-[#0052a3] px-6 py-3 text-xs font-bold text-white shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Trio of Leadership & Architect Portraits (Matches Reference Image) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Engineering Leadership &amp; Delivery Architects
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <ShieldCheck className="h-3 w-3 text-emerald-600" /> Verified Architects
                </span>
              </div>

              {/* Trio Image Grid Layout matching the Reference Image */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                {[
                  {
                    name: "Dr. Marcus Vance",
                    role: "Principal AI Architect",
                    exp: "12+ Yrs AI / LLMs",
                    bgGrad: "from-blue-600 to-indigo-700",
                    initials: "MV",
                  },
                  {
                    name: "Afzal & Team",
                    role: "Solutions Engineering Lead",
                    exp: "Full-Stack & Cloud",
                    bgGrad: "from-slate-800 to-slate-950",
                    initials: "AA",
                  },
                  {
                    name: "David Sterling",
                    role: "Head of Cloud Telephony",
                    exp: "Twilio & SIP Scale",
                    bgGrad: "from-sky-600 to-blue-800",
                    initials: "DS",
                  },
                ].map((member, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xs hover:shadow-md transition-shadow"
                  >
                    {/* Portrait Placeholder Card with Professional Gradient & Silhouette */}
                    <div className={`relative h-36 sm:h-44 w-full bg-gradient-to-t ${member.bgGrad} flex items-end justify-center pb-3 text-white overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                      <div className="relative z-10 flex flex-col items-center text-center px-1">
                        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-white/60 bg-white/20 backdrop-blur-sm flex items-center justify-center font-black text-lg sm:text-xl text-white shadow-md">
                          {member.initials}
                        </div>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="p-2.5 sm:p-3 bg-white flex-1 flex flex-col justify-between text-center">
                      <div>
                        <div className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">
                          {member.name}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                          {member.role}
                        </div>
                      </div>
                      <span className="mt-2 inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-extrabold text-slate-700">
                        {member.exp}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>⚡ Direct architect access on every project</span>
                <span className="text-slate-800 font-semibold">Zero junior handoffs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
