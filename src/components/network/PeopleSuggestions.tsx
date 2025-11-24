'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { User } from '@/lib/types/network';

interface PeopleSuggestionsProps {
  suggestions: User[];
}

export function PeopleSuggestions({ suggestions }: PeopleSuggestionsProps) {
  return (
    <Card className="p-4 shadow-card">
      <h3 className="font-semibold mb-4">People You May Know</h3>

      <div className="space-y-4">
        {suggestions.map((user) => (
          <div key={user.id} className="flex items-start gap-3">
            <Avatar className="h-12 w-12 shrink-0">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm truncate">{user.name}</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {user.jobTitle} at {user.company}
              </p>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Connect
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
