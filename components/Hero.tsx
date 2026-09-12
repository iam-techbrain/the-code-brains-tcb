"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ChevronRight,
  CheckCircle2,
  Zap,
  Shield,
  Activity,
  Cpu,
  Sparkles,
  ArrowRight,
  Radio,
  Layers,
  PhoneCall,
  Terminal,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function Hero() {
  const { openLeadModal } = useLeadModal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [latency, setLatency] = useState(284);
  const [activeQueryCount, setActiveQueryCount] = useState(1420);

  // Live telemetry jitter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(278 + Math.random() * 11)); // 278ms - 289ms
      setActiveQueryCount((prev) => prev + Math.floor(Math.random() * 5 - 2));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-white px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24 lg:px-8 border-b border-slate-200/80"
    >
      {/* Dynamic Cursor Spotlight that tracks mouse smoothly */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePos.x * 120}px, ${mousePos.y * 120}px)`,
          top: "10%",
          right: "15%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(48,94,255,0.09) 0%, rgba(48,94,255,0.04) 45%, transparent 70%)",
          borderRadius: "9999px",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(48,94,255,0.06),transparent_70%)] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Authoritative Copy & Dynamic Motion */}
          <div className="lg:col-span-6 xl:col-span-7">
            {/* Bold Headline with Kinetic Gradient Shimmer */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
              className="text-2xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-950 leading-[1.22] lg:leading-[1.24] font-display pb-2"
            >
              Automate your entire business operations with custom{" "}
              <span className="electric-gradient-text inline-block pb-1 sm:pb-2 -mb-1 sm:-mb-2">
                AI Agents
              </span>
            </motion.h1>

            {/* Sub-headline with Staggered Entrance */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-600 font-normal"
            >
              Replace slow manual work with smart AI that answers customer calls, manages sales leads, and connects all your software 24/7. 100% custom-built for your business with full code ownership.
            </motion.p>

            {/* High-Impact CTA Buttons with Shimmer Beam */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: "easeOut" }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() =>
                  openLeadModal({
                    title: "Schedule Enterprise AI Consultation",
                    source: "Hero Primary Blue Pill CTA",
                    defaultNote: "Requesting custom autonomous AI orchestration architecture review.",
                  })
                }
                className="relative overflow-hidden inline-flex items-center justify-center rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#305eff]/30 transition-all cursor-pointer group"
              >
                {/* Traveling light beam sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore Solutions</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>

              <motion.a
                href="#orchestration-portfolio"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#305eff] py-2.5 sm:py-3 transition-colors group cursor-pointer"
              >
                <span>View Orchestration Portfolio</span>
                <ChevronRight className="h-4 w-4 text-[#305eff] transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            {/* Credibility Badges Under CTA - Responsive Wrap on Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5 lg:gap-3 py-1"
            >
              {[
                "Zero recurring agency markups",
                "100% Client Git & Code Ownership",
                "Direct AWS Cloud Deployment",
              ].map((badge, bIdx) => (
                <motion.div
                  key={bIdx}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-1.5 sm:gap-2 bg-slate-50 border border-slate-200/90 px-2.5 sm:px-3 py-1.5 rounded-full shadow-2xs shrink-0 whitespace-nowrap"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#305eff] shrink-0" />
                  <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Salesforce Integrations Studio + Live Telemetry HUD */}
          <div className="relative flex items-center justify-center lg:col-span-6 xl:col-span-5 select-none py-6 w-full max-w-full overflow-hidden sm:overflow-visible">
            {/* Interactive 3D Gyroscopic Container */}
            <motion.div
              animate={{
                rotateX: mousePos.y * -14,
                rotateY: mousePos.x * 18,
              }}
              transition={{
                rotateX: { type: "spring", stiffness: 100, damping: 18 },
                rotateY: { type: "spring", stiffness: 100, damping: 18 },
              }}
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[340px] sm:max-w-[560px] flex items-center justify-center"
            >
              {/* Rotating Outer Cyber Radar Rings */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-[#305eff]/20 animate-spin-slow opacity-60"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-full border border-dotted border-cyan-400/20 animate-spin-reverse opacity-50"
              />

              {/* Centerpiece 3D Card showcasing Salesforce Integrations SVG */}
              <div
                className="relative z-10 w-full rounded-3xl border border-slate-200/90 bg-white/95 p-3 sm:p-5 shadow-2xl shadow-blue-500/10 backdrop-blur-md overflow-hidden group hover:border-[#305eff]/40 transition-all duration-300"
              >
                {/* Card Header with macOS-style indicators & Live Sync status */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-rose-400/80" />
                      <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="h-3.5 w-px bg-slate-200" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-tight flex items-center gap-1 sm:gap-1.5">
                      <span className="text-[#305eff] font-mono font-extrabold">Salesforce</span>
                      <span>Studio</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500 shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-1.5 sm:px-2 py-0.5 rounded-full">
                      Live Sync
                    </span>
                  </div>
                </div>

                {/* Vector Illustration Container with scanning laser beam & ambient glow */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50/80 to-blue-50/40 p-2 sm:p-4 flex items-center justify-center border border-slate-100/90">
                  {/* Ambient radial glow */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(48,94,255,0.08),transparent_70%)] pointer-events-none"
                  />

                  {/* Light beam sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-[#305eff]/10 to-transparent z-10" />

                  {/* Salesforce Integrations SVG */}
                  <Image
                    src="/Salesforce%20Integrations.svg"
                    alt="Salesforce Integrations Enterprise Studio"
                    width={645}
                    height={420}
                    priority
                    unoptimized
                    className="w-full h-auto max-h-[200px] sm:max-h-[330px] object-contain select-none transition-transform duration-500 ease-out group-hover:scale-[1.02] filter drop-shadow-xs"
                  />
                </div>

                {/* Card Footer Live Telemetry Stream */}
                <div className="mt-2.5 sm:mt-3 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1 sm:gap-2 font-mono">
                    <span className="font-semibold text-slate-700">VPC:</span>
                    <span className="text-[#305eff] font-bold">AWS us-east-1</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 font-mono">
                    <span className="text-slate-400">Stream:</span>
                    <span className="text-emerald-600 font-bold">0 Dropped</span>
                  </div>
                </div>
              </div>

              {/* Floating HUD Telemetry Pill 1: Low-Latency Voice with Alive Equalizer */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.08 }}
                className="absolute -top-3 right-0 sm:-top-5 sm:-right-4 z-30 scale-90 sm:scale-100 origin-top-right rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 shadow-xl flex items-center gap-2.5 sm:gap-3 pointer-events-auto cursor-default hover:border-[#305eff]/50 transition-colors"
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-50 text-[#305eff] border border-blue-100 shadow-2xs">
                  <Zap className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-bold text-slate-900">
                    <span>Voice Telephony</span>
                    <span className="inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500" />
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
                    <span className="text-[10px] sm:text-[11px] font-mono font-black text-[#305eff]">{latency}ms Latency</span>
                    {/* Bouncing Audio Visualizer */}
                    <div className="flex items-end gap-0.5 sm:gap-1 h-3 sm:h-3.5">
                      <span className="w-0.5 bg-[#305eff] rounded-full wave-bar-1" />
                      <span className="w-0.5 bg-[#305eff] rounded-full wave-bar-2" />
                      <span className="w-0.5 bg-[#305eff] rounded-full wave-bar-3" />
                      <span className="w-0.5 bg-[#305eff] rounded-full wave-bar-4" />
                      <span className="w-0.5 bg-[#305eff] rounded-full wave-bar-5" />
                      <span className="w-0.5 bg-[#305eff] rounded-full wave-bar-6" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating HUD Telemetry Pill 2: Intent Precision Core */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  x: [0, -4, 0],
                }}
                transition={{
                  duration: 4.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                whileHover={{ scale: 1.08 }}
                className="absolute -bottom-4 left-0 sm:-bottom-6 sm:-left-4 z-30 scale-90 sm:scale-100 origin-bottom-left rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 shadow-xl flex items-center gap-2.5 sm:gap-3 pointer-events-auto cursor-default hover:border-emerald-300 transition-colors"
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs">
                  <Cpu className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 flex items-center gap-1 sm:gap-1.5">
                    <span>Intent Precision</span>
                    <span className="rounded-full bg-emerald-100 px-1.5 sm:px-2 py-0.2 text-[8px] sm:text-[9px] font-black text-emerald-800 border border-emerald-200">
                      99.8%
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-0.5 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Deterministic Guardrails</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating HUD Telemetry Pill 3: Private Vector Storage */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                whileHover={{ scale: 1.08 }}
                className="hidden sm:flex absolute -bottom-3 right-3 sm:right-6 z-30 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-lg items-center gap-2.5 pointer-events-auto cursor-default hover:border-[#305eff]/50 transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-50 text-[#305eff]">
                  <Shield className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono font-extrabold text-slate-800">
                    Tenant Vault: {activeQueryCount} q/s
                  </div>
                  <div className="text-[9px] text-[#305eff] font-bold">12ms Vector Search</div>
                </div>
              </motion.div>

              {/* Floating HUD Capsule 4: Active Agent Swarm Status */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                className="absolute top-1/3 -left-5 sm:-left-7 z-30 hidden md:flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md text-[10px] font-bold text-slate-700 pointer-events-auto cursor-default"
              >
                <span className="flex h-2 w-2 rounded-full bg-[#305eff]" />
                <span className="font-mono text-[#305eff]">Agent Swarm: Active</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
