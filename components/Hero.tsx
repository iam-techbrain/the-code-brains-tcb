"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, CheckCircle2, Zap, Shield, Activity, Cpu } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function Hero() {
  const { openLeadModal } = useLeadModal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section className="relative overflow-hidden bg-white tech-grid-bg px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8 border-b border-slate-200/80">
      {/* Subtle futuristic background lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[650px] w-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,192,243,0.15),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,102,204,0.08),transparent_70%)] blur-2xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Authoritative Enterprise Copy */}
          <div className="lg:col-span-6 xl:col-span-7">
            {/* Category Eyebrow Breadcrumb with Glowing Beacon */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-3.5 py-1 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-slate-700 shadow-xs backdrop-blur-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c0f3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066cc]"></span>
              </span>
              <span className="text-[#0066cc]">Solutions</span>
              <span className="text-slate-300">/</span>
              <span>Autonomous AI Orchestration</span>
            </motion.div>

            {/* Bold Headline with Electric Shimmer */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]"
            >
              Deliver services at scale with intent-driven{" "}
              <span className="electric-gradient-text">AI Orchestration</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8 font-normal"
            >
              Automate, orchestrate, and optimize complex multi-vendor, multi-channel business workflows across your private enterprise cloud. 100% custom-engineered with zero vendor lock-in.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, boxShadow: "0 14px 30px -4px rgba(0, 102, 204, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() =>
                  openLeadModal({
                    title: "Schedule Enterprise AI Consultation",
                    source: "Hero Primary Blue Pill CTA",
                    defaultNote: "Requesting custom autonomous AI orchestration architecture review.",
                  })
                }
                className="inline-flex items-center justify-center rounded-full bg-[#0066cc] hover:bg-[#0052a3] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0066cc]/25 transition-colors cursor-pointer"
              >
                <span>Explore Solutions</span>
              </motion.button>

              <motion.a
                href="#orchestration-portfolio"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0066cc] py-3 transition-colors"
              >
                <span>View Orchestration Portfolio</span>
                <ChevronRight className="h-4 w-4 text-[#0066cc]" />
              </motion.a>
            </motion.div>

            {/* Credibility Badges Under CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#0066cc]" />
                <span>Zero recurring agency markups</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#0066cc]" />
                <span>100% Client Git &amp; Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#0066cc]" />
                <span>Direct AWS Cloud Deployment</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: World-Class Interactive 3D Parametric Mesh + Live Telemetry HUD */}
          <div
            className="relative flex items-center justify-center lg:col-span-6 xl:col-span-5 select-none"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              animate={{
                rotateX: mousePos.y * -14,
                rotateY: mousePos.x * 18,
                y: [0, -8, 0],
              }}
              transition={{
                rotateX: { type: "spring", stiffness: 120, damping: 20 },
                rotateY: { type: "spring", stiffness: 120, damping: 20 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ perspective: 1000 }}
              className="relative w-full aspect-[4/3] max-w-[560px] flex items-center justify-center"
            >
              {/* SVG 3D Parametric Mesh Wave with Laser Flow Pulses */}
              <svg
                viewBox="0 0 600 450"
                className="w-full h-full object-contain filter drop-shadow-md select-none pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00c0f3" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#0066cc" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
                    <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.15" />
                  </linearGradient>
                  <radialGradient id="meshCenterGlow" cx="60%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#00c0f3" stopOpacity="0.3" />
                    <stop offset="60%" stopColor="#0066cc" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient Center Glow */}
                <ellipse cx="360" cy="225" rx="190" ry="145" fill="url(#meshCenterGlow)" />

                {/* Primary Parametric Ribbon Layers */}
                {Array.from({ length: 28 }).map((_, i) => {
                  const offset = i * 7.5;
                  const curveY1 = 80 + Math.sin(i * 0.25) * 45 + offset * 0.4;
                  const curveY2 = 340 - Math.cos(i * 0.25) * 55 - offset * 0.3;
                  const strokeWidth = i % 4 === 0 ? 1.6 : 0.8;
                  const strokeOpacity = 0.25 + (i / 28) * 0.65;
                  const isLaser = i === 6 || i === 14 || i === 22;

                  return (
                    <path
                      key={i}
                      d={`M ${40 + i * 5} ${220 + Math.sin(i * 0.3) * 35} 
                          C ${160 + offset} ${curveY1}, 
                            ${380 - offset * 0.5} ${curveY2}, 
                            ${560 - i * 4} ${180 + Math.cos(i * 0.2) * 50}`}
                      fill="none"
                      stroke={i % 2 === 0 ? "url(#waveGrad1)" : "url(#waveGrad2)"}
                      strokeWidth={isLaser ? 2.2 : strokeWidth}
                      strokeOpacity={isLaser ? 1 : strokeOpacity}
                      className={isLaser ? (i === 14 ? "animate-laser-fast" : "animate-laser") : undefined}
                    />
                  );
                })}

                {/* Cross-Hatch Structural Wireframe Lines */}
                {Array.from({ length: 18 }).map((_, j) => {
                  const t = j * 30;
                  return (
                    <path
                      key={`cross-${j}`}
                      d={`M ${60 + t} ${150 + Math.sin(j) * 20} 
                          Q ${240 + t * 0.6} ${230 + Math.cos(j * 0.5) * 40} 
                            ${360 + t * 0.5} ${320 - Math.sin(j) * 30}`}
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="0.75"
                      strokeOpacity="0.4"
                      strokeDasharray={j % 3 === 0 ? "4 4" : undefined}
                    />
                  );
                })}

                {/* Animated Pulsing Node Anchors */}
                <circle cx="210" cy="180" r="4.5" fill="#0066cc" />
                <circle cx="210" cy="180" r="10" fill="none" stroke="#00c0f3" strokeWidth="1.5" strokeOpacity="0.6" className="animate-ping" style={{ transformOrigin: "210px 180px" }} />
                
                <circle cx="380" cy="240" r="4" fill="#0284c7" />
                <circle cx="440" cy="160" r="4.5" fill="#0066cc" />
                <circle cx="440" cy="160" r="9" fill="none" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx="290" cy="290" r="3.5" fill="#38bdf8" />
              </svg>

              {/* Floating HUD Telemetry Pill 1: Ultra-Low Latency Voice with Equalizer */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-3 right-4 sm:right-6 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-3 shadow-xl flex items-center gap-3 pointer-events-auto"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0066cc]">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-900">
                    <span>Voice Telephony</span>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-bold text-[#0066cc]">284ms Latency</span>
                    <div className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 bg-[#0066cc] rounded-full wave-bar-1" />
                      <span className="w-0.5 bg-[#00c0f3] rounded-full wave-bar-2" />
                      <span className="w-0.5 bg-[#0066cc] rounded-full wave-bar-3" />
                      <span className="w-0.5 bg-[#00c0f3] rounded-full wave-bar-4" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating HUD Telemetry Pill 2: Precision Reasoning Core */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 left-2 sm:left-4 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-3 shadow-xl flex items-center gap-3 pointer-events-auto"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
                    <span>Intent Precision</span>
                    <span className="rounded bg-emerald-100 px-1 py-0.2 text-[9px] font-black text-emerald-700">99.8%</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">Deterministic Guardrails</div>
                </div>
              </motion.div>

              {/* Floating HUD Telemetry Pill 3: Private Vector Storage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="hidden sm:flex absolute bottom-8 right-2 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md px-3 py-2 shadow-lg items-center gap-2 pointer-events-auto"
              >
                <Shield className="h-3.5 w-3.5 text-[#0066cc]" />
                <span className="text-[10px] font-bold text-slate-800">Tenant Vector Vault (12ms)</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
