'use client';

import { MapPin, Users, Edit2 } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { User } from '@/lib/types/network';

interface ProfileCardProps {
  user: User;
  isCurrentUser?: boolean;
}

export function ProfileCard({ user, isCurrentUser = false }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden shadow-card">
      {/* Cover Image */}
      {user.coverImage && (
        <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10 relative">
          <img
            src={user.coverImage}
            alt="Cover"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      )}

      <div className="p-5">
        {/* Avatar and Basic Info */}
        <div className="flex items-start gap-4 -mt-12 mb-4">
          <Avatar className="h-20 w-20 border-4 border-white shadow-md">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
          </Avatar>

          {isCurrentUser && (
            <Button variant="outline" size="sm" className="ml-auto mt-12">
              <Edit2 className="h-4 w-4 mr-2" />
              Edit
            </Button>
          )}
        </div>

        {/* User Details */}
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">{user.jobTitle}</p>
            <p className="text-sm text-muted-foreground">{user.company}</p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{user.connections} connections</span>
            </div>
          </div>

          {user.bio && (
            <p className="text-sm leading-relaxed pt-2 border-t">
              {user.bio}
            </p>
          )}

          {!isCurrentUser && (
            <div className="flex gap-2 pt-2">
              {user.isConnected ? (
                <Button variant="outline" size="sm" className="flex-1">
                  Message
                </Button>
              ) : user.isPending ? (
                <Button variant="outline" size="sm" className="flex-1" disabled>
                  Pending
                </Button>
              ) : (
                <Button size="sm" className="flex-1">
                  Connect
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
