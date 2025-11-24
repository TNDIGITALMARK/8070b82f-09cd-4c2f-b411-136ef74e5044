/**
 * Network Pro - Type Definitions
 * Professional networking platform types
 */

export interface User {
  id: string;
  name: string;
  jobTitle: string;
  company: string;
  location: string;
  avatar: string;
  coverImage?: string;
  bio?: string;
  connections: number;
  isConnected?: boolean;
  isPending?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined means current
  description?: string;
  current?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  endorsements: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: string;
  date: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
}

export interface ActivityUpdate {
  id: string;
  type: 'connection' | 'milestone' | 'endorsement' | 'post';
  user: User;
  targetUser?: User;
  content: string;
  timestamp: string;
}

export interface JobRecommendation {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary?: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  postedDate: string;
  applicants?: number;
}

export interface ConnectionFilter {
  industry?: string;
  location?: string;
  company?: string;
  mutualConnections?: boolean;
}

export interface SearchFilters {
  query: string;
  industry?: string;
  location?: string;
  company?: string;
}
