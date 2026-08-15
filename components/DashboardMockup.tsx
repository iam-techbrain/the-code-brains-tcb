import { TrendingUp, MoreHorizontal, ArrowUpRight, Circle } from "lucide-react";

const CHART_BARS = [38, 52, 44, 68, 58, 74, 61, 85, 70, 92, 80, 100];

const INVOICES = [
  { name: "Acme Enterprise", amount: "$24,500", status: "Paid" },
  { name: "Vortex Dynamics", amount: "$8,200", status: "Pending" },
  { name: "Apex Global Inc.", amount: "$41,000", status: "Paid" },
];

/**
 * The signature visual of the page: a glass dashboard preview with a
 * soft emerald glow, a mini revenue chart, and a live invoice feed.
 * Purely decorative/static — no real data or interactivity.
 */
export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-emerald-400/30 via-emerald-300/10 to-transparent blur-2xl"
      />

      <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 shadow-[0_1px_1px_rgba(0,0,0,0.04),0_20px_60px_-20px_rgba(16,185,129,0.25),0_0_0_1px_rgba(0,0,0,0.02)] backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          </div>
          <span className="text-xs font-medium text-zinc-400">
            tcb.cloud/dashboard
          </span>
          <MoreHorizontal className="h-4 w-4 text-zinc-300" />
        </div>

        <div className="grid gap-px bg-zinc-100 sm:grid-cols-5">
          {/* Revenue chart */}
          <div className="col-span-3 bg-white p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-400">
                  This month&apos;s revenue
                </p>
                <p className="font-mono text-2xl font-semibold tracking-tight text-zinc-900">
                  $482,300
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                18.2%
              </span>
            </div>

            {/* Bar chart */}
            <div className="flex h-24 items-end gap-1.5">
              {CHART_BARS.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm transition-all duration-500 ${
                    i === CHART_BARS.length - 1
                      ? "bg-gradient-to-t from-emerald-600 to-emerald-400"
                      : "bg-zinc-100"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-medium text-zinc-300">
              <span>Jan</span>
              <span>Jun</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Invoice feed */}
          <div className="col-span-2 bg-white p-5">
            <p className="mb-3 text-xs font-medium text-zinc-400">
              Recent invoices
            </p>
            <ul className="flex flex-col gap-3">
              {INVOICES.map((inv) => (
                <li key={inv.name} className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-zinc-800">
                      {inv.name}
                    </p>
                    <p className="flex items-center gap-1 text-[11px] text-zinc-400">
                      <Circle
                        className={`h-1.5 w-1.5 ${
                          inv.status === "Paid"
                            ? "fill-emerald-500 text-emerald-500"
                            : "fill-amber-400 text-amber-400"
                        }`}
                      />
                      {inv.status}
                    </p>
                  </div>
                  <span className="font-mono text-sm font-medium text-zinc-700">
                    {inv.amount}
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-4 flex w-full items-center justify-center gap-1 rounded-md border border-zinc-200 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-800">
              View all
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
