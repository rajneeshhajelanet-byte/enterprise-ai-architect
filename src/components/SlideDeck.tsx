import React, { useState, useEffect } from 'react';
import { ARTICLE_TOPICS } from '../data/portfolioData';
import { ArticleTopic, TopicCategory } from '../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Search,
  SlidersHorizontal,
  BookOpen,
  Maximize2,
  X,
  CheckCircle2,
  Grid,
  Presentation,
  Sparkles
} from 'lucide-react';

export const SlideDeck: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'slide' | 'grid'>('slide');

  const categories: TopicCategory[] = [
    'All',
    'AI & Agentic Systems',
    'Cloud Architecture',
    'AIOps & Observability',
    'Microservices & Patterns',
    'Security & Identity'
  ];

  // Filter topics
  const filteredTopics = ARTICLE_TOPICS.filter((topic) => {
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Keep active index within bounds
  useEffect(() => {
    if (activeSlideIndex >= filteredTopics.length) {
      setActiveSlideIndex(0);
    }
  }, [filteredTopics.length, activeSlideIndex]);

  const currentTopic: ArticleTopic | undefined = filteredTopics[activeSlideIndex] || ARTICLE_TOPICS[0];

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : filteredTopics.length - 1));
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev < filteredTopics.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen && viewMode !== 'slide') return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, viewMode, filteredTopics.length]);

  return (
    <section id="slide-deck" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Thought Leadership & Architecture Slides</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Interactive Architecture Slide Deck (14 Topics)
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-xl">
                Published technical articles by Rajneesh Prakash Hajela on LinkedIn Pulse. Click any slide or topic tab to view detailed parameters and architecture diagrams.
              </p>
            </div>

            {/* View Mode Switcher & Counter */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 text-xs font-medium shadow-sm">
                <button
                  onClick={() => setViewMode('slide')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                    viewMode === 'slide'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Presentation className="w-3.5 h-3.5" />
                  <span>Slide Deck</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Grid View</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Filter Bar & Search */}
        <Reveal delay={0.05}>
          <div className="bg-white p-4 rounded-xl border border-slate-200 mb-8 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

              {/* Category Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0 scrollbar-none text-xs font-medium">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setActiveSlideIndex(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-sm'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-64 shrink-0">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 14 topics..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveSlideIndex(0);
                  }}
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400"
                />
              </div>

            </div>
          </div>
        </Reveal>

        {/* SLIDE DECK VIEW */}
        {viewMode === 'slide' && currentTopic && (
          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60 overflow-hidden relative">

              {/* Slide Header */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-700 rounded-full">
                    Slide {currentTopic.slideNumber} of 14
                  </span>
                  <span className="text-xs text-slate-500">
                    Category: <strong className="text-slate-700">{currentTopic.category}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden sm:inline">{currentTopic.readTime}</span>
                  <a
                    href={currentTopic.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Read LinkedIn Pulse</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-500 border border-slate-200"
                    title="Expand Fullscreen Slide"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slide Body */}
              <div className="p-6 md:p-8 space-y-6">

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {currentTopic.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium">
                    {currentTopic.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs md:text-sm text-slate-600 leading-relaxed">
                  {currentTopic.summary}
                </div>

                {/* Dynamic Visual Architecture Diagram */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Architecture Blueprint / Execution Flow
                  </div>
                  <ArchitectureDiagram type={currentTopic.diagramType} />
                </div>

                {/* Six Parameters / Architectural Breakdown */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Key Architectural Parameters & Pillars</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentTopic.keyParameters.map((param, pIdx) => (
                      <div key={pIdx} className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-amber-700 px-1.5 py-0.5 bg-amber-50 rounded border border-amber-200">
                            {param.num}
                          </span>
                          <h4 className="text-xs font-bold text-slate-800">{param.title}</h4>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">{param.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Highlights Bullets */}
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Enterprise Implementation Value
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentTopic.architecturePoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Slide Navigation Controls Bar */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Slide</span>
                </button>

                <div className="text-xs text-slate-400 hidden sm:block">
                  Use <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-slate-600">←</kbd> and <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-slate-600">→</kbd> keys to navigate
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Next Slide</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </Reveal>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic, idx) => (
              <RevealItem key={topic.id}>
                <div
                  className="h-full bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold">
                        Slide {topic.slideNumber}
                      </span>
                      <span className="text-slate-400">{topic.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {topic.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-3">
                      {topic.summary}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {topic.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] text-slate-500">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setActiveSlideIndex(idx);
                        setViewMode('slide');
                      }}
                      className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
                    >
                      <span>View Slide & Diagram</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={topic.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 border border-slate-200"
                      title="Read on LinkedIn"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

      </div>

      {/* FULLSCREEN SLIDE MODAL */}
      {isModalOpen && currentTopic && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl p-4 md:p-8 overflow-y-auto flex flex-col justify-between">
          <div className="max-w-6xl mx-auto w-full space-y-6">

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 bg-amber-500 text-slate-950 rounded">
                  Slide {currentTopic.slideNumber} / 14
                </span>
                <span className="text-sm font-bold text-slate-200">{currentTopic.category}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentTopic.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded bg-amber-500 text-slate-950 text-xs font-bold"
                >
                  <span>Open Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-100">{currentTopic.title}</h2>
              <p className="text-sm md:text-base text-slate-300">{currentTopic.subtitle}</p>

              <ArchitectureDiagram type={currentTopic.diagramType} className="my-4" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentTopic.keyParameters.map((param, pIdx) => (
                  <div key={pIdx} className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-xs font-mono text-amber-400 font-bold block mb-1">{param.num} · {param.title}</span>
                    <p className="text-xs text-slate-300">{param.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Nav */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-slate-200 text-xs font-bold rounded border border-slate-800"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold rounded"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
