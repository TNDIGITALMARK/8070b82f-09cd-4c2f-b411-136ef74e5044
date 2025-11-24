'use client';

import { Header } from '@/components/network/Header';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, UserCheck } from 'lucide-react';
import { mockUsers, mockSuggestions } from '@/lib/data/mockData';

export default function MyNetworkPage() {
  const pendingInvitations = mockUsers.filter((u) => u.isPending);
  const suggestions = [...mockSuggestions, ...mockUsers.filter((u) => !u.isConnected && !u.isPending)].slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">My Network</h1>
          <p className="text-muted-foreground">
            Grow your professional network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar - Network Stats */}
          <aside className="lg:col-span-3">
            <Card className="p-4 shadow-card">
              <h3 className="font-semibold mb-4">Manage Network</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary cursor-pointer transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Connections</div>
                    <div className="text-xs text-muted-foreground">
                      {mockUsers.filter((u) => u.isConnected).length}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary cursor-pointer transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserPlus className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Invitations</div>
                    <div className="text-xs text-muted-foreground">
                      {pendingInvitations.length}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary cursor-pointer transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Following</div>
                    <div className="text-xs text-muted-foreground">87</div>
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-6">
            {/* Pending Invitations */}
            {pendingInvitations.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">
                    Invitations ({pendingInvitations.length})
                  </h2>
                  <Button variant="ghost" size="sm">
                    View all
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pendingInvitations.map((user) => (
                    <Card key={user.id} className="p-5 shadow-card">
                      <div className="flex gap-4">
                        <Avatar className="h-16 w-16 shrink-0">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="text-lg">{user.name[0]}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold truncate">{user.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {user.jobTitle} at {user.company}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {user.connections} connections
                          </p>

                          <div className="flex gap-2 mt-3">
                            <Button size="sm" className="flex-1">
                              Accept
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              Ignore
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* People You May Know */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">
                  People You May Know
                </h2>
                <Button variant="ghost" size="sm">
                  View all
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {suggestions.map((user) => (
                  <Card key={user.id} className="p-5 shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="text-center">
                      <Avatar className="h-20 w-20 mx-auto mb-3">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-xl">{user.name[0]}</AvatarFallback>
                      </Avatar>

                      <h3 className="font-semibold mb-1">{user.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-1">
                        {user.jobTitle}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">
                        {user.connections} connections
                      </p>

                      <Button size="sm" className="w-full">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
