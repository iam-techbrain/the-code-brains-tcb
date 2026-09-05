"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Mic,
  MicOff,
  Sparkles,
  X,
  Bot,
  Navigation,
  Loader2,
  Send,
  Languages,
  CheckCircle2,
} from "lucide-react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function VoiceAssistant() {
  const router = useRouter();
  const pathname = usePathname();

  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"hi-IN" | "en-IN">("hi-IN");
  const [transcript, setTranscript] = useState("");
  const [textInput, setTextInput] = useState("");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [lastAction, setLastAction] = useState<string>("");
  const [isSupported, setIsSupported] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const recognitionRef = useRef<any>(null);
  const cooldownRef = useRef<boolean>(false);
  const availableVoicesRef = useRef<SpeechSynthesisVoice[]>([]);

  // Load and cache browser voices
  useEffect(() => {
    const loadVoices = () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        availableVoicesRef.current = window.speechSynthesis.getVoices();
      }
    };

    loadVoices();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Pick Indian voice
  const getIndianVoice = (): SpeechSynthesisVoice | null => {
    const voices = availableVoicesRef.current.length > 0
      ? availableVoicesRef.current
      : typeof window !== "undefined" && "speechSynthesis" in window
      ? window.speechSynthesis.getVoices()
      : [];

    if (!voices || voices.length === 0) return null;

    if (selectedLang === "hi-IN") {
      const hiVoice = voices.find(
        (v) => v.lang.startsWith("hi") || v.lang === "hi-IN" || v.name.toLowerCase().includes("hindi")
      );
      if (hiVoice) return hiVoice;
    }

    const indianVoice = voices.find(
      (v) =>
        v.lang === "en-IN" ||
        v.name.toLowerCase().includes("india") ||
        v.name.toLowerCase().includes("heera") ||
        v.name.toLowerCase().includes("neerja") ||
        v.name.toLowerCase().includes("ravi") ||
        v.name.toLowerCase().includes("prabhat")
    );

    return indianVoice || voices.find((v) => v.default) || voices[0];
  };

  // Initialize SpeechRecognition with dynamic language
  useEffect(() => {
    const SpeechRecognitionAPI =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognitionAPI) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = false; // single phrase recognition for high accuracy
    recognition.interimResults = false;
    recognition.lang = selectedLang;

    recognition.onresult = (event: any) => {
      const resultText = event.results[0]?.[0]?.transcript;
      if (resultText && resultText.trim().length > 0) {
        setTranscript(resultText);
        handleSendQueryToGemini(resultText.trim());
      }
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.warn("Speech recognition notice:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      try {
        recognition.stop();
      } catch (e) {}
    };
  }, [selectedLang]);

  // Text-To-Speech Feedback Response
  const speakResponse = (text: string) => {
    setFeedbackMsg(text);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = getIndianVoice();
      if (voice) {
        utterance.voice = voice;
      }
      utterance.rate = 1.0;
      utterance.pitch = 1.02;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Smooth Navigation & Highlight Handler
  const executeAction = (action: string | null, actionLabel: string | null, speechText: string) => {
    if (actionLabel) setLastAction(actionLabel);
    speakResponse(speechText);

    if (!action || typeof window === "undefined") return;

    if (action === "store") {
      router.push("/store");
      return;
    }

    if (action === "school") {
      router.push("/school");
      return;
    }

    if (action === "home") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      return;
    }

    // Scroll to section ID
    if (pathname === "/") {
      const element = document.getElementById(action);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        element.classList.add("ring-4", "ring-brand-500/40", "ring-offset-4", "transition-all", "duration-500");
        setTimeout(() => {
          element.classList.remove("ring-4", "ring-brand-500/40", "ring-offset-4");
        }, 2500);
      } else {
        window.location.hash = action;
      }
    } else {
      router.push(`/#${action}`);
    }
  };

  // Query Google Gemini API directly
  const handleSendQueryToGemini = async (userPrompt: string) => {
    if (!userPrompt || !userPrompt.trim()) return;
    if (cooldownRef.current) return;

    cooldownRef.current = true;
    setIsThinking(true);
    setTranscript(userPrompt);

    try {
      const res = await fetch("/api/voice-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userPrompt }),
      });

      if (res.ok) {
        const data = await res.json();
        executeAction(data.action, data.actionLabel, data.reply);
      } else {
        speakResponse("Maaf kijiye, connection me thodi rukawat aayi. Kripya dobara try karein.");
      }
    } catch (err) {
      console.error("Gemini query error:", err);
      speakResponse("Kripya dobara bolein ya type karein.");
    } finally {
      setIsThinking(false);
      setTimeout(() => {
        cooldownRef.current = false;
      }, 1000);
    }
  };

  const toggleListening = () => {
    if (!isSupported) {
      alert("Browser Speech Recognition is not supported on this browser. Please use Google Chrome or Microsoft Edge.");
      return;
    }

    if (isListening) {
      try {
        recognitionRef.current?.stop();
      } catch (e) {}
      setIsListening(false);
    } else {
      try {
        setIsOpen(true);
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (err) {
        console.error("Failed to start voice recognition:", err);
        setIsListening(false);
      }
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;
    const q = textInput.trim();
    setTextInput("");
    handleSendQueryToGemini(q);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Voice Assistant Panel Window when open */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] max-w-sm sm:w-[430px] overflow-hidden rounded-3xl border border-brand-200 bg-white/98 p-4 sm:p-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-zinc-900 flex items-center gap-1.5">
                  TCB Voice AI
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-extrabold text-blue-700">
                    Gemini Live
                  </span>
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-600">
                  <span className="h-2 w-2 rounded-full bg-brand-500 animate-ping" />
                  Hindi &amp; English Voice Engine
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Language Switcher Pill */}
              <div className="flex items-center rounded-full border border-zinc-200 bg-zinc-100 p-0.5 text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => setSelectedLang("hi-IN")}
                  className={`rounded-full px-2 py-0.5 transition-all ${
                    selectedLang === "hi-IN"
                      ? "bg-brand-500 text-white shadow-xs"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  🇮🇳 हिन्दी
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLang("en-IN")}
                  className={`rounded-full px-2 py-0.5 transition-all ${
                    selectedLang === "en-IN"
                      ? "bg-brand-500 text-white shadow-xs"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  🇬🇧 Eng
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (isListening) toggleListening();
                  setIsOpen(false);
                }}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Action Destination Feedback Banner */}
          {lastAction && (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">
              <Navigation className="h-3.5 w-3.5 text-emerald-600 animate-spin" />
              <span>Routed to: {lastAction}</span>
            </div>
          )}

          {/* Mic Waveform & Status */}
          <div className="my-3 flex items-center justify-between rounded-2xl border border-brand-100 bg-brand-50/60 p-3">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={toggleListening}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-xs transition-all ${
                  isListening
                    ? "bg-red-500 text-white animate-pulse"
                    : "bg-brand-500 text-white hover:bg-brand-600"
                }`}
              >
                {isListening ? <Mic className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>
              <div className="text-xs">
                <div className="font-bold text-slate-900">
                  {isListening ? "Listening (बोलिए...)" : "Tap Mic to Speak"}
                </div>
                <div className="text-[10px] text-slate-500">
                  Lang: {selectedLang === "hi-IN" ? "Hindi (हिन्दी / हिंग्लिश)" : "English"}
                </div>
              </div>
            </div>

            {isThinking && (
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-700">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-brand-600" />
                Ai is thinking...
              </div>
            )}
          </div>

          {/* Transcript & Spoken Response Window */}
          <div className="min-h-[54px] rounded-xl bg-zinc-50 p-3 text-xs">
            {transcript && (
              <div className="mb-1 text-[11px] font-semibold text-slate-500">
                You asked: <span className="text-slate-800">&ldquo;{transcript}&rdquo;</span>
              </div>
            )}
            <p className="font-bold text-slate-900 leading-snug">
              {feedbackMsg ||
                (selectedLang === "hi-IN"
                  ? 'Say: "AI Agents", "Is School ready?", or "Pricing"'
                  : 'Say: "Show AI Agents", "Is School ready?", or "Pricing"')}
            </p>
          </div>

          {/* Type Directly Input Box (Alternative to Voice) */}
          <form onSubmit={handleManualSubmit} className="mt-3 flex items-center gap-1.5">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={selectedLang === "hi-IN" ? "Ask anything or type here..." : "Ask anything or type here..."}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-hidden"
            />
            <button
              type="submit"
              disabled={!textInput.trim()}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white disabled:opacity-40 hover:bg-brand-600"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Preset Voice Command Chips */}
          <div className="mt-3 border-t border-zinc-100 pt-2.5">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">
              Quick Questions (Click to test):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "🤖 AI Agents", cmd: "ai agent" },
                { label: "🏫 School Model", cmd: "school model" },
                { label: "💰 Pricing", cmd: "pricing" },
                { label: "🛒 Store Model", cmd: "store model" },
                { label: "📞 Demo", cmd: "demo" },
              ].map((item) => (
                <button
                  key={item.cmd}
                  type="button"
                  onClick={() => handleSendQueryToGemini(item.cmd)}
                  className="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[10px] font-semibold text-zinc-700 hover:border-brand-500 hover:text-brand-600 transition-all shadow-2xs active:scale-95"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Voice Mic Trigger Button */}
      <button
        type="button"
        onClick={toggleListening}
        aria-label="TCB Voice AI Assistant"
        className={`group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border shadow-xl transition-all duration-300 ${
          isListening
            ? "border-red-400 bg-red-500 text-white shadow-red-500/40 ring-4 ring-red-500/20 scale-110 animate-pulse"
            : "border-brand-500 bg-brand-500 text-white hover:bg-brand-600 hover:scale-105 active:scale-95"
        }`}
      >
        {isListening ? (
          <div className="relative">
            <Mic className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-white animate-ping" />
          </div>
        ) : (
          <Mic className="h-5 w-5 sm:h-6 sm:w-6" />
        )}

        {/* Floating Tooltip Pill */}
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-md sm:group-hover:block">
          🎙️ Voice AI (Hindi &amp; English)
        </span>
      </button>
    </div>
  );
}
