import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArchitectureBlueprint } from './components/ArchitectureBlueprint';
import { SlideDeck } from './components/SlideDeck';
import { Projects } from './components/Projects';
import { Expertise } from './components/Expertise';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('blueprint');

  // Track active scroll section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['blueprint', 'slide-deck', 'projects', 'expertise', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">
      
      {/* Top Anchor */}
      <div id="top" />

      {/* Fixed Navigation Header */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Executive Hero */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Enterprise Reference Architecture Blueprint */}
        <ArchitectureBlueprint />

        {/* Interactive Slide Deck of 14 LinkedIn Architecture Topics */}
        <SlideDeck />

        {/* Key Enterprise Projects & Delivery */}
        <Projects />

        {/* Core Competencies & Mastery */}
        <Expertise />

        {/* Professional Career History */}
        <ExperienceTimeline />

        {/* Academic & Certifications */}
        <EducationCertifications />

        {/* Contact & Consultation Form */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Resume PDF / Printable View Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
