import React, { useState } from 'react';
import { COGNIZANT_PROJECTS } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Cpu, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Insurance & AI', 'FinTech & Compliance', 'AIOps & Infrastructure', 'Pharma & Compliance', 'Process Automation'];

  const filteredProjects = COGNIZANT_PROJECTS.filter((proj) => {
    if (filterCategory === 'All') return true;
    return proj.category === filterCategory;
  });

  return (
    <section id="projects" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Enterprise Delivery & High Impact Implementations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              Featured Enterprise Work (Cognizant & Client Engagements)
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
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
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400 font-bold">
                    {project.role}
                  </span>
                  <span className="text-slate-400 font-semibold">{project.company}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Scope */}
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Scope</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.scope}</p>
                </div>

                {/* Outcome */}
                <div>
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">Business Outcome</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.outcome}</p>
                </div>

                {/* Metrics Badges */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-slate-400">Impact Metrics</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.impactMetrics.map((m, mIdx) => (
                      <span key={mIdx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold">
                        <Zap className="w-3 h-3" />
                        <span>{m}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Tech Stack */}
              <div className="pt-4 mt-4 border-t border-slate-800/80">
                <div className="text-[10px] font-mono uppercase text-slate-400 mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-slate-950 rounded border border-slate-800 text-[10px] font-mono text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
