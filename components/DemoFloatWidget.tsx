"use client";

import { Sparkles } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function DemoFloatWidget() {
  const { openLeadModal } = useLeadModal();

  return (
    <div className="demo-float">
      <button
        onClick={() =>
          openLeadModal({
            title: "Book 1-on-1 Product Demo",
            source: "Floating Book Demo Pill",
            planName: "TCB Ecosystem Walkthrough",
          })
        }
        className="animate-pulse-subtle flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#618dff] bg-[#305eff] px-3 py-2 sm:px-4 sm:py-2.5 text-[11px] sm:text-xs font-extrabold text-white shadow-lg shadow-[#305eff]/35 backdrop-blur-md transition-all hover:bg-[#1f47e0] hover:scale-105 active:scale-95"
      >
        <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-blue-200 animate-ping" />
        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
        <span>Book Demo</span>
      </button>
    </div>
  );
}
