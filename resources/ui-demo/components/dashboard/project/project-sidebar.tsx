'use client'

import { useRouter } from 'next/navigation'
import { Zap, ArrowLeft, CheckSquare, Bot, FileText, Zap as ZapIcon, Book, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProjectSidebarProps {
  projectName: string
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { icon: Eye, label: 'Overview', id: 'overview' },
  { icon: CheckSquare, label: 'Tasks', id: 'tasks' },
  { icon: Bot, label: 'Agents', id: 'agents' },
  { icon: FileText, label: 'Rules', id: 'rules' },
  { icon: ZapIcon, label: 'Skills', id: 'skills' },
  { icon: Book, label: 'Knowledge Base', id: 'knowledge' },
]

export function ProjectSidebar({ projectName, activeSection, onNavigate }: ProjectSidebarProps) {
  const router = useRouter()

  return (
    <aside className="w-64 border-r border-border bg-sidebar flex flex-col">
      <div className="p-6 border-b border-border space-y-4">
        <Button
          onClick={() => router.push('/')}
          variant="ghost"
          className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Button>
        <div className="pt-2 border-t border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/60 mb-1">Current Project</p>
          <h2 className="text-sm font-bold text-sidebar-foreground truncate">{projectName}</h2>
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
        <div className="bg-sidebar-accent/10 rounded-lg p-3 space-y-2">
          <p className="text-xs font-semibold text-sidebar-foreground">Project Stats</p>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-sidebar-foreground/70">
              <span>Active Tasks:</span>
              <span className="text-sidebar-foreground font-medium">24</span>
            </div>
            <div className="flex justify-between text-sidebar-foreground/70">
              <span>Running Agents:</span>
              <span className="text-sidebar-foreground font-medium">8</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
