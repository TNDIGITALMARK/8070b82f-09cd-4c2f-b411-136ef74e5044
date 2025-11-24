'use client';

import { Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Skill } from '@/lib/types/network';

interface SkillsSectionProps {
  skills: Skill[];
  isCurrentUser?: boolean;
}

export function SkillsSection({ skills, isCurrentUser = false }: SkillsSectionProps) {
  return (
    <Card className="p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Skills</h3>
        {isCurrentUser && (
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div key={skill.id} className="group relative">
            <Badge
              variant="secondary"
              className="px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors cursor-pointer"
            >
              {skill.name}
              {skill.endorsements > 0 && (
                <span className="ml-2 text-xs text-muted-foreground">
                  {skill.endorsements}
                </span>
              )}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
