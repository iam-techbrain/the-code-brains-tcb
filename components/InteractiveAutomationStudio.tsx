"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Terminal,
  ArrowRight,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

type Scenario = {
  id: string;
  title: string;
  badge: string;
  triggerName: string;
  triggerType: string;
  steps: {
    name: string;
    tech: string;
    latency: string;
    desc: string;
  }[];
  logs: string[];
  metrics: {
    speed: string;
    accuracy: string;
    monthlySavings: string;
    eventsPerHour: string;
  };
};

const SCENARIOS: Scenario[] = [
  {
    id: "voice",
    title: "Scenario 01: Autonomous Voice Telephony",
    badge: "Sub-350ms Latency",
    triggerName: "Inbound Customer Call (+1 415-890-XXXX)",
    triggerType: "Twilio SIP Trunk",
    steps: [
      { name: "Streaming STT", tech: "Deepgram Nova-2", latency: "74ms", desc: "Real-time acoustic transcribing" },
      { name: "RAG & Guardrails", tech: "Pinecone + LangChain", latency: "38ms", desc: "Private context retrieval" },
      { name: "Intent Reasoning", tech: "Claude 3.5 / GPT-4o", latency: "142ms", desc: "Contextual decision engine" },
      { name: "Voice Synthesis", tech: "ElevenLabs Turbo v2", latency: "62ms", desc: "Ultra-natural speech audio" },
      { name: "CRM Handshake", tech: "HubSpot / Salesforce", latency: "28ms", desc: "Automatic ticket & call log" },
    ],
    logs: [
      "[00:00.074] SIP_STREAM: Inbound audio frame received via Twilio SIP trunk",
      "[00:00.112] STT_NOVA2: Speech transcribed: 'Need to reschedule today's enterprise demo'",
      "[00:00.150] RAG_VAULT: Vector lookup returned matched calendar ID #CAL-8842 (cos=0.984)",
      "[00:00.292] LLM_CORE: Intent parsed -> 'APPOINTMENT_RESCHEDULE', slot found: Thursday 3 PM PST",
      "[00:00.354] TTS_SYNTH: Synthesizing voice response with warm executive tonality",
      "[00:00.382] SYNC_COMPLETE: Google Calendar & HubSpot record #LD-9912 updated automatically",
    ],
    metrics: {
      speed: "316ms",
      accuracy: "99.8%",
      monthlySavings: "$12,400/mo",
      eventsPerHour: "1,200 calls",
    },
  },
  {
    id: "workflow",
    title: "Scenario 02: Multi-ERP & Invoice Reconciliation",
    badge: "Zero-Touch Pipeline",
    triggerName: "New Vendor Invoice Received (PDF Attachment)",
    triggerType: "Webhook / Gmail API",
    steps: [
      { name: "Doc Ingestion", tech: "FastAPI + AWS S3", latency: "42ms", desc: "Virus scan & secure vault upload" },
      { name: "Layout OCR", tech: "AWS Textract + Claude 3.5", latency: "210ms", desc: "Line-item & tax validation" },
      { name: "PO Verification", tech: "PostgreSQL Database", latency: "18ms", desc: "Cross-checks open purchase orders" },
      { name: "ERP Mutation", tech: "SAP / QuickBooks API", latency: "65ms", desc: "Commits journal ledger entry" },
      { name: "Slack Alert", tech: "Slack Block Kit Webhook", latency: "14ms", desc: "Notifies finance CFO channel" },
    ],
    logs: [
      "[00:00.042] WEBHOOK_EVENT: Received payload from accounts@vendorcorp.com with 3-page PDF",
      "[00:00.252] OCR_EXTRACT: Extracted PO #PO-99104, Subtotal: $48,250.00, Tax: $4,101.25",
      "[00:00.270] DB_LOOKUP: Verified purchase authorization signed by VP Finance",
      "[00:00.335] ERP_SYNC: Generated ledger transaction #TXN-77218 in SAP Business One",
      "[00:00.349] AUDIT_TRAIL: Cryptographic receipt hash written to compliance archive log",
    ],
    metrics: {
      speed: "349ms",
      accuracy: "100%",
      monthlySavings: "$18,500/mo",
      eventsPerHour: "4,500 invoices",
    },
  },
  {
    id: "rag",
    title: "Scenario 03: 24/7 Enterprise RAG Knowledge Vault",
    badge: "Hallucination-Free",
    triggerName: "Complex Technical Customer Query (Omnichannel)",
    triggerType: "Zendesk Webhook",
    steps: [
      { name: "Hybrid Embedding", tech: "Cohere Embed-v3", latency: "22ms", desc: "Dense + sparse semantic vectorization" },
      { name: "Vector Search", tech: "Pinecone / Qdrant", latency: "34ms", desc: "Top-k nearest neighbor lookup" },
      { name: "Reranker Stage", tech: "Cohere Rerank v3", latency: "41ms", desc: "Precision relevancy filtration" },
      { name: "Synthesizer", tech: "GPT-4o Mini + Guardrails", latency: "170ms", desc: "Deterministic answers with citations" },
      { name: "Omni Dispatch", tech: "Zendesk & Intercom", latency: "28ms", desc: "Sends verified solution to user" },
    ],
    logs: [
      "[00:00.022] INGEST_QUERY: 'What is the maximum payload limit for EU-Central cluster Kafka queue?'",
      "[00:00.056] VECTOR_SEARCH: Retrieved 12 candidate chunks from Tenant #492 Documentation Vault",
      "[00:00.097] RERANKER: Filtered to top 2 authoritative sections with confidence score = 0.994",
      "[00:00.267] LLM_REASON: Synthesizing exact response referencing Section 4.2 of Architecture Manual",
      "[00:00.295] DISPATCH_DONE: Answer delivered via Zendesk ticket #TK-4819 with 2 direct link citations",
    ],
    metrics: {
      speed: "295ms",
      accuracy: "99.9%",
      monthlySavings: "$9,800/mo",
      eventsPerHour: "25,000 queries",
    },
  },
];

