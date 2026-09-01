"use client";

import { useState } from "react";
import { Sparkles, X, ArrowRight, CheckCircle2 } from "lucide-react";

export default function DemoFloatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", businessType: "Store" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <>
      {/* Bottom-Left Floating Pill Button */}
      <div className="demo-float">
        <button
          onClick={() => setIsOpen(true)}
          className="animate-pulse-subtle flex items-center gap-2 rounded-full border border-emerald-400 bg-emerald-600 px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-emerald-600/30 backdrop-blur-md transition-all hover:bg-emerald-700 hover:scale-105"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-200 animate-ping" />
          <Sparkles className="h-4 w-4 text-white" />
          <span>Book Instant Demo</span>
        </button>
      </div>

      {/* Instant Demo Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-md animate-in fade-in-0 duration-200">
          <div className="relative w-full max-w-md rounded-3xl border border-emerald-500/20 bg-white p-6 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Demo Request Submitted!</h3>
                <p className="mt-2 text-xs text-slate-600">
                  Our product specialist will contact you within 15 minutes to schedule your live walkthrough.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">Get 1-on-1 Product Demo</h3>
                    <p className="text-xs text-slate-500">TCB School &amp; TCB Ecosystem</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Ecosystem Module</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
                    >
                      <option value="School">TCB School (Coaching &amp; Fee Tracker - Live)</option>
                      <option value="Inventory">TCB Inventory (Stock POS - Soon)</option>
                      <option value="Both">Complete Enterprise Suite (Both)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95"
                  >
                    <span>Schedule Free Walkthrough</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

