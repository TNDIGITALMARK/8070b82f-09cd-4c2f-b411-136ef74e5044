'use client';

import { useState } from 'react';
import { Header } from '@/components/network/Header';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Building2, Users } from 'lucide-react';
import { mockUsers } from '@/lib/data/mockData';

export default function ConnectionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'connected' | 'pending'>('all');

  // Filter users based on search and connection status
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'connected' && user.isConnected) ||
      (selectedFilter === 'pending' && user.isPending);

    return matchesSearch && matchesFilter;
  });

  const connectedCount = mockUsers.filter((u) => u.isConnected).length;
  const pendingCount = mockUsers.filter((u) => u.isPending).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">My Connections</h1>
          <p className="text-muted-foreground">
            Manage your professional network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-3">
            <Card className="p-4 shadow-card">
              <h3 className="font-semibold mb-4">Filters</h3>

              <div className="space-y-2">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedFilter === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary'
                  }`}
                >
                  All Connections
                  <span className="ml-2 text-xs">({mockUsers.length})</span>
                </button>

                <button
                  onClick={() => setSelectedFilter('connected')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedFilter === 'connected'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary'
                  }`}
                >
                  Connected
                  <span className="ml-2 text-xs">({connectedCount})</span>
                </button>

                <button
                  onClick={() => setSelectedFilter('pending')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedFilter === 'pending'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary'
                  }`}
                >
                  Pending
                  <span className="ml-2 text-xs">({pendingCount})</span>
                </button>
              </div>
            </Card>
          </aside>

          {/* Connections List */}
          <main className="lg:col-span-9">
            {/* Search Bar */}
            <Card className="p-4 shadow-card mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, title, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </Card>

            {/* Connections Grid */}
            {filteredUsers.length === 0 ? (
              <Card className="p-8 text-center shadow-card">
                <p className="text-muted-foreground">No connections found</p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredUsers.map((user) => (
                  <Card key={user.id} className="p-5 shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="flex gap-4">
                      <Avatar className="h-16 w-16 shrink-0">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-lg">{user.name[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{user.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {user.jobTitle}
                        </p>

                        <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-3 w-3" />
                            <span className="truncate">{user.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{user.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{user.connections} connections</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {user.isConnected ? (
                            <>
                              <Button size="sm" variant="outline" className="flex-1">
                                Message
                              </Button>
                              <Button size="sm" variant="ghost" className="flex-1">
                                View Profile
                              </Button>
                            </>
                          ) : user.isPending ? (
                            <Button size="sm" variant="outline" className="flex-1" disabled>
                              Pending
                            </Button>
                          ) : (
                            <Button size="sm" className="flex-1">
                              Connect
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
