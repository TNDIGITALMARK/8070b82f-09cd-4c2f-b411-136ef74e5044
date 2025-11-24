/**
 * Network Pro - Mock Data
 * Realistic sample data for development and testing
 */

import { User, Experience, Skill, Achievement, Post, ActivityUpdate, JobRecommendation } from '../types/network';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    jobTitle: 'Senior Product Manager',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA',
    avatar: '/generated/profile-1.png',
    coverImage: '/generated/office-bg.png',
    bio: 'Passionate about building products that users love. 6+ years in product management with focus on AI/ML products.',
    connections: 847,
    isConnected: true,
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    jobTitle: 'Software Engineering Lead',
    company: 'DataScale Inc',
    location: 'Austin, TX',
    avatar: '/generated/profile-2.png',
    connections: 1203,
    isConnected: true,
  },
  {
    id: '3',
    name: 'Jennifer Kim',
    jobTitle: 'UX Design Manager',
    company: 'CreativeHub',
    location: 'Seattle, WA',
    avatar: '/generated/profile-3.png',
    connections: 654,
    isConnected: false,
    isPending: false,
  },
  {
    id: '4',
    name: 'David Park',
    jobTitle: 'Marketing Director',
    company: 'BrandWorks',
    location: 'New York, NY',
    avatar: '/generated/profile-1.png',
    connections: 982,
    isConnected: true,
  },
  {
    id: '5',
    name: 'Emily Watson',
    jobTitle: 'Data Scientist',
    company: 'AI Innovations',
    location: 'Boston, MA',
    avatar: '/generated/profile-2.png',
    connections: 567,
    isConnected: false,
    isPending: true,
  },
  {
    id: '6',
    name: 'James Wilson',
    jobTitle: 'VP of Engineering',
    company: 'CloudTech Corp',
    location: 'San Francisco, CA',
    avatar: '/generated/profile-3.png',
    connections: 1456,
    isConnected: true,
  },
];

// Current User Profile
export const currentUser: User = {
  id: 'current',
  name: 'Jane Doe',
  jobTitle: 'Product Designer',
  company: 'Digital Innovations',
  location: 'San Francisco, CA',
  avatar: '/generated/profile-1.png',
  coverImage: '/generated/office-bg.png',
  bio: 'Creative product designer with a passion for user-centered design. Specialized in SaaS and mobile applications.',
  connections: 532,
};

// Mock Experience Data
export const mockExperiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Product Manager',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA',
    startDate: '2021-03',
    current: true,
    description: 'Led product launch that increased user engagement by 40%. Managing cross-functional team of 12.',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'StartupHub Inc',
    location: 'San Francisco, CA',
    startDate: '2019-01',
    endDate: '2021-02',
    description: 'Launched 3 major features. Conducted user research with 200+ participants.',
  },
  {
    id: '3',
    title: 'Associate Product Manager',
    company: 'Tech Giants Corp',
    location: 'Mountain View, CA',
    startDate: '2017-06',
    endDate: '2018-12',
    description: 'Worked on mobile app redesign. Increased app store rating from 3.8 to 4.6 stars.',
  },
];

// Mock Skills
export const mockSkills: Skill[] = [
  { id: '1', name: 'Product Strategy', endorsements: 47 },
  { id: '2', name: 'User Research', endorsements: 38 },
  { id: '3', name: 'Agile Development', endorsements: 42 },
  { id: '4', name: 'Data Analysis', endorsements: 35 },
  { id: '5', name: 'Stakeholder Management', endorsements: 29 },
  { id: '6', name: 'Product Roadmap', endorsements: 33 },
  { id: '7', name: 'A/B Testing', endorsements: 26 },
  { id: '8', name: 'SQL', endorsements: 22 },
];