export default function InteractiveAutomationStudio() {
  const { openLeadModal } = useLeadModal();
  const [activeScenarioId, setActiveScenarioId] = useState<string>("voice");
  const [activeStep, setActiveStep] = useState<number>(2);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  // Auto-cycle through the 5 steps continuously for high-energy motion
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(timer);
  }, [activeScenarioId]);

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-y border-slate-200/80">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-5xl bg-[radial-gradient(ellipse_at_center,rgba(48,94,255,0.06),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#305eff] uppercase tracking-widest mb-4 shadow-2xs"
          >
            <span className="inline-flex rounded-full h-2 w-2 bg-[#305eff] shrink-0" />
            <span>ENTERPRISE COMMAND CENTER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-display"
          >
            The Autonomous AI Orchestration Matrix
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Witness how our intent-driven multi-agent architecture executes mission-critical business workflows with sub-second latency and zero human error.
          </motion.p>
        </div>

        {/* Interactive Scenario Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-1 sm:px-0">
          {SCENARIOS.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <motion.button
                key={sc.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveScenarioId(sc.id);
                  setActiveStep(0);
                }}
                className={`relative px-3.5 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 sm:gap-2.5 ${
                  isActive
                    ? "bg-[#305eff] text-white shadow-md shadow-[#305eff]/25 border border-[#305eff]"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/80"
                }`}
              >
                <span>{sc.title}</span>
                <span
                  className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {sc.badge}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Live Visual Pipeline Node Graph Container (Clean White Card with Subtle Secondary Border) */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 border-b border-slate-100 gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-600">
                TRIGGER: <strong className="text-slate-900">{scenario.triggerName}</strong>
              </span>
              <span className="rounded bg-blue-50 border border-blue-200 text-[#305eff] px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold">
                {scenario.triggerType}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-mono text-slate-500">
              <span>● PROTOCOL: TLS 1.3</span>
              <span>● ENCRYPTION: AES-256</span>
              <span className="text-emerald-600 font-bold">● HEALTH: 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Connected 5-Node Interactive Pathway */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {scenario.steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Node Card */}
                  <motion.div
                    onClick={() => setActiveStep(idx)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full rounded-2xl p-4 sm:p-5 transition-all cursor-pointer border text-left flex flex-col justify-between min-h-[145px] relative ${
                      isCurrent
                        ? "bg-blue-50/80 border-[#305eff] shadow-lg shadow-[#305eff]/15 scale-102"
                        : isPassed
                        ? "bg-slate-50 border-slate-200 text-slate-800"
                        : "bg-white border-slate-200/80 text-slate-500"
                    }`}
                  >
                    {isCurrent && (
                      <span className="absolute -top-2.5 right-3 bg-[#305eff] text-white font-extrabold text-[9px] uppercase px-2.5 py-0.5 rounded-full shadow-2xs">
                        Active Node
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          NODE 0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-[#305eff] font-bold">
                          {step.latency}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {step.name}
                      </h4>
                      <div className="mt-1 text-[11px] font-semibold text-[#305eff]">
                        {step.tech}
                      </div>
                    </div>

                    <p className="mt-3 text-[10px] text-slate-600 leading-tight">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Horizontal Connecting Arrow / Indicator for Desktop */}
                  {idx < 4 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-[#305eff] pointer-events-none">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Execution Telemetry: Real-time Terminal Log & Performance Gauges */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 border-t border-slate-100">
            {/* Live Developer Terminal Log */}
            <div className="lg:col-span-8 rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-[#305eff]" />
                  <span>LIVE EXECUTION STREAM (JSON-RPC)</span>
                </div>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  STREAM ACTIVE
                </span>
              </div>

              <div className="space-y-2 overflow-x-auto no-scrollbar text-[10px] sm:text-[11px] leading-relaxed font-mono">
                {scenario.logs.map((log, lIdx) => (
                  <div
                    key={lIdx}
                    className={`p-1 rounded transition-colors whitespace-pre-wrap sm:whitespace-normal break-words ${
                      lIdx === activeStep ? "text-cyan-300 font-bold bg-white/10 px-2 py-0.5" : "text-slate-400"
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Gauges */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3.5 flex flex-col justify-between hover:border-[#305eff]/40 transition-all">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">End-to-End Speed</span>
                  <div className="text-2xl font-black text-slate-900 font-mono">{scenario.metrics.speed}</div>
                  <span className="text-[9px] text-emerald-600 font-semibold">⚡ 94% faster than human</span>
                </div>

                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3.5 flex flex-col justify-between hover:border-[#305eff]/40 transition-all">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Intent Precision</span>
                  <div className="text-2xl font-black text-[#305eff] font-mono">{scenario.metrics.accuracy}</div>
                  <span className="text-[9px] text-slate-500">Zero-hallucination</span>
                </div>

                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3.5 flex flex-col justify-between hover:border-[#305eff]/40 transition-all">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Client Cost Saved</span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">{scenario.metrics.monthlySavings}</div>
                  <span className="text-[9px] text-slate-500">Direct labor offset</span>
                </div>

                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3.5 flex flex-col justify-between hover:border-[#305eff]/40 transition-all">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Throughput Scale</span>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">{scenario.metrics.eventsPerHour}</div>
                  <span className="text-[9px] text-[#305eff] font-medium">Auto-scaling VPS</span>
                </div>
              </div>

              {/* Consultation Trigger Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  openLeadModal({
                    title: `Deploy: ${scenario.title}`,
                    source: `Interactive Studio - ${scenario.title}`,
                    defaultNote: `Interested in deploying this architecture pipeline for my business.`,
                  })
                }
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#305eff] hover:bg-[#1f47e0] py-3 text-xs font-bold text-white shadow-md shadow-[#305eff]/20 transition-all cursor-pointer"
              >
                <span>Deploy This Architecture on Your Cloud</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
