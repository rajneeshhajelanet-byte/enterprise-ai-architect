import React from 'react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Education */}
          <div className="space-y-6">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic Foundation</span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Education & Degrees
                </h2>
              </div>
            </Reveal>

            <RevealGroup className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <RevealItem key={edu.id}>
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 space-y-2 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-amber-700 font-bold px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                        {edu.year}
                      </span>
                      <span className="text-slate-400">{edu.institution}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{edu.details}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>Professional Credentials</span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Certifications & Badges
                </h2>
              </div>
            </Reveal>

            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS_LIST.map((cert) => (
                <RevealItem key={cert.id}>
                  <div className="h-full p-5 bg-white rounded-2xl border border-slate-200 space-y-3 hover:border-amber-300 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 shadow-sm">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{cert.name}</h3>
                      {cert.issuer && <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px]">
                      <span className="text-emerald-600 font-bold">{cert.badge}</span>
                      <span className="text-slate-400">{cert.year}</span>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

        </div>

      </div>
    </section>
  );
};
