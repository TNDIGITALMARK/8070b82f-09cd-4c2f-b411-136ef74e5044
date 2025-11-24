'use client';

import { Header } from '@/components/network/Header';
import { ProfileCard } from '@/components/network/ProfileCard';
import { ExperienceSection } from '@/components/network/ExperienceSection';
import { SkillsSection } from '@/components/network/SkillsSection';
import { currentUser, mockExperiences, mockSkills, mockAchievements } from '@/lib/data/mockData';
import { Card } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="space-y-6">
          {/* Profile Card */}
          <ProfileCard user={currentUser} isCurrentUser />

          {/* About Section */}
          <Card className="p-5 shadow-card">
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm leading-relaxed text-foreground">
              {currentUser.bio || 'Creative product designer with a passion for user-centered design. Specialized in SaaS and mobile applications with 6+ years of experience in the tech industry. I believe in the power of design to solve complex problems and create delightful user experiences.'}
            </p>
          </Card>

          {/* Experience Section */}
          <ExperienceSection experiences={mockExperiences} />

          {/* Skills Section */}
          <SkillsSection skills={mockSkills} isCurrentUser />

          {/* Achievements Section */}
          <Card className="p-5 shadow-card">
            <h3 className="text-lg font-semibold mb-4">Achievements</h3>
            <div className="space-y-4">
              {mockAchievements.map((achievement) => (
                <div key={achievement.id} className="flex gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(achievement.date).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
