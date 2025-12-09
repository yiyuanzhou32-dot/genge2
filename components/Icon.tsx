import React from 'react';
import { Globe, BookOpen, FileText, Trees, Briefcase, Award, Search, MessageSquare, Languages, FileOutput, ArrowRight, ExternalLink, X, Loader2 } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 20 }) => {
  const icons: Record<string, React.ElementType> = {
    Globe,
    BookOpen,
    FileText,
    Tree: Trees,
    Briefcase,
    Award,
    Search,
    MessageSquare,
    Languages,
    FileOutput,
    ArrowRight,
    ExternalLink,
    X,
    Loader2
  };

  const LucideIcon = icons[name] || Globe;
  return <LucideIcon className={className} size={size} />;
};
