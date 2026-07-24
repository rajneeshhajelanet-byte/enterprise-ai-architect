import React from 'react';
import { ArrowRight, Download, ShieldCheck, Cpu, Sparkles, CheckCircle2, FileText, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-800/80">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Enterprise AI</span> & Digital Transformation
            </h1>

            {/* Executive Summary */}
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Key Achievements Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {PERSONAL_INFO.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#slide-deck"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Interactive Slide Deck (14 Topics)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#blueprint"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Reference Architecture</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-medium text-xs text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Resume PDF</span>
                <Download className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Phone & Contact Badge */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct: <strong className="text-slate-200">{PERSONAL_INFO.phone}</strong></span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-300">TOGAF 2025 Certified</span>
              </div>
            </div>

          </div>

          {/* Right Visual / Proof Card */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl relative">
              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold uppercase">
                Enterprise Blueprint 2026
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xl flex items-center justify-center">
                    18+
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-100">Years Enterprise Leadership</div>
                    <div className="text-xs text-slate-400">Cognizant · Capgemini · Accenture · HCL</div>
                  </div>
                </div>

                {/* Metrics Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                    <div className="text-xl font-black text-emerald-400">40%</div>
                    <div className="text-[11px] font-medium text-slate-300">Cost Reduction</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Agentic Compliance Workflows</div>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                    <div className="text-xl font-black text-cyan-400">&gt;80%</div>
                    <div className="text-[11px] font-medium text-slate-300">MTTR Reduction</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">BlueBolt DB AI Optimizer</div>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                    <div className="text-xl font-black text-amber-400">14+</div>
                    <div className="text-[11px] font-medium text-slate-300">Architecture Topics</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Published Thought Leadership</div>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                    <div className="text-xl font-black text-purple-400">Multi-Cloud</div>
                    <div className="text-[11px] font-medium text-slate-300">AWS + Azure + GCP</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Microservices & Serverless</div>
                  </div>
                </div>

                {/* Core Frameworks badge bar */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">Primary Tooling & Frameworks</div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
                    <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">LangChain / LangGraph</span>
                    <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">CrewAI / AutoGen</span>
                    <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">Azure AI Foundry</span>
                    <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">AWS Bedrock / SageMaker</span>
                    <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">N8N / Otera AI</span>
                    <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">Camunda / .NET</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
