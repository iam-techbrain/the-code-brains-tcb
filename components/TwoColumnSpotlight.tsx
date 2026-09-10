"use client";

import { motion } from "motion/react";
import { ArrowRight, Workflow, PhoneCall, CheckCircle2, Zap, Server, Shield } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function TwoColumnSpotlight() {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="orchestration-portfolio" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Headline matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight font-display">
            TCB Orchestration portfolio: tailored for complex multi-vendor &amp; enterprise environments
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Eliminate operational silos and vendor lock-in with unified autonomous agents engineered specifically for your infrastructure.
          </p>
        </motion.div>

        {/* Dual Side-by-Side Dark Feature Cards (Matches Reference Image) */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Dark Card 1: Deep Navy - Multi-Domain Service Orchestration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#071f34] p-8 sm:p-10 text-white shadow-xl hover:shadow-2xl transition-shadow"
          >
            {/* Subtle glow ambient */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#0066cc]/25 blur-3xl" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#38bdf8] border border-white/10">
                  <Workflow className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-[#38bdf8] border border-white/10">
                  Multi-Domain
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl font-display">
                Multi-Domain Service Orchestration (MDSO)
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                End-to-end orchestration that abstracts fragmented underlying APIs, databases, CRM systems, and cloud environments into unified, autonomous workflows.
              </p>

              {/* High-Tech Animated Node Telemetry Strip */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3.5 text-xs font-mono">
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE PIPELINE SYNC
                  </span>
                  <span>99.98% SLA</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 gap-2 overflow-x-auto text-[11px]">
                  <span className="bg-white/10 px-2 py-0.5 rounded text-white font-bold">HubSpot</span>
                  <span className="text-[#38bdf8]">⟷</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-[#38bdf8] font-bold">n8n Bus</span>
                  <span className="text-[#38bdf8]">⟷</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-white font-bold">PostgreSQL</span>
                  <span className="text-[#38bdf8]">⟷</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-emerald-400 font-bold">AWS Lambda</span>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {[
                  "Bi-directional CRM & ERP synchronizations (HubSpot, Salesforce, Zoho)",
                  "Resilient n8n & Make event-driven pipelines with error auto-healing",
                  "Automated document processing, invoice OCR & payment verification",
                  "Direct AWS Cloud VPS deployment with 100% full source code ownership",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: "Multi-Domain Service Orchestration",
                    source: "Dark Card Spotlight - MDSO",
                    planName: "Multi-Domain Service Orchestration (MDSO)",
                    defaultNote: "Inquiring about multi-domain workflow orchestration across internal systems.",
                  })
                }
                className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] hover:bg-[#0052a3] px-6 py-3 text-xs font-bold text-white shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore MDSO Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Dark Card 2: Charcoal Slate Navy - Autonomous Voice AI Telephony */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#11263c] p-8 sm:p-10 text-white shadow-xl hover:shadow-2xl transition-shadow"
          >
            {/* Subtle glow ambient */}
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#38bdf8]/15 blur-3xl" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#38bdf8] border border-white/10">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-[#38bdf8] border border-white/10">
                  Conversational AI
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl font-display">
                Autonomous Conversational Telephony &amp; Voice AI
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Low-latency voice agents that answer inbound support calls, dial outbound lead lists, converse with human-level natural prosody, and update records in real time.
              </p>

              {/* High-Tech Oscillating Audio Equalizer Visualizer */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-1 h-6 px-1">
                    <span className="w-1 bg-[#38bdf8] rounded-full wave-bar-1" />
                    <span className="w-1 bg-[#00c0f3] rounded-full wave-bar-2" />
                    <span className="w-1 bg-white rounded-full wave-bar-3" />
                    <span className="w-1 bg-[#38bdf8] rounded-full wave-bar-4" />
                    <span className="w-1 bg-[#00c0f3] rounded-full wave-bar-5" />
                    <span className="w-1 bg-white rounded-full wave-bar-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">STREAMING SYNTHESIS</div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>ElevenLabs Turbo + Deepgram</span>
                      <span className="rounded bg-emerald-500/20 text-emerald-400 text-[9px] px-1.5 font-mono">284ms</span>
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-mono text-[#38bdf8]">
                  ● LIVE SIP
                </span>
              </div>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {[
                  "Ultra-low latency speech pipeline (<350ms response turnaround)",
                  "Custom voice synthesis powered by ElevenLabs, Deepgram & Twilio SIP",
                  "Automated appointment booking, calendar sync & live human warm transfer",
                  "Full post-call transcription, sentiment scoring & CRM record updates",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: "Voice Calling Telephony Architecture",
                    source: "Dark Card Spotlight - Voice Telephony",
                    planName: "Autonomous Conversational Telephony",
                    defaultNote: "Inquiring about low-latency voice agent telephony deployment.",
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3 text-xs font-bold text-white transition-all active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <span>Explore Telephony Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
