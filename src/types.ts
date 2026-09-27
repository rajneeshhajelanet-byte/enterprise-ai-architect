export type TopicCategory = 
  | 'All' 
  | 'AI & Agentic Systems' 
  | 'Cloud Architecture' 
  | 'AIOps & Observability' 
  | 'Microservices & Patterns' 
  | 'Security & Identity';

export interface KeyParameter {
  num: string;
  title: string;
  description: string;
}

export interface ArticleTopic {
  id: string;
  slideNumber: number;
  title: string;
  subtitle: string;
  category: TopicCategory;
  linkedinUrl: string;
  summary: string;
  keyParameters: KeyParameter[];
  architecturePoints: string[];
  diagramType: 
    | 'six-parameters'
    | 'cloud-agnostic'
    | 'aiops'
    | 'multi-agent'
    | 'ai-workflows'
    | 'azure-rbac'
    | 'azure-functions'
    | 'microservices-eda'
    | 'resilience-patterns'
    | 'event-sourcing-saga'
    | 'cognitive-search'
    | 'face-recognition'
    | 'cqrs'
    | 'cloud-mapping';
  readTime: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  company: string;
  scope: string;
  outcome: string;
  impactMetrics: string[];
  techStack: string[];
  category: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  skills: string[];
  projects?: ProjectItem[];
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer?: string;
  year: string;
  badge?: string;
}

export interface CompetencyGroup {
  title: string;
  category: string;
  items: string[];
  iconName: string;
}