// Mock Achievements
export const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Product Leadership Award 2023',
    description: 'Recognized for outstanding product innovation and team leadership',
    date: '2023-12',
  },
  {
    id: '2',
    title: 'Certified Product Manager',
    description: 'Product Management Institute Certification',
    date: '2022-06',
  },
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: '1',
    author: mockUsers[1],
    content: 'Excited to share insights from the AI Innovation Summit! 🚀 The future of machine learning in product development is incredibly promising. Key takeaway: Focus on ethical AI and user privacy.',
    image: '/generated/office-bg.png',
    timestamp: '2024-01-15T10:30:00Z',
    likes: 24,
    comments: 8,
    shares: 3,
    isLiked: false,
  },
  {
    id: '2',
    author: mockUsers[0],
    content: 'Just wrapped up an amazing product launch! Our team worked tirelessly for 6 months, and seeing users engage with the new features is incredibly rewarding. Product management is all about the people - both your team and your users. 💼',
    timestamp: '2024-01-14T14:20:00Z',
    likes: 67,
    comments: 15,
    shares: 8,
    isLiked: true,
  },
  {
    id: '3',
    author: mockUsers[2],
    content: 'Sharing some thoughts on design systems and their impact on product velocity. Consistency matters! 🎨',
    timestamp: '2024-01-13T09:15:00Z',
    likes: 42,
    comments: 11,
    shares: 5,
    isLiked: false,
  },
  {
    id: '4',
    author: mockUsers[5],
    content: 'Reflecting on 5 years of engineering leadership: Build great teams, empower them, and get out of their way. Trust is everything.',
    timestamp: '2024-01-12T16:45:00Z',
    likes: 89,
    comments: 23,
    shares: 12,
    isLiked: true,
  },
];

// Mock Activity Updates
export const mockActivities: ActivityUpdate[] = [
  {
    id: '1',
    type: 'connection',
    user: mockUsers[2],
    targetUser: mockUsers[3],
    content: 'connected with',
    timestamp: '2024-01-15T08:00:00Z',
  },
  {
    id: '2',
    type: 'milestone',
    user: mockUsers[4],
    content: 'started a new position as Data Scientist at AI Innovations',
    timestamp: '2024-01-14T12:00:00Z',
  },
  {
    id: '3',
    type: 'endorsement',
    user: mockUsers[1],
    targetUser: mockUsers[0],
    content: 'endorsed Product Strategy skill',
    timestamp: '2024-01-13T15:30:00Z',
  },
];

// Mock Job Recommendations
export const mockJobs: JobRecommendation[] = [
  {
    id: '1',
    title: 'Senior Product Manager',
    company: 'Innovative Tech',
    location: 'Remote',
    salary: '$140k - $180k',
    type: 'Remote',
    postedDate: '2024-01-10',
    applicants: 47,
  },
  {
    id: '2',
    title: 'Product Manager - AI/ML',
    company: 'FutureTech Solutions',
    location: 'San Francisco, CA',
    salary: '$130k - $170k',
    type: 'Full-time',
    postedDate: '2024-01-12',
    applicants: 32,
  },
  {
    id: '3',
    title: 'Lead Product Designer',
    company: 'Design Studio Pro',
    location: 'New York, NY',
    salary: '$120k - $160k',
    type: 'Full-time',
    postedDate: '2024-01-14',
    applicants: 28,
  },
  {
    id: '4',
    title: 'VP of Product',
    company: 'StartupX',
    location: 'Austin, TX',
    salary: '$180k - $220k',
    type: 'Full-time',
    postedDate: '2024-01-13',
    applicants: 15,
  },
];

// Mock People You May Know
export const mockSuggestions: User[] = [
  mockUsers[2],
  mockUsers[4],
  {
    id: '7',
    name: 'Alex Thompson',
    jobTitle: 'Growth Marketing Lead',
    company: 'ScaleUp Inc',
    location: 'Denver, CO',
    avatar: '/generated/profile-2.png',
    connections: 423,
    isConnected: false,
    isPending: false,
  },
];
