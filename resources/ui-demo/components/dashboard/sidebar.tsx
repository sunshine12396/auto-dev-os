'use client'

import { Zap, Folder, CheckSquare, Bot, FileText, Database, Settings, Book } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SidebarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { icon: Folder, label: 'Projects', id: 'projects' },
  { icon: CheckSquare, label: 'Tasks', id: 'tasks' },
  { icon: Bot, label: 'Agents', id: 'agents' },
  { icon: FileText, label: 'Rules', id: 'rules' },
  { icon: Zap, label: 'Skills', id: 'skills' },
  { icon: Book, label: 'Knowledge Base', id: 'knowledge' },
  { icon: Database, label: 'Environments', id: 'environments' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 border-r border-border bg-sidebar flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold text-sidebar-foreground">AI SDLC</h1>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            variant="ghost"
            className={cn(
              'w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors',
              activeSection === item.id && 'bg-sidebar-accent text-sidebar-accent-foreground'
            )}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </Button>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="bg-sidebar-accent/10 rounded-lg p-4">
          <p className="text-sm font-semibold text-sidebar-foreground mb-2">Organization</p>
          <p className="text-xs text-sidebar-foreground/70">Acme Corp Labs</p>
        </div>
      </div>
    </aside>
  )
}
