'use client';

import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { JobRecommendation } from '@/lib/types/network';

interface JobRecommendationsProps {
  jobs: JobRecommendation[];
}

export function JobRecommendations({ jobs }: JobRecommendationsProps) {
  const formatPostedDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return `${diffInDays}d ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <Card className="p-4 shadow-card">
      <h3 className="font-semibold mb-4">Job Recommendations</h3>

      <div className="space-y-4">
        {jobs.slice(0, 3).map((job) => (
          <div key={job.id} className="pb-4 border-b last:border-0 last:pb-0">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center shrink-0">
                <Briefcase className="h-6 w-6 text-muted-foreground" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm line-clamp-1">{job.title}</h4>
                <p className="text-sm text-foreground">{job.company}</p>

                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                  <Badge variant="secondary" className="text-xs px-2 py-0">
                    {job.type}
                  </Badge>
                </div>

                {job.salary && (
                  <p className="text-xs text-muted-foreground mt-1">{job.salary}</p>
                )}

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formatPostedDate(job.postedDate)}
                  </span>
                  {job.applicants && (
                    <span className="text-xs text-muted-foreground">
                      {job.applicants} applicants
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="ghost" size="sm" className="w-full mt-2 text-primary">
        See all jobs
      </Button>
    </Card>
  );
}
