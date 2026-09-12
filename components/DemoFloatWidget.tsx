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
      className="demo-float hidden sm:block"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px -4px rgba(48, 94, 255, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          openLeadModal({
            title: "Book Free AI Consultation",
            source: "Floating Consultation Pill",
            planName: "Custom AI Architecture Review",
          })
        }
        className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-400/50 bg-[#305eff] px-3.5 py-2.5 sm:px-4 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white shadow-xl shadow-[#305eff]/30 backdrop-blur-md transition-colors hover:bg-[#1f47e0] cursor-pointer"
      >
        <span className="inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-white shrink-0" />
        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
        <span>Book Consultation</span>
      </motion.button>
    </motion.div>
  );
}
