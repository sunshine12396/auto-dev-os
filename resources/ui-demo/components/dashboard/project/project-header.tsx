'use client'

import { Search, Bell, User, Settings } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface ProjectHeaderProps {
  projectName: string
}

export function ProjectHeader({ projectName }: ProjectHeaderProps) {
  return (
    <header className="border-b border-border bg-card px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-muted-foreground">Project</span>
            <span className="text-sm font-semibold text-foreground">/</span>
            <span className="text-sm font-semibold text-accent">{projectName}</span>
          </div>
          <p className="text-xs text-muted-foreground">Manage tasks, agents, and project configuration</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-1 max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search in project..." className="pl-10 bg-muted border-border text-sm" />
            </div>
          </div>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
