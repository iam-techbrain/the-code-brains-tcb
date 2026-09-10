"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function DemoFloatWidget() {
  const { openLeadModal } = useLeadModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
      className="demo-float"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px -4px rgba(0, 102, 204, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          openLeadModal({
            title: "Book Free AI Consultation",
            source: "Floating Consultation Pill",
            planName: "Custom AI Architecture Review",
          })
        }
        className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-400/50 bg-[#0066cc] px-3.5 py-2.5 sm:px-4 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white shadow-xl shadow-[#0066cc]/30 backdrop-blur-md transition-colors hover:bg-[#0052a3] cursor-pointer"
      >
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-white"></span>
        </span>
        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
        <span>Book Consultation</span>
      </motion.button>
    </motion.div>
  );
}
