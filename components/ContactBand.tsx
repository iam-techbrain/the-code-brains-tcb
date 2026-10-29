"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";

export default function ContactBand() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-slate-200/80 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl items-stretch gap-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white text-slate-900 lg:grid-cols-2 shadow-xl"
      >
        <div className="px-6 py-8 sm:px-10 lg:px-14 lg:py-12 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff] mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
              <span>Contact & Consult TCB Studio</span>
            </div>
            <h2 className="font-display mt-2 sm:mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl text-slate-900 leading-tight">
              Contact Us: Ready to ship AI agents that run your work?
            </h2>
            <p className="mt-3 sm:mt-4 max-w-lg text-xs sm:text-sm leading-relaxed sm:leading-7 text-slate-600">
              Share your workflow, stack, and outcome. We design custom agents, n8n/Make pipelines, and industry SaaS — then deploy them on a reliable cloud foundation.
            </p>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
              {[
                "Discovery call in 24 hours",
                "Scoped proposal with timeline & stack",
                "Production-ready agents, not slideware",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-semibold">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#305eff] border border-blue-200">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="mailto:contact@thecodebrains.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#305eff] hover:bg-[#1f47e0] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#305eff]/25 transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>Start a project</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#ai-agents-catalog"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 transition-all"
            >
              Explore AI Agents
            </motion.a>
          </div>
        </div>

        <div className="relative hidden h-full min-h-[340px] lg:block border-l border-slate-100 bg-slate-50">
          <img
            src="/tcb-hero-ai-studio.png"
            alt="TCB AI studio visual"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
