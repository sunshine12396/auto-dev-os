'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, ExternalLink, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CreateProjectModal } from '../create-project-modal'
import { ProjectSetupWizard } from '../project-setup-wizard'

interface Project {
  name: string
  status: string
  progress: number
  description?: string
  language?: string
  framework?: string
  tasksCount: number
  agentsCount: number
}

export function ProjectsGallery() {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([
    {
      name: 'E-Commerce Platform',
      status: 'Active',
      progress: 65,
      description: 'Full-stack marketplace platform',
      tasksCount: 24,
      agentsCount: 5,
    },
    {
      name: 'Mobile App Redesign',
      status: 'Active',
      progress: 45,
      description: 'iOS and Android app refresh',
      tasksCount: 18,
      agentsCount: 3,
    },
    {
      name: 'API Gateway Refactor',
      status: 'Planning',
      progress: 20,
      description: 'Microservices API layer',
      tasksCount: 12,
      agentsCount: 2,
    },
    {
      name: 'Database Migration',
      status: 'In Review',
      progress: 80,
      description: 'PostgreSQL to cloud migration',
      tasksCount: 8,
      agentsCount: 4,
    },
    {
      name: 'Auth System Upgrade',
      status: 'Active',
      progress: 55,
      description: 'OAuth 2.0 implementation',
      tasksCount: 14,
      agentsCount: 3,
    },
    {
      name: 'Documentation Portal',
      status: 'Pending',
      progress: 10,
      description: 'API and SDK documentation',
      tasksCount: 6,
      agentsCount: 1,
    },
  ])

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isSetupWizardOpen, setIsSetupWizardOpen] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')

  const handleCreateProject = (project: Project) => {
    setNewProjectName(project.name)
    setProjects([...projects, project])
    setIsSetupWizardOpen(true)
  }

  const handleDeleteProject = (projectName: string) => {
    setProjects(projects.filter((p) => p.name !== projectName))
  }

  const handleOpenProject = (projectName: string) => {
    const normalizedName = projectName.toLowerCase().replace(/\s+/g, '-')
    router.push(`/projects/${normalizedName}`)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-muted-foreground">Manage and monitor your AI-powered development projects</p>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)} className="bg-primary hover:bg-primary/90 gap-2">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="p-4 bg-card border-border hover:border-accent transition-all duration-200 hover:shadow-lg group"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{project.name}</h3>
                  {project.description && <p className="text-xs text-muted-foreground mt-1">{project.description}</p>}
                </div>
                <div
                  className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                    project.status === 'Active'
                      ? 'bg-accent/20 text-accent'
                      : project.status === 'In Review'
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {project.status}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{project.tasksCount} tasks</span>
                <span>{project.agentsCount} agents</span>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-muted-foreground">Progress</span>
                  <span className="text-xs font-medium text-foreground">{project.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  onClick={() => handleOpenProject(project.name)}
                  size="sm"
                  className="flex-1 bg-sidebar-primary hover:bg-sidebar-primary/90 gap-1"
                >
                  Open
                  <ExternalLink className="w-3 h-3" />
                </Button>
                <Button
                  onClick={() => handleDeleteProject(project.name)}
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modals */}
      <CreateProjectModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onCreateProject={handleCreateProject} />
      <ProjectSetupWizard isOpen={isSetupWizardOpen} onClose={() => setIsSetupWizardOpen(false)} projectName={newProjectName} />
    </div>
  )
}
