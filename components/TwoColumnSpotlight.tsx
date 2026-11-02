"use client";

import { motion } from "motion/react";
import { ArrowRight, Workflow, PhoneCall, CheckCircle2, Zap } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function TwoColumnSpotlight() {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="automations" className="relative scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b border-slate-200/80">
      <div id="orchestration-portfolio" className="absolute -top-24" />
      <div className="mx-auto max-w-7xl">
        {/* Section Headline matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-12"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff]">
            <Zap className="h-3.5 w-3.5 text-[#305eff]" />
            <span>ENTERPRISE AUTOMATIONS &amp; ORCHESTRATION</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight font-display">
            Automations &amp; Orchestration Portfolio: Tailored for Complex Enterprise Environments
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Eliminate operational silos and vendor lock-in with unified autonomous agents engineered specifically for your infrastructure.
          </p>
        </motion.div>

        {/* Dual Side-by-Side Clean White Feature Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card 1: Multi-Domain Service Orchestration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 sm:p-10 text-slate-900 border border-slate-200/90 shadow-xs hover:border-[#305eff]/40 hover:shadow-2xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#305eff] border border-blue-100 group-hover:bg-[#305eff] group-hover:text-white transition-colors duration-200">
                  <Workflow className="h-6 w-6" />
                </span>
                <span className="relative z-10 inline-flex items-center rounded-full bg-[#eff4ff] px-3.5 py-1 text-[11px] font-extrabold tracking-wider uppercase text-[#305eff] border border-[#305eff]/30 shadow-2xs">
                  Workflow Automation
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl font-display group-hover:text-[#305eff] transition-colors">
                End-to-End Workflow &amp; Multi-App Automation
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Connect your CRMs, databases, spreadsheets, and cloud software into unified, autonomous workflows that run 24/7 without manual data entry.
              </p>

              {/* High-Tech Light Node Telemetry Strip */}
              <div className="mt-6 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 text-xs font-mono">
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2.5">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    LIVE PIPELINE SYNC
                  </span>
                  <span className="font-semibold text-slate-600">99.98% SLA</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 gap-2 overflow-x-auto text-[11px] py-1">
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md text-slate-800 font-bold shadow-2xs">HubSpot</span>
                  <span className="text-[#305eff] font-bold">⟷</span>
                  <span className="bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md text-[#305eff] font-bold shadow-2xs">n8n Bus</span>
                  <span className="text-[#305eff] font-bold">⟷</span>
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md text-slate-800 font-bold shadow-2xs">PostgreSQL</span>
                  <span className="text-[#305eff] font-bold">⟷</span>
                  <span className="bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md text-emerald-700 font-bold shadow-2xs">AWS Lambda</span>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                {[
                  "Complex multi-system automations using Zapier & Make (Integromat) to solve deep edge cases",
                  "Bi-directional platform & Google Sheets synchronization with live sales analytics & alerts",
                  "Automated WhatsApp Business workflows for instant client engagement and lead routing",
                  "Direct cloud deployment with 100% full source code and API account ownership",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#305eff] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: "Workflow & Multi-App Automation",
                    source: "Card Spotlight - Workflow Automation",
                    planName: "End-to-End Workflow & Multi-App Automation",
                    defaultNote: "Inquiring about automated workflows connecting our CRMs, databases, and apps.",
                  })
                }
                className="inline-flex items-center gap-2 rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#305eff]/20 transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore Workflow Automation</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Autonomous Voice AI Telephony */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 sm:p-10 text-slate-900 border border-slate-200/90 shadow-xs hover:border-[#305eff]/40 hover:shadow-2xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#305eff] border border-blue-100 group-hover:bg-[#305eff] group-hover:text-white transition-colors duration-200">
                  <PhoneCall className="h-6 w-6" />
                </span>
                <span className="relative z-10 inline-flex items-center rounded-full bg-[#eff4ff] px-3.5 py-1 text-[11px] font-extrabold tracking-wider uppercase text-[#305eff] border border-[#305eff]/30 shadow-2xs">
                  Conversational AI
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl font-display group-hover:text-[#305eff] transition-colors">
                Autonomous Conversational Telephony &amp; Voice AI
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Low-latency voice agents that answer inbound support calls, dial outbound lead lists, converse with human-level natural prosody, and update records in real time.
              </p>

              {/* High-Tech Light Oscillating Audio Equalizer Visualizer */}
              <div className="mt-6 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-1 h-6 px-1">
                    <span className="w-1 bg-[#305eff] rounded-full wave-bar-1" />
                    <span className="w-1 bg-[#305eff] rounded-full wave-bar-2" />
                    <span className="w-1 bg-[#305eff] rounded-full wave-bar-3" />
                    <span className="w-1 bg-[#305eff] rounded-full wave-bar-4" />
                    <span className="w-1 bg-[#305eff] rounded-full wave-bar-5" />
                    <span className="w-1 bg-[#305eff] rounded-full wave-bar-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">STREAMING SYNTHESIS</div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                      <span>ElevenLabs Turbo + Deepgram</span>
                      <span className="rounded bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 font-mono font-bold">284ms</span>
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-white border border-slate-200 px-3 py-1 text-[10px] font-mono font-bold text-[#305eff] shadow-2xs">
                  ● LIVE SIP
                </span>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                {[
                  "Ultra-low latency speech pipeline (<350ms response turnaround)",
                  "Custom voice synthesis powered by ElevenLabs, Deepgram & Twilio SIP",
                  "Automated appointment booking, calendar sync & live human warm transfer",
                  "Full post-call transcription, sentiment scoring & CRM record updates",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#305eff] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: "Voice Calling Telephony Architecture",
                    source: "Card Spotlight - Voice Telephony",
                    planName: "Autonomous Conversational Telephony",
                    defaultNote: "Inquiring about low-latency voice agent telephony deployment.",
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 hover:border-[#305eff]/40 px-6 py-3 text-xs font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
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
