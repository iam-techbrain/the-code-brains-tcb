"use client";

import { motion } from "motion/react";
import { ArrowRight, PhoneCall, Workflow, Database } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

const TRIO_ITEMS = [
  {
    icon: PhoneCall,
    title: "Autonomous Voice Telephony",
    description:
      "Deploy low-latency conversational AI agents for inbound customer reception, 24/7 lead qualification, and appointment setting via Twilio & ElevenLabs.",
    ctaText: "Explore Voice AI",
    modalSubject: "Autonomous Voice Telephony Agent",
  },
  {
    icon: Workflow,
    title: "Multi-System Workflow Orchestration",
    description:
      "Connect disparate CRMs, billing systems, Google Sheets, and databases with event-driven n8n and Make pipelines that eliminate manual data coordination.",
    ctaText: "View Workflows",
    modalSubject: "Enterprise Workflow Orchestration (n8n/Make)",
  },
  {
    icon: Database,
    title: "Enterprise RAG & Knowledge Vaults",
    description:
      "Transform private documents, contracts, and database tables into real-time vector search embeddings (Pinecone/Qdrant) for 100% hallucination-free accuracy.",
    ctaText: "Explore Knowledge RAG",
    modalSubject: "Enterprise RAG Vector Knowledge Vault",
  },
];

export default function SubHeroTrioCards() {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Accelerate your operational transformation with intelligent automation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Choose the right architecture path for your operational needs
          </p>
        </motion.div>

        {/* 3 Clean White Cards Row with Staggered Motion */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRIO_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-[#305eff]/40 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] mb-6 group-hover:bg-[#305eff] group-hover:text-white transition-colors duration-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#305eff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() =>
                      openLeadModal({
                        title: `Consultation: ${item.title}`,
                        source: `Trio Card - ${item.title}`,
                        planName: item.modalSubject,
                      })
                    }
                    className="inline-flex items-center justify-center rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
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
