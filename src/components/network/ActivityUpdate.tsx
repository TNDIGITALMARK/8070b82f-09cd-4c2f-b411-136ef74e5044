'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import type { ActivityUpdate as ActivityUpdateType } from '@/lib/types/network';

interface ActivityUpdateProps {
  activity: ActivityUpdateType;
}

export function ActivityUpdate({ activity }: ActivityUpdateProps) {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      return `${Math.floor(diffInHours / 24)}d ago`;
    }
  };

  const getActivityText = () => {
    switch (activity.type) {
      case 'connection':
        return (
          <>
            <span className="font-semibold">{activity.user.name}</span> {activity.content}{' '}
            <span className="font-semibold">{activity.targetUser?.name}</span>
          </>
        );
      case 'milestone':
      case 'endorsement':
        return (
          <>
            <span className="font-semibold">{activity.user.name}</span> {activity.content}
            {activity.targetUser && (
              <>
                {' '}for <span className="font-semibold">{activity.targetUser.name}</span>
              </>
            )}
          </>
        );
      default:
        return <span>{activity.content}</span>;
    }
  };

  return (
    <Card className="p-4 shadow-card hover:shadow-card-hover transition-shadow">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
          <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <p className="text-sm leading-relaxed">
            {getActivityText()}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {formatTimestamp(activity.timestamp)}
          </p>
        </div>
      </div>
    </Card>
  );
}
