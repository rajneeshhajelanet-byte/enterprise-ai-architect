import React, { useState } from 'react';
import { COGNIZANT_PROJECTS } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Cpu, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export const Projects: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Insurance & AI', 'FinTech & Compliance', 'AIOps & Infrastructure', 'Pharma & Compliance', 'Process Automation', 'SDLC & DevOps'];

  const filteredProjects = COGNIZANT_PROJECTS.filter((proj) => {
    if (filterCategory === 'All') return true;
    return proj.category === filterCategory;
  });

  return (
    <section id="projects" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Enterprise Delivery & High Impact Implementations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Featured Enterprise Work (Cognizant & Client Engagements)
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-xl">
                Proven, production-ready AI solutions architected and delivered across Insurance, Financial Services, Operations, and Healthcare.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none text-xs font-medium">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    filterCategory === cat
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-sm shadow-amber-500/30'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <RevealItem key={project.id}>
              <div
                className="h-full bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-4">

                  {/* Header Badge */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold">
                      {project.role}
                    </span>
                    <span className="text-slate-400 font-semibold">{project.company}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Scope */}
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Scope</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{project.scope}</p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-1">Business Outcome</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{project.outcome}</p>
                  </div>

                  {/* Metrics Badges */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                    <div className="text-[10px] font-semibold uppercase text-slate-400">Impact Metrics</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.impactMetrics.map((m, mIdx) => (
                        <span key={mIdx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                          <Zap className="w-3 h-3" />
                          <span>{m}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Tech Stack */}
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <div className="text-[10px] font-semibold uppercase text-slate-400 mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-slate-50 rounded border border-slate-200 text-[10px] text-slate-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </RevealItem>
          ))}
        </RevealGroup>

      </div>
    </section>
  );
};
