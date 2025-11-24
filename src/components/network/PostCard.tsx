'use client';

import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Post } from '@/lib/types/network';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else if (diffInHours < 168) {
      return `${Math.floor(diffInHours / 24)}d ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <Card className="shadow-card hover:shadow-card-hover transition-shadow">
      {/* Post Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>

            <div>
              <h4 className="font-semibold text-sm">{post.author.name}</h4>
              <p className="text-xs text-muted-foreground">{post.author.jobTitle}</p>
              <p className="text-xs text-muted-foreground">{formatTimestamp(post.timestamp)}</p>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="relative w-full">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-auto object-cover max-h-96"
          />
        </div>
      )}

      {/* Engagement Stats */}
      <div className="px-4 py-2 border-t flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <ThumbsUp className="h-3.5 w-3.5 fill-primary text-primary" />
          <span>{post.likes} likes</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-2 border-t flex items-center justify-around">
        <Button
          variant="ghost"
          size="sm"
          className={`flex-1 ${post.isLiked ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <ThumbsUp className={`h-4 w-4 mr-2 ${post.isLiked ? 'fill-primary' : ''}`} />
          Like
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
          <MessageCircle className="h-4 w-4 mr-2" />
          Comment
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
    </Card>
  );
}
