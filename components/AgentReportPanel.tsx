import {
  Activity,
  Bot,
  CheckCircle2,
  Clock,
  Gauge,
  MessageSquare,
  PhoneCall,
  Workflow,
} from "lucide-react";

const AGENTS = [
  { name: "n8n Lead Router", stack: "Webhook → CRM Pipeline", runs: "36", status: "Live" },
  { name: "WhatsApp Reminder Bot", stack: "Meta WhatsApp Cloud API", runs: "13", status: "Live" },
  { name: "Voice Lead Qualifier", stack: "Twilio + GPT-4o Realtime", runs: "24", status: "Live" },
  { name: "RAG Knowledge Agent", stack: "LangChain + Pinecone Vector", runs: "18", status: "Live" },
];

const NODES = ["Trigger", "AI Agent", "n8n", "WhatsApp", "CRM"];

export default function AgentReportPanel() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/95 shadow-xl ring-1 ring-slate-200/60">
      <div className="flex items-center justify-between border-b border-slate-100/80 bg-gradient-to-r from-slate-50 to-white px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd43b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#69db7c]" />
        </div>
        <span className="text-[11px] font-semibold text-slate-500">
          tcb.studio / agent-ops
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div>
          <p className="font-display text-sm font-bold text-slate-900">AI Agent Operations</p>
          <p className="text-[11px] text-slate-500">n8n workflows · RAG · Voice · WhatsApp</p>
        </div>
        <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
          Production Fleet
        </span>
      </div>

      <div className="grid grid-cols-3 gap-px border-b border-slate-100 bg-slate-100">
        <div className="bg-white px-3 py-3">
          <p className="text-[10px] font-medium text-slate-500">Agents Built</p>
          <p className="mt-0.5 font-display text-lg font-bold text-blue-600">18</p>
        </div>
        <div className="bg-white px-3 py-3">
          <p className="text-[10px] font-medium text-slate-500">Success rate</p>
          <p className="mt-0.5 font-display text-lg font-bold text-emerald-600">99.4%</p>
        </div>
        <div className="bg-white px-3 py-3">
          <p className="text-[10px] font-medium text-slate-500">Avg latency</p>
          <p className="mt-0.5 font-display text-lg font-bold text-indigo-600">340ms</p>
        </div>
      </div>

      <div className="border-b border-slate-100 px-4 py-3">
        <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
          <Workflow className="h-3.5 w-3.5 text-brand-500" />
          n8n pipeline
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {NODES.map((node, i) => (
            <div key={node} className="flex items-center gap-1.5">
              <span className="rounded-lg border border-brand-100 bg-white px-2 py-1 text-[10px] font-semibold text-brand-800 shadow-sm">
                {node}
              </span>
              {i < NODES.length - 1 && (
                <span className="h-px w-3 bg-slate-300 sm:w-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 py-3">
        <p className="mb-2 text-[11px] font-semibold text-slate-700">Active agents</p>
        <ul className="space-y-2">
          {AGENTS.map((agent) => (
            <li
              key={agent.name}
              className="flex items-center justify-between rounded-xl border border-white bg-white px-3 py-2 shadow-sm"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  {agent.name.includes("Voice") ? (
                    <PhoneCall className="h-3.5 w-3.5" />
                  ) : agent.name.includes("WhatsApp") || agent.name.includes("Fee") ? (
                    <MessageSquare className="h-3.5 w-3.5" />
                  ) : agent.name.includes("n8n") ? (
                    <Workflow className="h-3.5 w-3.5" />
                  ) : (
                    <Bot className="h-3.5 w-3.5" />
                  )}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-900">{agent.name}</p>
                  <p className="truncate text-[10px] text-slate-500">{agent.stack}</p>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs font-bold text-slate-900">{agent.runs}</p>
                <p
                  className={`text-[10px] font-semibold ${
                    agent.status === "Live" ? "text-emerald-600" : "text-amber-600"
                  }`}
                >
                  {agent.status}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-4 gap-px border-t border-slate-100 bg-slate-100">
        <div className="bg-white px-1.5 py-2 sm:px-2 sm:py-2.5 text-center">
          <Activity className="mx-auto h-3.5 w-3.5 text-blue-600" />
          <p className="mt-1 text-[10px] font-bold text-slate-900">18</p>
          <p className="text-[9px] text-slate-500 truncate">AI Agents</p>
        </div>
        <div className="bg-white px-1.5 py-2 sm:px-2 sm:py-2.5 text-center">
          <Workflow className="mx-auto h-3.5 w-3.5 text-indigo-600" />
          <p className="mt-1 text-[10px] font-bold text-slate-900">36</p>
          <p className="text-[9px] text-slate-500 truncate">n8n Routes</p>
        </div>
        <div className="bg-white px-1.5 py-2 sm:px-2 sm:py-2.5 text-center">
          <Clock className="mx-auto h-3.5 w-3.5 text-blue-600" />
          <p className="mt-1 text-[10px] font-bold text-slate-900">&lt;340ms</p>
          <p className="text-[9px] text-slate-500 truncate">Avg Latency</p>
        </div>
        <div className="bg-white px-1.5 py-2 sm:px-2 sm:py-2.5 text-center">
          <CheckCircle2 className="mx-auto h-3.5 w-3.5 text-emerald-600" />
          <p className="mt-1 text-[10px] font-bold text-slate-900">13</p>
          <p className="text-[9px] text-slate-500 truncate">Reminder Bots</p>
        </div>
      </div>
    </div>
  );
}
