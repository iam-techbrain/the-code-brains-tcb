"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Mic, MicOff, Volume2, Sparkles, X, CheckCircle2, Command, Zap, AlertCircle } from "lucide-react";

// SpeechRecognition type declarations for TS
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
  const [transcript, setTranscript] = useState("");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [isSupported, setIsSupported] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check Web Speech API Support
    const SpeechRecognitionAPI =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognitionAPI) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-IN"; // English (India) with voice command recognition

    recognition.onresult = (event: any) => {
      let currentTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setTranscript(currentTranscript);
      processCommand(currentTranscript.toLowerCase());
    };

    recognition.onerror = (event: any) => {
      console.warn("Voice AI Recognition Error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      // Auto-restart if user kept mic active
      if (isListening) {
        try {
          recognition.start();
        } catch (e) {
          setIsListening(false);
        }
      }
    };

    recognitionRef.current = recognition;
  }, []);

  // Text-To-Speech Feedback Response
  const speakResponse = (text: string) => {
    setFeedbackMsg(text);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Voice Command Intent Router & Executor
  const processCommand = (cmd: string) => {
    // Navigation Commands
    if (cmd.includes("go to store") || cmd.includes("open store") || cmd.includes("store dashboard") || cmd.includes("pos")) {
      router.push("/store");
      speakResponse("Opening TCB Store Workspace");
      setTranscript("");
    } else if (cmd.includes("go to school") || cmd.includes("open school") || cmd.includes("school dashboard") || cmd.includes("academy")) {
      router.push("/school");
      speakResponse("Opening TCB School Workspace");
      setTranscript("");
    } else if (cmd.includes("go home") || cmd.includes("open home") || cmd.includes("main page")) {
      router.push("/");
      speakResponse("Navigating to TCB Home Platform");
      setTranscript("");
    } else if (cmd.includes("show pricing") || cmd.includes("open pricing") || cmd.includes("subscription plans")) {
      router.push("/#pricing");
      speakResponse("Showing Subscription Plans & Pricing");
      setTranscript("");
    } else if (cmd.includes("show apps") || cmd.includes("open apps") || cmd.includes("ecosystem")) {
      router.push("/#ecosystem-apps");
      speakResponse("Showing TCB Micro-SaaS Applications");
      setTranscript("");
    } 
    // Sales / Attendance Queries
    else if (cmd.includes("sales today") || cmd.includes("today sales")) {
      speakResponse("Today's total sales across active POS counter is ₹18,450.");
      setTranscript("");
    } else if (cmd.includes("attendance today") || cmd.includes("how many present")) {
      speakResponse("94% of students are present today across active batches.");
      setTranscript("");
    } else if (cmd.includes("pending dues") || cmd.includes("unpaid fees")) {
      speakResponse("Total uncollected student fee dues amount to ₹13,500.");
      setTranscript("");
    }
  };

  const toggleListening = () => {
    if (!isSupported) {
      alert("Browser Speech Recognition is not supported on this browser. Please use Chrome or Edge.");
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setTranscript("");
    } else {
      try {
        setIsOpen(true);
        recognitionRef.current?.start();
        setIsListening(true);
        speakResponse("TCB Voice AI Active. How can I help your business today?");
      } catch (err) {
        console.error("Failed to start voice recognition:", err);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Voice Assistant Panel Window when open */}
      {isOpen && (
        <div className="w-80 sm:w-96 overflow-hidden rounded-3xl border border-brand-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-zinc-900">TCB Voice AI Command Center</h4>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-500">
                  <span className="h-2 w-2 rounded-full bg-brand-500 animate-ping" />
                  Real-time Voice Recognition
                </div>
              </div>
            </div>
            
            <button
              onClick={() => {
                if (isListening) toggleListening();
                setIsOpen(false);
              }}
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Live Waveform Indicator */}
          <div className="my-4 flex items-center justify-center gap-1.5 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
            {isListening ? (
              <div className="flex items-center gap-1">
                <span className="h-6 w-1 rounded-full bg-brand-500 animate-pulse" />
                <span className="h-10 w-1 rounded-full bg-brand-500 animate-bounce" />
                <span className="h-4 w-1 rounded-full bg-brand-400 animate-pulse" />
                <span className="h-8 w-1 rounded-full bg-brand-500 animate-bounce" />
                <span className="h-5 w-1 rounded-full bg-brand-500 animate-pulse" />
              </div>
            ) : (
              <div className="text-xs font-semibold text-zinc-500 flex items-center gap-1.5">
                <MicOff className="h-4 w-4 text-zinc-400" />
                Tap microphone to speak commands
              </div>
            )}
          </div>

          {/* Speech Transcript Output */}
          <div className="min-h-[50px] rounded-xl bg-zinc-50 p-3 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
              {isListening ? "Listening to your voice..." : "Voice Output"}
            </span>
            <p className="font-semibold text-zinc-800 italic">
              {transcript ? `"${transcript}"` : feedbackMsg || 'Try saying: "Go to Store", "Open School", "Sales today", or "Show Pricing"'}
            </p>
          </div>

          {/* Preset Voice Command Chips */}
          <div className="mt-4 border-t border-zinc-100 pt-3">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">
              Voice Shortcut Commands:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                '🗣️ "Go to Store"',
                '🗣️ "Go to School"',
                '🗣️ "Sales today"',
                '🗣️ "Show Pricing"',
              ].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    const cleanCmd = cmd.replace('🗣️ "', '').replace('"', '').toLowerCase();
                    processCommand(cleanCmd);
                  }}
                  className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-700 hover:border-brand-500 hover:text-brand-500 transition-all shadow-2xs"
                >
                  {cmd}
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
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full border shadow-xl transition-all duration-300 ${
          isListening
            ? "border-brand-400 bg-brand-500 text-white shadow-brand-500/40 ring-4 ring-brand-500/20 scale-110"
            : "border-brand-500 bg-brand-500 text-white hover:bg-brand-500 hover:scale-105"
        }`}
      >
        {isListening ? (
          <div className="relative">
            <Mic className="h-6 w-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-brand-300 animate-ping" />
          </div>
        ) : (
          <Mic className="h-6 w-6" />
        )}

        {/* Floating Tooltip Pill */}
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-md group-hover:block">
          🎙️ Voice AI Command
        </span>
      </button>
    </div>
  );
}
