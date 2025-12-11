export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  emoji: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface TechItem {
  category: string;
  tools: string[];
}
