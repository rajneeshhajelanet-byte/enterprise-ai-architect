import React, { useState } from 'react';
import { CAREER_HISTORY } from '../data/portfolioData';
import { Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('cognizant');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <Reveal>
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>18+ Years Professional Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Professional Experience Timeline
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Demonstrated trajectory of technical excellence, consulting leadership, and enterprise architecture across global technology leaders.
            </p>
          </div>
        </Reveal>

        {/* Timeline Items */}
        <RevealGroup className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-8" stagger={0.1}>
          {CAREER_HISTORY.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <RevealItem key={item.id}>
                <div className="relative pl-6 md:pl-10 group">

                  {/* Timeline Dot Marker */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-500 group-hover:bg-amber-500 transition-colors" />

                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 space-y-4 shadow-sm">

                    {/* Item Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-0.5">
                          {item.company}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 rounded-full border border-slate-200 text-xs text-slate-600">
                          <Calendar className="w-3.5 h-3.5 text-amber-500" />
                          <span>{item.period}</span>
                        </span>

                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="p-1.5 rounded-lg bg-slate-50 text-slate-500 hover:text-slate-900 border border-slate-200"
                          title="Toggle Details"
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-0.5 bg-slate-50 rounded-md border border-slate-200 text-[11px] text-slate-600">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Responsibilities */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-slate-100 space-y-2">
                        <div className="text-xs font-semibold uppercase text-slate-400 mb-2">Key Contributions & Architecture Scope</div>
                        <div className="space-y-2">
                          {item.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

      </div>
    </section>
  );
};
