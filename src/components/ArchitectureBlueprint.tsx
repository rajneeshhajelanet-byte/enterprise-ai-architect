import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, Database, Network, Key, CheckCircle } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export const ArchitectureBlueprint: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(3);

  const layers = [
    {
      num: '00',
      title: 'Business Strategy & Operating Model',
      icon: Cpu,
      color: 'border-slate-300 text-slate-600',
      bullets: [
        'High-ROI capability mapping & use case prioritization',
        'Target Operating Model (TOM) & product team ownership',
        'FinOps, token budgeting, and value realization tracking'
      ]
    },
    {
      num: '01',
      title: 'Experiences & Integrations',
      icon: Network,
      color: 'border-blue-300 text-blue-600',
      bullets: [
        'Omnichannel copilots, IVR call deflection, and web portals',
        'Salesforce CRM, ERP, NetSuite & Intacct enterprise sync',
        'Event-driven triggers, REST APIs & webhook listeners'
      ]
    },
    {
      num: '02',
      title: 'AI Gateway & Access Control',
      icon: Key,
      color: 'border-indigo-300 text-indigo-600',
      bullets: [
        'Azure AD B2C / Entra ID identity federation & OAuth 2.0',
        'Fine-grained claims, RBAC & Microsoft Graph API hooks',
        'Model-aware rate limiting, request caching & failover routing'
      ]
    },
    {
      num: '03',
      title: 'Agentic Orchestration & Workflow Runtime',
      icon: Layers,
      color: 'border-amber-400 text-amber-700 bg-amber-50',
      featured: true,
      bullets: [
        'LangChain, LangGraph, CrewAI & AutoGen multi-agent runtime',
        'Model Context Protocol (MCP) & secure tool execution gateway',
        'Human-in-the-loop approval checkpoints & state memory store'
      ]
    },
    {
      num: '04',
      title: 'Knowledge & Context Fabric (RAG)',
      icon: Database,
      color: 'border-cyan-300 text-cyan-600',
      bullets: [
        'Azure Cognitive Search (BM25 + Dense Vector + Re-ranking)',
        'Ontology & knowledge graphs (Neo4j / Qdrant vector store)',
        'Document intelligence, citation provenance & ACL security filters'
      ]
    },
    {
      num: '05',
      title: 'Model & ML Fabric',
      icon: Cpu,
      color: 'border-emerald-300 text-emerald-600',
      bullets: [
        'Azure AI Foundry, AWS Bedrock, SageMaker & OpenAI models',
        'LLMOps, MLflow tracking, prompt caching & fine-tuning',
        'Inference optimization, low-latency batch processing'
      ]
    },
    {
      num: '06',
      title: 'Enterprise Data & Infrastructure Foundation',
      icon: Database,
      color: 'border-purple-300 text-purple-600',
      bullets: [
        'Kubernetes (EKS / AKS), Docker, Helm & Terraform IaC',
        'PostgreSQL, SQL Server, Kafka event bus & Azure Service Bus',
        'Datadog + CloudWatch telemetry, BlueBolt DB query optimization'
      ]
    }
  ];

  const controlPlaneItems = [
    { title: 'Trust & Security', desc: 'Zero trust, RBAC, tool authorization, prompt injection defense' },
    { title: 'Governance & Risk', desc: 'NIST GenAI profile alignment, compliance logs, audit lineage' },
    { title: 'Evaluation & Quality', desc: 'RAG accuracy, hallucination checks, trajectory scoring' },
    { title: 'AIOps & Economics', desc: 'BlueBolt query tuning, token budget caps, 80%+ MTTR reduction' }
  ];

  return (
    <section id="blueprint" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1">
                Enterprise AI Architecture Blueprint
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                One Reusable Blueprint for GenAI, Agents & Microservices
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              A vendor-neutral, multi-cloud capability map designed for high-security enterprise environments across AWS, Azure, and on-premise systems.
            </p>
          </div>
        </Reveal>

        {/* Blueprint Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Cross-Cutting Control Plane */}
          <Reveal className="lg:col-span-4">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Cross-Cutting Control Plane</h3>
                  <p className="text-[11px] text-slate-500">Enforced across every layer of the architecture</p>
                </div>
              </div>

              <div className="space-y-3">
                {controlPlaneItems.map((cp, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all">
                    <div className="text-xs font-bold text-amber-600 mb-0.5">{cp.title}</div>
                    <div className="text-[11px] text-slate-600 leading-snug">{cp.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-200">
                Aligned with NIST GenAI Profile, OWASP Agentic Top 10 & TOGAF 2025.
              </div>
            </div>
          </Reveal>

          {/* Right: Architecture Stack Layers */}
          <RevealGroup className="lg:col-span-8 space-y-2.5" stagger={0.05}>
            {layers.map((layer, idx) => {
              const isSelected = selectedLayer === idx;
              return (
                <RevealItem key={layer.num}>
                  <div
                    onClick={() => setSelectedLayer(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      layer.featured ? layer.color : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    } ${isSelected ? 'ring-2 ring-amber-300 bg-amber-50/40' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500">
                          {layer.num}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span>{layer.title}</span>
                          {layer.featured && (
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full border border-amber-300">
                              Core Agentic Engine
                            </span>
                          )}
                        </h4>
                      </div>
                      <layer.icon className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>

                    {/* Layer Bullets */}
                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {layer.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200">
                            <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

        </div>

      </div>
    </section>
  );
};
