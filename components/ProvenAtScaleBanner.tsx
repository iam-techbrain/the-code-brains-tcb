"use client";

import { motion } from "motion/react";

export default function ProvenAtScaleBanner() {
  const stats = [
    {
      value: "85%",
      label: "Faster workflow execution and customer response turnaround",
      color: "text-white",
    },
    {
      value: "90%",
      label: "Reduction in manual data-entry and operational coordination errors",
      color: "text-[#38bdf8]",
    },
    {
      value: "50%+",
      label: "Lower operational overhead through autonomous workflow orchestration",
      color: "text-white",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07243e] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-white border-y border-white/10">
      {/* Background radial gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-full max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(0,192,243,0.12),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl text-center">
        {/* Eyebrow & Title matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8]">
            PROVEN AT SCALE
          </span>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl max-w-2xl mx-auto">
            Delivering real operational savings to enterprise customers globally
          </h2>
        </motion.div>

        {/* 3 Massive Metric Columns (Matches Reference Image) with Motion Scale */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              className={`flex flex-col items-center ${idx < 2 ? "border-b border-white/10 pb-8 sm:border-b-0 sm:pb-0" : ""}`}
            >
              <div className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight ${stat.color} font-display`}>
                {stat.value}
              </div>
              <p className="mt-3 text-xs sm:text-sm font-medium text-slate-300 max-w-xs leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
