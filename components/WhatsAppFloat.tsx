"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "911234567890"; // NuvertOS / TCB support hotline number format
    const message = encodeURIComponent(
      "Hi TCB Team! I am interested in TCB Store & School Micro-SaaS Platform. Please share more details."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="whatsapp-float group cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleWhatsAppClick}
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
      
      {/* Tooltip Hover Bubble */}
      <div
        className={`absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white shadow-xl transition-all duration-300 ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-2 scale-95 pointer-events-none"
        }`}
      >
        <span>Chat with Product Specialist</span>
        <div className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-slate-900" />
      </div>
    </div>
  );
}
