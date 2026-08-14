"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const FAQS: FAQItem[] = [
  {
    question: "Is TCB Store GST compliant and easy to set up?",
    answer:
      "Yes! TCB Store supports HSN/SAC code mapping, automatic CGST/SGST/IGST splits, customizable GSTIN headers, and 1-click GSTR-1 Excel export for your accountant. You can set it up in under 2 minutes.",
    category: "GST & Billing",
  },
  {
    question: "Can I use TCB Store on my mobile phone, tablet, and laptop?",
    answer:
      "Yes. TCB Store works seamlessly across all devices — Android smartphones, iPhones, iPads, Windows PCs, and MacBooks. Your data syncs in real-time across all your billing counters and mobile devices.",
    category: "Devices & Compatibility",
  },
  {
    question: "How do automated WhatsApp payment reminders work?",
    answer:
      "When a customer invoice is due or has unpaid Udhar balance, TCB Store generates a friendly WhatsApp message containing a direct UPI payment link. Your customer opens the link and pays via PhonePe, GPay, or Paytm instantly.",
    category: "WhatsApp & Collections",
  },
  {
    question: "Can I import my existing product inventory from Excel or Tally?",
    answer:
      "Absolutely. You can import your entire inventory catalog in 1 click using any standard Excel (.xlsx) or CSV spreadsheet. We also provide pre-loaded catalog templates for Kirana, Apparel, and Electronics stores.",
    category: "Inventory Setup",
  },
  {
    question: "What receipt printers and barcode scanners are supported?",
    answer:
      "TCB Store supports all standard USB & Bluetooth barcode scanners as well as your smartphone camera. For printing, it works with 2-inch & 3-inch ESC/POS thermal printers, Bluetooth receipt printers, and standard A4 laser desktop printers.",
    category: "Hardware",
  },
  {
    question: "Is my business data secure and backed up?",
    answer:
      "100% secure. Your store records, customer ledgers, and transactions are encrypted with bank-grade security and backed up automatically every day to cloud servers. You never lose your business data even if your phone is lost or damaged.",
    category: "Security",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative border-t border-zinc-100 bg-zinc-50/60 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            Got Questions? We Have Answers
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
            Everything you need to know about TCB Store billing, inventory tracking, and payment collection.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-200 hover:border-emerald-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6"
                >
                  <span className="flex items-center gap-3 pr-4 text-base font-semibold text-zinc-900 sm:text-lg">
                    <HelpCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                    {faq.question}
                  </span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-transform duration-200 ${isOpen ? "rotate-180 bg-emerald-100 text-emerald-700" : "text-zinc-500"}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-100 bg-zinc-50/50 px-5 py-5 sm:px-6 sm:py-6">
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {faq.answer}
                    </p>
                    <div className="mt-4 inline-block rounded-md border border-zinc-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-zinc-500">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900">Have a specific question not answered here?</h4>
              <p className="text-xs text-zinc-500">Our customer support team is available 24/7 on WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hi%20TCB%20Store,%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-emerald-500"
          >
            Chat with Support
          </a>
        </div>
      </div>
    </section>
  );
}
