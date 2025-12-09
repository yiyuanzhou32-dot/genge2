export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  iconName: 'Globe' | 'BookOpen' | 'FileText' | 'Tree' | 'Briefcase' | 'Award';
  category: CategoryType;
}

export enum CategoryType {
  NATIONAL_PARKS = 'NATIONAL_PARKS',
  POLICY = 'POLICY',
  ACADEMIC = 'ACADEMIC',
  CAREER_NEWS = 'CAREER_NEWS',
}

export interface NavCategory {
  id: CategoryType;
  label: string;
  description: string;
}

export type AIToolMode = 'chat' | 'translate' | 'summarize';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
