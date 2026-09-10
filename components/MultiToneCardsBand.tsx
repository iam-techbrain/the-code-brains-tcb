"use client";

import { motion } from "motion/react";
import { ArrowRight, Cloud, Code2, Lock, Activity } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

const FOUR_CARDS = [
  {
    icon: Cloud,
    title: "Private Cloud Deployment",
    desc: "Deployments run directly on your own AWS EC2 / VPS environment with zero recurring agency hosting markups.",
    bgClass: "bg-[#06192b] text-white",
    btnClass: "text-[#38bdf8] hover:text-white",
    borderClass: "border-white/10",
  },
  {
    icon: Code2,
    title: "100% Source Code Handover",
    desc: "Complete Git repository handover including Docker scripts, n8n JSON workflows, and fine-tuned prompt templates.",
    bgClass: "bg-[#0066cc] text-white",
    btnClass: "text-white hover:underline",
    borderClass: "border-blue-400/30",
  },
  {
    icon: Lock,
    title: "Zero Vendor Lock-in",
    desc: "Direct API key ownership with OpenAI, Anthropic, Twilio & Meta. Your business owns 100% of all data and intellectual property.",
    bgClass: "bg-[#004d99] text-white",
    btnClass: "text-sky-200 hover:text-white",
    borderClass: "border-blue-500/30",
  },
  {
    icon: Activity,
    title: "Real-Time Telemetry & SLA",
    desc: "Comprehensive LangSmith and OpenTelemetry monitoring with dedicated senior solutions architect SLA support.",
    bgClass: "bg-[#0c2236] text-white",
    btnClass: "text-[#38bdf8] hover:text-white",
    borderClass: "border-white/10",
  },
];

export default function MultiToneCardsBand() {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066cc]">
            ENGINEERING STANDARDS
          </span>
          <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Enterprise foundation built for scale and security
          </h2>
        </motion.div>

        {/* 4 Multi-Tone Cards Grid matching Reference Image with Motion */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-shadow ${card.bgClass} border ${card.borderClass}`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 mb-6 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed opacity-90">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15">
                  <button
                    type="button"
                    onClick={() =>
                      openLeadModal({
                        title: `Enterprise Details: ${card.title}`,
                        source: `Multi-Tone Band - ${card.title}`,
                        defaultNote: `Inquiring about ${card.title} specifications.`,
                      })
                    }
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${card.btnClass} group`}
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
