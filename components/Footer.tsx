import { ShieldCheck, Cloud, Award, Lock, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Micro-SaaS Apps",
    links: [
      { name: "TCB School Workspace (Live)", href: "https://techschool.thecodebrains.com" },
      { name: "TCB Inventory System (Soon)", href: "#coming-soon" },
      { name: "WhatsApp Reminders Engine", href: "#features" },
      { name: "Low-Cost Multi-Tenant Cloud", href: "#school-feature" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About TCB Ecosystem", href: "#" },
      { name: "Partner Program", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact Support", href: "#" },
    ],
  },
  {
    heading: "Security & Legal",
    links: [
      { name: "Multi-Tenant Data Privacy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Data Security Policy", href: "#" },
    ],
  },
];

const SOCIALS = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
  { icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-4 pt-16 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex flex-col items-start justify-center group">
              <img
                src="/tcb-logo.png"
                alt="TCB Logo"
                style={{ height: "34px", width: "auto" }}
                className="h-8.5 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="mt-1 text-[11px] font-semibold tracking-wider uppercase text-blue-300">
                Micro-SaaS Ecosystem
              </span>
            </a>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-400">
              Unified cloud platform powering coaching institutes with automated fee alerts (<strong className="text-white">TCB School at techschool.thecodebrains.com</strong>) and upcoming inventory tracking (<strong className="text-white">TCB Inventory Soon</strong>).
            </p>

            {/* Security Pill Badges */}
            <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-200">
              <span className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                <ShieldCheck className="h-3 w-3 text-blue-300" />
                ABDM Compliant
              </span>
              <span className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                <Award className="h-3 w-3 text-blue-300" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                <Cloud className="h-3 w-3 text-blue-300" />
                AWS 99.95% Uptime
              </span>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-brand-400 hover:text-white hover:bg-brand-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">{col.heading}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-400 transition-colors hover:text-white font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} The Code Brains (TCB) Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
              All Systems Operational
            </span>
            <span>•</span>
            <span>Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


