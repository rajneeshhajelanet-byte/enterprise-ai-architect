import React from 'react';
import { COMPETENCY_GROUPS } from '../data/portfolioData';
import { Award, ShieldCheck, Building2, Bot, Cloud, CheckCircle2, Sparkles } from 'lucide-react';

export const Expertise: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Bot': return Bot;
      case 'Cloud': return Cloud;
      case 'ShieldCheck': return ShieldCheck;
      default: return Award;
    }
  };

  return (
    <section id="expertise" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Core Architectural Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Technical Leadership & Mastery
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            A comprehensive matrix combining enterprise TOGAF framework methodology with cutting-edge agentic AI, multi-cloud platforms, and operational governance.
          </p>
        </div>

        {/* Competency Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPETENCY_GROUPS.map((group, idx) => {
            const IconComp = getIcon(group.iconName);
            return (
              <div
                key={idx}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors space-y-4"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">{group.category}</span>
                    <h3 className="text-base font-bold text-slate-100">{group.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Banner */}
        <div className="mt-8 p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Certified Enterprise Architectural Credentials</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100">TOGAF Certified & Azure Architect</h3>
            <p className="text-xs text-slate-400 mt-1">
              Fully credentialed in enterprise TOGAF methodology, Azure Cloud Solution Architecture, and AI Context Engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1.5 bg-slate-950 rounded-lg border border-amber-500/40 text-amber-400 text-xs font-mono font-bold">
              TOGAF 2025 Certified
            </span>
            <span className="px-3 py-1.5 bg-slate-950 rounded-lg border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold">
              Azure Solution Architect
            </span>
            <span className="px-3 py-1.5 bg-slate-950 rounded-lg border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
              AI Context Engineering
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
