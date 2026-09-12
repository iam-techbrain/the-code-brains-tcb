"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Workflow,
  Cpu,
  Code2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

type RoadmapStep = {
  num: string;
  badge: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
  icon: any;
  align: "left" | "right";
};

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    num: "1",
    badge: "Phase 01: Audit & Strategy",
    title: "Discovery & Strategic Workflow Audit",
    timeline: "Days 1–2",
    description:
      "We examine your operational bottlenecks, lead qualification gaps, legacy databases, and manual data entry tasks to engineer a precise architectural blueprint.",
    deliverables: [
      "Process discovery with senior AI solutions architect",
      "API topology & data residency security review",
      "ROI projection & technical feasibility specification",
    ],
    icon: Workflow,
    align: "left",
  },
  {
    num: "2",
    badge: "Phase 02: Architecture & Logic",
    title: "Custom Agent & Flow Architecture Blueprint",
    timeline: "Days 3–5",
    description:
      "Our architects design deterministic state machines, vector embedding chunking strategies, and strict constitutional guardrails to eliminate hallucination.",
    deliverables: [
      "Multi-agent state machine diagram & LangGraph schemas",
      "Vector search index schema (Pinecone / Qdrant)",
      "Zero-data-retention enterprise compliance mapping",
    ],
    icon: Cpu,
    align: "right",
  },
  {
    num: "3",
    badge: "Phase 03: Pro-Code Engineering",
    title: "Rapid Pro-Code & Node Development",
    timeline: "Days 6–10",
    description:
      "We code high-concurrency Python/FastAPI microservices, n8n orchestration pipelines, and ultra-low-latency voice telephony streaming runtimes.",
    deliverables: [
      "Custom voice telephony integration (<350ms Twilio/ElevenLabs)",
      "Bi-directional CRM & ERP synchronizations (HubSpot, Salesforce)",
      "Automated PDF invoice & document OCR parsing workers",
    ],
    icon: Code2,
    align: "left",
  },
  {
    num: "4",
    badge: "Phase 04: Validation & Private Cloud",
    title: "Adversarial Testing & Private Cloud Deployment",
    timeline: "Days 11–13",
    description:
      "We stress-test the agents with adversarial edge-case inputs, verify zero-hallucination accuracy against production data, and deploy to your AWS VPC.",
    deliverables: [
      "Automated integration test suites & latency benchmarks",
      "Direct deployment to your private AWS EC2 / Lambda VPC",
      "Isolated tenant encryption & OpenTelemetry tracing",
    ],
    icon: ShieldCheck,
    align: "right",
  },
  {
    num: "5",
    badge: "Phase 05: Ownership & Scale",
    title: "100% Source Code Handover & Team Onboarding",
    timeline: "Day 14 & Ongoing",
    description:
      "We transfer all Git repositories, Docker manifests, and API keys directly to your organization. Complete IP ownership with zero recurring agency markups.",
    deliverables: [
      "Complete Git repository & Docker deployment handover",
      "Live operational documentation & executive team training",
      "Dedicated senior architect SLA & performance monitoring",
    ],
    icon: Zap,
    align: "left",
  },
];

export default function HowItWorks() {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
            Proven 5-Step Delivery Lifecycle
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-display"
          >
            Our 5-Step AI Automation Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            From your initial business operations audit to production launch on your private enterprise cloud in under 14 business days.
          </motion.p>
        </div>

        {/* 5-Step Winding Roadmap (Matches Reference Image Layout) */}
        <div className="relative max-w-4xl mx-auto space-y-12">
          {/* Central subtle vertical connecting line on mobile/desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 sm:left-1/2 top-10 bottom-10 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-blue-200"
          />

          {ROADMAP_STEPS.map((step, idx) => {
            const isRight = step.align === "right";
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 ${
                  isRight ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Big Step Number Badge in Center */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#305eff] to-[#1f47e0] text-white font-display font-black text-2xl sm:text-3xl shadow-lg shadow-[#305eff]/30 border-2 border-white">
                  {step.num}
                </div>

                {/* Content Card (Takes half width on desktop) */}
                <div className="w-full sm:w-[calc(50%-3rem)] pl-16 sm:pl-0">
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                    className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-[#305eff]/40 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#305eff] bg-blue-50 px-3 py-0.5 rounded-full border border-blue-200">
                        {step.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {step.timeline}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Key Deliverables:
                      </span>
                      {step.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty spacer for opposite side on desktop */}
                <div className="hidden sm:block w-[calc(50%-3rem)]" />
              </motion.div>
            );
          })}
        </div>

        {/* Roadmap Final CTA */}
        <div className="mt-16 text-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              openLeadModal({
                title: "Start Your AI Automation Roadmap",
                source: "How It Works 5-Step Roadmap CTA",
                defaultNote: "Ready to begin Phase 1: Strategic Architecture & Discovery Call.",
              })
            }
            className="inline-flex items-center gap-2 rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#305eff]/25 transition-all hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Begin Phase 01: Book Discovery Call</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
