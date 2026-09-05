import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function ContactBand() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white lg:grid-cols-2">
        <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Talk to TCB Studio
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to ship AI agents that actually run your work?
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
            Share your workflow, stack, and outcome. We design custom agents, n8n/Make pipelines, and industry SaaS — then deploy them on a reliable cloud foundation.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-slate-200">
            {[
              "Discovery call in 24 hours",
              "Scoped proposal with timeline & stack",
              "Production-ready agents, not slideware",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@thecodebrains.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600"
            >
              <Mail className="h-4 w-4" />
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
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
