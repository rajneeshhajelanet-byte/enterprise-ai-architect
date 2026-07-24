import React from 'react';

interface DiagramProps {
  type: string;
  className?: string;
}

export const ArchitectureDiagram: React.FC<DiagramProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'six-parameters':
      return (
        <div className={`p-4 bg-slate-900/80 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 ${className}`}>
          <div className="text-center font-bold text-amber-400 mb-3 tracking-wide uppercase">
            Six Parameters AI Transformation Framework
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
              <span className="text-amber-400 font-bold block mb-1">01 · Capability</span>
              <span className="text-slate-300">As-Is to To-Be High-ROI Capability Mapping</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
              <span className="text-cyan-400 font-bold block mb-1">02 · Context</span>
              <span className="text-slate-300">Enterprise Context Fabric & RAG Engine</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
              <span className="text-emerald-400 font-bold block mb-1">03 · Autonomy</span>
              <span className="text-slate-300">Multi-Agent Orchestration & Tool Gateways</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
              <span className="text-blue-400 font-bold block mb-1">04 · Cloud Fabric</span>
              <span className="text-slate-300">AWS / Azure / GCP Multi-Cloud Portability</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
              <span className="text-purple-400 font-bold block mb-1">05 · Governance</span>
              <span className="text-slate-300">RBAC, Cost Controls & Audit Lineage</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
              <span className="text-rose-400 font-bold block mb-1">06 · Value Loop</span>
              <span className="text-slate-300">Continuous Feedback & Operational Metrics</span>
            </div>
          </div>
        </div>
      );

    case 'multi-agent':
      return (
        <div className={`p-4 bg-slate-900/80 rounded-xl border border-slate-800 font-mono text-xs ${className}`}>
          <div className="text-center font-bold text-cyan-400 mb-3 tracking-wide uppercase">
            AAOSA Multi-Agent Orchestration (Neuro SAN Studio)
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="w-full md:w-1/4 p-3 bg-slate-800 rounded-lg border border-cyan-500/40 text-center">
              <div className="text-cyan-400 font-bold mb-1">Planner Agent</div>
              <div className="text-slate-400 text-[11px]">Task Decomposition & Routing</div>
            </div>
            <div className="text-cyan-400 font-bold text-lg hidden md:block">➔</div>
            <div className="w-full md:w-2/4 grid grid-cols-2 gap-2">
              <div className="p-2 bg-slate-800/90 rounded border border-emerald-500/40 text-center">
                <span className="text-emerald-400 font-semibold block">KYB Agent</span>
                <span className="text-slate-400 text-[10px]">Verification</span>
              </div>
              <div className="p-2 bg-slate-800/90 rounded border border-purple-500/40 text-center">
                <span className="text-purple-400 font-semibold block">AML Agent</span>
                <span className="text-slate-400 text-[10px]">Risk Scoring</span>
              </div>
              <div className="p-2 bg-slate-800/90 rounded border border-amber-500/40 text-center">
                <span className="text-amber-400 font-semibold block">SOP Agent</span>
                <span className="text-slate-400 text-[10px]">Compliance</span>
              </div>
              <div className="p-2 bg-slate-800/90 rounded border border-blue-500/40 text-center">
                <span className="text-blue-400 font-semibold block">Audit Agent</span>
                <span className="text-slate-400 text-[10px]">Trail Writer</span>
              </div>
            </div>
            <div className="text-cyan-400 font-bold text-lg hidden md:block">➔</div>
            <div className="w-full md:w-1/4 p-3 bg-slate-800 rounded-lg border border-rose-500/40 text-center">
              <div className="text-rose-400 font-bold mb-1">Human-In-Loop</div>
              <div className="text-slate-400 text-[11px]">Approval Checkpoint</div>
            </div>
          </div>
        </div>
      );

    case 'aiops':
      return (
        <div className={`p-4 bg-slate-900/80 rounded-xl border border-slate-800 font-mono text-xs ${className}`}>
          <div className="text-center font-bold text-emerald-400 mb-3 tracking-wide uppercase">
            AIOps & BlueBolt DB Query Optimizer Platform
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center">
            <div className="p-3 bg-slate-800 rounded border border-slate-700">
              <span className="text-slate-400 block text-[10px]">01 INGEST</span>
              <span className="text-emerald-400 font-bold">Datadog + CloudWatch</span>
              <span className="text-slate-400 block text-[10px] mt-1">Logs & Slow Queries</span>
            </div>
            <div className="p-3 bg-slate-800 rounded border border-slate-700">
              <span className="text-slate-400 block text-[10px]">02 DIAGNOSE</span>
              <span className="text-cyan-400 font-bold">Agentic LLM Engine</span>
              <span className="text-slate-400 block text-[10px] mt-1">SQL Execution Plan</span>
            </div>
            <div className="p-3 bg-slate-800 rounded border border-slate-700">
              <span className="text-slate-400 block text-[10px]">03 OPTIMIZE</span>
              <span className="text-amber-400 font-bold">BlueBolt Optimizer</span>
              <span className="text-slate-400 block text-[10px] mt-1">Index & Query Fix</span>
            </div>
            <div className="p-3 bg-slate-800 rounded border border-emerald-500/50">
              <span className="text-slate-400 block text-[10px]">04 OUTCOME</span>
              <span className="text-emerald-300 font-bold">80%+ MTTR Reduction</span>
              <span className="text-slate-400 block text-[10px] mt-1">2-3h ➔ 10m Diagnostic</span>
            </div>
          </div>
        </div>
      );

    case 'cqrs':
      return (
        <div className={`p-4 bg-slate-900/80 rounded-xl border border-slate-800 font-mono text-xs ${className}`}>
          <div className="text-center font-bold text-purple-400 mb-3 tracking-wide uppercase">
            CQRS Command / Query Architecture
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-800/90 rounded-lg border border-purple-500/40">
              <div className="text-purple-400 font-bold mb-1">COMMAND SIDE (Writes)</div>
              <p className="text-slate-300 text-[11px] mb-2">Validates domain logic, writes to Write Store (Relational/SQL).</p>
              <div className="p-1.5 bg-slate-950 rounded text-center text-purple-300">Command API ➔ Transaction Store</div>
            </div>
            <div className="p-3 bg-slate-800/90 rounded-lg border border-cyan-500/40">
              <div className="text-cyan-400 font-bold mb-1">QUERY SIDE (Reads)</div>
              <p className="text-slate-300 text-[11px] mb-2">Denormalized read projections for high-speed UI queries.</p>
              <div className="p-1.5 bg-slate-950 rounded text-center text-cyan-300">Query API ➔ Read Cache / NoSQL Projections</div>
            </div>
          </div>
          <div className="mt-3 p-2 bg-slate-950 rounded border border-slate-800 text-center text-amber-400 text-[11px]">
            ⚡ Event Bus propagates domain events asynchronously to synchronize Read Projections
          </div>
        </div>
      );

    case 'cognitive-search':
      return (
        <div className={`p-4 bg-slate-900/80 rounded-xl border border-slate-800 font-mono text-xs ${className}`}>
          <div className="text-center font-bold text-sky-400 mb-3 tracking-wide uppercase">
            Enterprise Cognitive Search & OpenAI RAG Pipeline
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="p-2.5 bg-slate-800 rounded border border-slate-700 w-full md:w-1/4 text-center">
              <span className="text-sky-400 font-bold block">Docs & Data</span>
              <span className="text-slate-400 text-[10px]">PDFs, Policy, DBs</span>
            </div>
            <span className="text-sky-400 font-bold hidden md:inline">➔</span>
            <div className="p-2.5 bg-slate-800 rounded border border-sky-500/40 w-full md:w-1/3 text-center">
              <span className="text-sky-300 font-bold block">Azure Cognitive Search</span>
              <span className="text-slate-400 text-[10px]">BM25 + Vector + Re-ranking</span>
            </div>
            <span className="text-sky-400 font-bold hidden md:inline">➔</span>
            <div className="p-2.5 bg-slate-800 rounded border border-indigo-500/40 w-full md:w-1/3 text-center">
              <span className="text-indigo-300 font-bold block">Azure OpenAI Engine</span>
              <span className="text-slate-400 text-[10px]">Grounded Answer + Citations</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`p-4 bg-slate-900/80 rounded-xl border border-slate-800 font-mono text-xs ${className}`}>
          <div className="text-center font-bold text-amber-400 mb-2 uppercase tracking-wider">
            Cloud-Native Enterprise Pattern
          </div>
          <div className="flex justify-around items-center p-3 bg-slate-800/80 rounded border border-slate-700">
            <div className="text-center">
              <span className="text-cyan-400 font-bold block">API Gateway</span>
              <span className="text-slate-400 text-[10px]">Auth & Policies</span>
            </div>
            <span className="text-slate-500">➔</span>
            <div className="text-center">
              <span className="text-emerald-400 font-bold block">Core Services</span>
              <span className="text-slate-400 text-[10px]">Microservices / Agents</span>
            </div>
            <span className="text-slate-500">➔</span>
            <div className="text-center">
              <span className="text-purple-400 font-bold block">Data & AI Fabric</span>
              <span className="text-slate-400 text-[10px]">DB, Vector & Telemetry</span>
            </div>
          </div>
        </div>
      );
  }
};
