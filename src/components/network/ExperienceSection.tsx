'use client';

import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Experience } from '@/lib/types/network';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const calculateDuration = (start: string, end?: string) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
      return `${years} yr ${remainingMonths} mo`;
    } else if (years > 0) {
      return `${years} yr`;
    } else {
      return `${remainingMonths} mo`;
    }
  };

  return (
    <Card className="p-5 shadow-card">
      <h3 className="text-lg font-semibold mb-4">Experience</h3>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={index > 0 ? 'pt-6 border-t' : ''}>
            <div className="flex gap-3">
              {/* Company Logo Placeholder */}
              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center shrink-0">
                <Briefcase className="h-6 w-6 text-muted-foreground" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold">{exp.title}</h4>
                <p className="text-sm text-foreground mt-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate!)} · {calculateDuration(exp.startDate, exp.endDate)}
                </p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>

                {exp.description && (
                  <p className="text-sm text-foreground mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
