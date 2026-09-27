import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, ShieldCheck, Cpu, Sparkles, CheckCircle2, FileText, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200">

      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.10),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Main Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6"
          >

            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">Enterprise AI</span> & Digital Transformation
            </h1>

            {/* Executive Summary */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Key Achievements Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {PERSONAL_INFO.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
                  className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#slide-deck"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-lg shadow-amber-500/25 transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Interactive Slide Deck (14 Topics)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#blueprint"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
              >
                <Cpu className="w-4 h-4 text-cyan-600" />
                <span>Reference Architecture</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-medium text-xs text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>Resume PDF</span>
                <Download className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Phone & Contact Badge */}
            <div className="pt-4 flex items-center gap-4 text-xs text-slate-500 border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>Direct: <strong className="text-slate-800">{PERSONAL_INFO.phone}</strong></span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-slate-600">TOGAF 2025 Certified</span>
              </div>
            </div>

          </motion.div>

          {/* Right Visual / Proof Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5"
          >
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60 relative">
              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-bold uppercase">
                Enterprise Blueprint 2026
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-amber-600 font-bold text-xl flex items-center justify-center">
                    18+
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Years Enterprise Leadership</div>
                    <div className="text-xs text-slate-500">Cognizant · Capgemini · Accenture · HCL</div>
                  </div>
                </div>

                {/* Metrics Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
                    <div className="text-xl font-black text-emerald-600">40%</div>
                    <div className="text-[11px] font-medium text-slate-700">Cost Reduction</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Agentic Compliance Workflows</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all">
                    <div className="text-xl font-black text-cyan-600">&gt;80%</div>
                    <div className="text-[11px] font-medium text-slate-700">MTTR Reduction</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">BlueBolt DB AI Optimizer</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
                    <div className="text-xl font-black text-amber-600">14+</div>
                    <div className="text-[11px] font-medium text-slate-700">Architecture Topics</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Published Thought Leadership</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="text-xl font-black text-purple-600">Multi-Cloud</div>
                    <div className="text-[11px] font-medium text-slate-700">AWS + Azure + GCP</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Microservices & Serverless</div>
                  </div>
                </div>

                {/* Core Frameworks badge bar */}
                <div className="pt-2">
                  <div className="text-[11px] font-semibold uppercase text-slate-400 mb-2">Primary Tooling & Frameworks</div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                    <span className="px-2 py-1 bg-slate-50 rounded border border-slate-200">LangChain / LangGraph</span>
                    <span className="px-2 py-1 bg-slate-50 rounded border border-slate-200">CrewAI / AutoGen</span>
                    <span className="px-2 py-1 bg-slate-50 rounded border border-slate-200">Azure AI Foundry</span>
                    <span className="px-2 py-1 bg-slate-50 rounded border border-slate-200">AWS Bedrock / SageMaker</span>
                    <span className="px-2 py-1 bg-slate-50 rounded border border-slate-200">N8N / Otera AI</span>
                    <span className="px-2 py-1 bg-slate-50 rounded border border-slate-200">Camunda / .NET</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
