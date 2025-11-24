'use client';

import { Header } from '@/components/network/Header';
import { ProfileCard } from '@/components/network/ProfileCard';
import { PostCard } from '@/components/network/PostCard';
import { PeopleSuggestions } from '@/components/network/PeopleSuggestions';
import { JobRecommendations } from '@/components/network/JobRecommendations';
import { ActivityUpdate } from '@/components/network/ActivityUpdate';
import { currentUser, mockPosts, mockActivities, mockSuggestions, mockJobs } from '@/lib/data/mockData';
import { Pencil } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Profile Summary */}
          <aside className="lg:col-span-3 space-y-4">
            <ProfileCard user={currentUser} isCurrentUser />

            {/* Quick Stats Card */}
            <Card className="p-4 shadow-card space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Profile views</span>
                <span className="font-semibold text-primary">127</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Post impressions</span>
                <span className="font-semibold text-primary">2,456</span>
              </div>
            </Card>
          </aside>

          {/* Main Feed */}
          <main className="lg:col-span-6 space-y-4">
            {/* Create Post Card */}
            <Card className="p-4 shadow-card">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Pencil className="h-5 w-5 text-muted-foreground" />
                </div>
                <Button
                  variant="outline"
                  className="flex-1 justify-start text-muted-foreground font-normal"
                >
                  Start a post...
                </Button>
              </div>
            </Card>

            {/* Activity Updates */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-muted-foreground px-2">Recent Activity</h2>
              {mockActivities.map((activity) => (
                <ActivityUpdate key={activity.id} activity={activity} />
              ))}
            </div>

            {/* Posts Feed */}
            <div className="space-y-4 pt-2">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </main>

          {/* Right Sidebar - Recommendations */}
          <aside className="lg:col-span-3 space-y-4">
            <PeopleSuggestions suggestions={mockSuggestions} />
            <JobRecommendations jobs={mockJobs} />
          </aside>
        </div>
      </div>
    </div>
  );
}
