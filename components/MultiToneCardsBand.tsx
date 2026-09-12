"use client";

import { motion } from "motion/react";
import { ArrowRight, Cloud, Code2, Lock, Activity, Sparkles } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

const FOUR_CARDS = [
  {
    icon: Cloud,
    title: "Private Cloud Deployment",
    desc: "Deployments run directly on your own AWS EC2 / VPS environment with zero recurring agency hosting markups.",
    badge: "AWS / GCP VPC",
  },
  {
    icon: Code2,
    title: "100% Source Code Handover",
    desc: "Complete Git repository handover including Docker scripts, n8n JSON workflows, and fine-tuned prompt templates.",
    badge: "Full IP Ownership",
  },
  {
    icon: Lock,
    title: "Zero Vendor Lock-in",
    desc: "Direct API key ownership with OpenAI, Anthropic, Twilio & Meta. Your business owns 100% of all data and intellectual property.",
    badge: "Zero Margin Markup",
  },
  {
    icon: Activity,
    title: "Real-Time Telemetry & SLA",
    desc: "Comprehensive LangSmith and OpenTelemetry monitoring with dedicated senior solutions architect SLA support.",
    badge: "99.9% Uptime SLA",
  },
];

export default function MultiToneCardsBand() {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
            <span>ENGINEERING STANDARDS</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Enterprise foundation built for scale and security
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Engineered to enterprise standards with strict governance, data isolation, and total autonomy.
          </p>
        </motion.div>

        {/* 4 Clean White Cards Grid with Subtle Secondary Borders */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-xs hover:border-[#305eff]/40 hover:shadow-2xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#305eff] border border-blue-100 group-hover:bg-[#305eff] group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#305eff] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#305eff] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() =>
                      openLeadModal({
                        title: `Enterprise Details: ${card.title}`,
                        source: `Multi-Tone Band - ${card.title}`,
                        defaultNote: `Inquiring about ${card.title} specifications.`,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#305eff] hover:text-[#1f47e0] transition-all cursor-pointer group"
                  >
                    <span>Explore details</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
