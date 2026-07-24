import React, { useState } from 'react';
import { CAREER_HISTORY } from '../data/portfolioData';
import { Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('cognizant');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>18+ Years Professional Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Professional Experience Timeline
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Demonstrated trajectory of technical excellence, consulting leadership, and enterprise architecture across global technology leaders.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-8">
          {CAREER_HISTORY.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="relative pl-6 md:pl-10 group">
                
                {/* Timeline Dot Marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-500 group-hover:bg-amber-500 transition-colors" />

                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
                  
                  {/* Item Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                        {item.company}
                      </div>
                      <h3 className="text-lg font-bold text-slate-100">{item.role}</h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-950 rounded-full border border-slate-800 text-xs font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.period}</span>
                      </span>

                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                        title="Toggle Details"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-0.5 bg-slate-950 rounded-md border border-slate-800 text-[11px] font-mono text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Responsibilities */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-800/80 space-y-2">
                      <div className="text-xs font-mono uppercase text-slate-400 mb-2">Key Contributions & Architecture Scope</div>
                      <div className="space-y-2">
                        {item.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
