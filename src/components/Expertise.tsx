import React from 'react';
import { COMPETENCY_GROUPS } from '../data/portfolioData';
import { Award, ShieldCheck, Building2, Bot, Cloud, CheckCircle2, Sparkles } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

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
    <section id="expertise" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <Reveal>
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Core Architectural Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Technical Leadership & Mastery
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              A comprehensive matrix combining enterprise TOGAF framework methodology with cutting-edge agentic AI, multi-cloud platforms, and operational governance.
            </p>
          </div>
        </Reveal>

        {/* Competency Groups Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPETENCY_GROUPS.map((group, idx) => {
            const IconComp = getIcon(group.iconName);
            return (
              <RevealItem key={idx}>
                <div className="h-full bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 space-y-4 shadow-sm">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-amber-600 block">{group.category}</span>
                      <h3 className="text-base font-bold text-slate-900">{group.title}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Certifications Banner */}
        <Reveal delay={0.1}>
          <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-amber-700 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Certified Enterprise Architectural Credentials</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">TOGAF Certified & Azure Architect</h3>
              <p className="text-xs text-slate-600 mt-1">
                Fully credentialed in enterprise TOGAF methodology, Azure Cloud Solution Architecture, and AI Context Engineering.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 bg-white rounded-lg border border-amber-300 text-amber-700 text-xs font-bold shadow-sm">
                TOGAF 2025 Certified
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-cyan-300 text-cyan-700 text-xs font-bold shadow-sm">
                Azure Solution Architect
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-emerald-300 text-emerald-700 text-xs font-bold shadow-sm">
                AI Context Engineering
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
