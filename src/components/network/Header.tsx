'use client';

import { Search, Home, Users, Briefcase, MessageSquare, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { currentUser } from '@/lib/data/mockData';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/my-network', label: 'My Network', icon: Users },
    { href: '/connections', label: 'Connections', icon: Users },
    { href: '/jobs', label: 'Jobs', icon: Briefcase },
    { href: '/messaging', label: 'Messaging', icon: MessageSquare },
    { href: '/notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo and Search */}
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary shrink-0">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">N</span>
              </div>
              <span className="hidden sm:inline">NETWORK PRO</span>
            </Link>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search professionals..."
                className="pl-10 h-10 bg-secondary border-none"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Profile */}
          <div className="flex items-center gap-2">
            <Link href="/profile" className="flex items-center gap-2 hover:bg-secondary rounded-lg px-2 py-1 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
              </Avatar>
              <div className="hidden lg:block text-left">
                <div className="text-sm font-medium">{currentUser.name}</div>
                <div className="text-xs text-muted-foreground">View profile</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
