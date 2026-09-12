"use client";

import { motion } from "motion/react";
import { Globe, Server, Eye } from "lucide-react";

const STRATEGIC_PILLARS = [
  {
    icon: Globe,
    title: "Rapid Time-to-Value",
    description:
      "Production-ready custom AI agents and enterprise orchestration pipelines architected and deployed to your private cloud in under 14 business days.",
  },
  {
    icon: Server,
    title: "Zero-Touch Operational Automation",
    description:
      "Autonomous event-driven pipelines handle lead qualification, invoice processing, CRM synchronization, and multi-channel follow-ups 24/7/365.",
  },
  {
    icon: Eye,
    title: "Predictive Telemetry & Full IP Ownership",
    description:
      "100% source code handover with complete Git repositories. Full observability, deterministic guardrails, and zero recurring agency platform markups.",
  },
];

export default function StrategicPillarsRow() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-14"
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Build a future-ready enterprise with intelligent automation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Eliminate operational friction and manual bottlenecks with enterprise-grade reliability and security.
          </p>
        </motion.div>

        {/* 3 Columns Layout with Crisp Blue Icons in Subtle Bordered Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="flex flex-col items-start group rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xs hover:border-[#305eff]/40 hover:shadow-xl transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#305eff] mb-6 transition-all duration-200 group-hover:scale-105 group-hover:bg-[#305eff] group-hover:text-white shadow-2xs">
                  <Icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#305eff] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
