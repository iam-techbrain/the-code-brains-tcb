import {
  QrCode,
  Receipt,
  Send,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

type Step = {
  number: string;
  icon: typeof QrCode;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badgeText: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    icon: QrCode,
    title: "Setup Your Shop Catalog",
    subtitle: "In under 2 minutes",
    description:
      "Upload your existing inventory using Excel/CSV or quickly add items using built-in barcode scanner. Set your sale price & GST rates effortlessly.",
    highlights: [
      "Bulk CSV / Excel import support",
      "Camera & barcode scanner integration",
      "Pre-loaded Indian Kirana catalog items",
    ],
    badgeText: "Step 1: Onboarding",
  },
  {
    number: "02",
    icon: Receipt,
    title: "Create Instant Bills & Sales",
    subtitle: "Lightning-fast billing counter",
    description:
      "Search products by name, barcode, or category. Generate GST invoices or simple cash receipts in 1-click. Print or send via SMS/WhatsApp.",
    highlights: [
      "Thermal printer & A4 PDF support",
      "Customizable shop logo & GSTIN",
      "Cash, Card, & UPI payment modes",
    ],
    badgeText: "Step 2: Daily Billing",
  },
  {
    number: "03",
    icon: Send,
    title: "Automate Reminders & Collections",
    subtitle: "Collect pending payments 3x faster",
    description:
      "TCB Store automatically tracks customer credit (Udhar). When payment is due, your customer receives a polite WhatsApp message with a direct UPI link.",
    highlights: [
      "Auto-generated WhatsApp payment links",
      "Zero transaction commission on UPI",
      "Instant settlement into your bank account",
    ],
    badgeText: "Step 3: Collections",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-t border-zinc-100 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-3.5 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-500" />
            Simple 3-Step Process
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            How TCB Store works in your daily routine
          </h2>
          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-zinc-500 sm:text-lg">
            No complicated technical setup required. Start billing and managing your store inventory in 3 simple steps.
          </p>
        </div>

        {/* Steps Cards Container */}
        <div className="relative mt-10 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Connector Line (Desktop Only) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/6 right-1/6 top-24 hidden h-0.5 border-t-2 border-dashed border-brand-200 lg:block"
          />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <div>
                  {/* Top Header: Step Badge + Number */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-200 bg-brand-50/80 px-2.5 py-1 text-xs font-semibold text-brand-700">
                      {step.badgeText}
                    </span>
                    <span className="font-mono text-3xl font-extrabold text-zinc-200 transition-colors group-hover:text-brand-500">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 transition-colors duration-200 group-hover:border-brand-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-900">
                    {step.title}
                  </h3>
                  <span className="text-xs font-medium text-brand-500">
                    {step.subtitle}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                    {step.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-zinc-100 pt-5">
                    {step.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 flex items-center gap-1 text-xs font-semibold text-zinc-900 group-hover:text-brand-500">
                  <span>Learn more about Step {idx + 1}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <div className="mt-14 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-brand-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Get Started Free (No Credit Card)
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
