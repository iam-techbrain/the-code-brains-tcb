import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function ContactBand() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 overflow-hidden rounded-3xl border border-slate-800 bg-[#061229] text-white lg:grid-cols-2 shadow-2xl">
        <div className="px-5 py-8 sm:px-10 lg:px-14 lg:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#618dff]">
            Talk to TCB Studio
          </p>
          <h2 className="font-display mt-2 sm:mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl">
            Ready to ship AI agents that actually run your work?
          </h2>
          <p className="mt-3 sm:mt-4 max-w-lg text-xs sm:text-sm leading-relaxed sm:leading-7 text-slate-300">
            Share your workflow, stack, and outcome. We design custom agents, n8n/Make pipelines, and industry SaaS — then deploy them on a reliable cloud foundation.
          </p>
          <ul className="mt-5 sm:mt-6 space-y-2 text-xs sm:text-sm text-slate-200">
            {[
              "Discovery call in 24 hours",
              "Scoped proposal with timeline & stack",
              "Production-ready agents, not slideware",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 sm:gap-2.5 font-semibold">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#305eff]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 sm:mt-8 flex flex-col gap-2.5 sm:flex-row">
            <a
              href="mailto:hello@thecodebrains.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#305eff] hover:bg-[#1f47e0] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#305eff]/25 active:scale-95 transition-all"
            >
              <Mail className="h-4 w-4" />
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 active:scale-95 transition-all"
            >
              View packages
            </a>
          </div>
        </div>
        <div className="relative hidden h-full min-h-[320px] lg:block">
          <img
            src="/tcb-hero-ai-studio.png"
            alt="TCB AI studio visual"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
