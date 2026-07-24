import React from 'react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Education */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-100">
                Education & Degrees
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      {edu.year}
                    </span>
                    <span className="text-slate-400">{edu.institution}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{edu.degree}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Professional Credentials</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-100">
                Certifications & Badges
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS_LIST.map((cert) => (
                <div key={cert.id} className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">{cert.name}</h3>
                    {cert.issuer && <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] font-mono">
                    <span className="text-emerald-400 font-bold">{cert.badge}</span>
                    <span className="text-slate-500">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
