'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { StatsCards } from './stats-cards'
import { TasksList } from './tasks-list'
import { AgentsGrid } from './agents-grid'
import { WorkflowTimeline } from './workflow-timeline'
import { MetricsChart } from './metrics-chart'
import { CreateProjectModal } from './create-project-modal'
import { ProjectSetupWizard } from './project-setup-wizard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface Project {
  name: string
  status: string
  progress: number
  description?: string
  language?: string
  framework?: string
}

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([
    { name: 'E-Commerce Platform', status: 'Active', progress: 65 },
    { name: 'Mobile App Redesign', status: 'Active', progress: 45 },
    { name: 'API Gateway Refactor', status: 'Planning', progress: 20 },
    { name: 'Database Migration', status: 'In Review', progress: 80 },
    { name: 'Auth System Upgrade', status: 'Active', progress: 55 },
    { name: 'Documentation Portal', status: 'Pending', progress: 10 },
  ])

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isSetupWizardOpen, setIsSetupWizardOpen] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')

  const handleCreateProject = (project: Project) => {
    setNewProjectName(project.name)
    setProjects([...projects, project])
    setIsSetupWizardOpen(true)
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
          <Card key={project.name} className="p-4 bg-card border-border cursor-pointer hover:border-accent transition-colors group">
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-muted-foreground">Progress</span>
                <span className="text-xs font-medium text-foreground">{project.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">{project.status}</span>
              <div
                className={`px-2 py-1 rounded text-xs font-medium ${
                  project.status === 'Active' ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'
                }`}
              >
                {project.status}
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

export function TasksPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Tasks</h1>
        <p className="text-muted-foreground">Track and manage your AI-assisted development tasks</p>
      </div>
      <TasksList />
    </div>
  )
}

export function AgentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Agents</h1>
        <p className="text-muted-foreground">Monitor your autonomous development agents</p>
      </div>
      <AgentsGrid />
    </div>
  )
}

export function RulesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Rules & Policies</h1>
        <p className="text-muted-foreground">Configure system rules and development policies</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          { name: 'Code Style Guide', description: 'Enforce consistent code formatting and style', enabled: true },
          { name: 'Security Scanning', description: 'Automated security vulnerability checks', enabled: true },
          { name: 'Test Coverage Requirements', description: 'Minimum 80% code coverage for all PRs', enabled: true },
          { name: 'Documentation Requirements', description: 'Ensure all public APIs are documented', enabled: false },
          { name: 'Performance Thresholds', description: 'Monitor and enforce performance targets', enabled: true },
        ].map((rule) => (
          <Card key={rule.name} className="p-4 bg-card border-border flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">{rule.name}</h3>
              <p className="text-sm text-muted-foreground">{rule.description}</p>
            </div>
            <div className={`w-12 h-6 rounded-full ${rule.enabled ? 'bg-accent' : 'bg-muted'} flex items-center p-1 transition-colors`}>
              <div className={`w-5 h-5 rounded-full bg-white transform transition-transform ${rule.enabled ? 'translate-x-6' : ''}`}></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function SkillsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Skills</h1>
        <p className="text-muted-foreground">Configure AI agent capabilities and specializations</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { skill: 'React Development', proficiency: 95, agents: 6 },
          { skill: 'Python Backend', proficiency: 88, agents: 5 },
          { skill: 'Database Design', proficiency: 92, agents: 4 },
          { skill: 'DevOps & Infrastructure', proficiency: 85, agents: 3 },
          { skill: 'API Development', proficiency: 90, agents: 5 },
          { skill: 'Testing & QA', proficiency: 87, agents: 4 },
        ].map((item) => (
          <Card key={item.skill} className="p-4 bg-card border-border">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-foreground">{item.skill}</h3>
              <span className="text-sm font-medium text-accent">{item.proficiency}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-3">
              <div className="bg-accent h-2 rounded-full" style={{ width: `${item.proficiency}%` }}></div>
            </div>
            <p className="text-xs text-muted-foreground">{item.agents} agents trained</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function KnowledgePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Knowledge Base</h1>
        <p className="text-muted-foreground">Manage documentation and training data</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          { title: 'Architecture Guidelines', type: 'Guide', updated: '2 days ago' },
          { title: 'API Documentation', type: 'Reference', updated: '5 hours ago' },
          { title: 'Database Schemas', type: 'Schema', updated: '1 day ago' },
          { title: 'Deployment Procedures', type: 'Procedure', updated: '3 days ago' },
          { title: 'Security Policies', type: 'Policy', updated: '1 week ago' },
        ].map((doc) => (
          <Card key={doc.title} className="p-4 bg-card border-border flex items-center justify-between cursor-pointer hover:border-accent transition-colors">
            <div>
              <h3 className="font-semibold text-foreground">{doc.title}</h3>
              <div className="flex gap-2 mt-1">
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">{doc.type}</span>
                <span className="text-xs text-muted-foreground">Updated {doc.updated}</span>
              </div>
            </div>
            <div className="text-muted-foreground hover:text-foreground">→</div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function EnvironmentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Environments</h1>
        <p className="text-muted-foreground">Manage deployment and execution environments</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: 'Production', status: 'healthy', tasks: 8, version: 'v2.1.4' },
          { name: 'Staging', status: 'healthy', tasks: 4, version: 'v2.2.0-rc1' },
          { name: 'Development', status: 'healthy', tasks: 12, version: 'v2.2.0-dev' },
          { name: 'Testing', status: 'healthy', tasks: 6, version: 'v2.1.4' },
        ].map((env) => (
          <Card key={env.name} className="p-4 bg-card border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">{env.name}</h3>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Status</span>
                <span className="text-foreground capitalize">{env.status}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Active Tasks</span>
                <span className="text-foreground">{env.tasks}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Version</span>
                <span className="text-foreground font-mono text-xs">{env.version}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Configure system preferences and integrations</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          { category: 'General', icon: '⚙️', items: 4 },
          { category: 'Integrations', icon: '🔗', items: 7 },
          { category: 'Notifications', icon: '🔔', items: 5 },
          { category: 'Team & Access', icon: '👥', items: 3 },
          { category: 'API Keys', icon: '🔐', items: 2 },
          { category: 'Billing', icon: '💳', items: 3 },
        ].map((setting) => (
          <Card key={setting.category} className="p-4 bg-card border-border cursor-pointer hover:border-accent transition-colors flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{setting.icon}</div>
              <div>
                <h3 className="font-semibold text-foreground">{setting.category}</h3>
                <p className="text-xs text-muted-foreground">{setting.items} settings</p>
              </div>
            </div>
            <div className="text-muted-foreground">→</div>
          </Card>
        ))}
      </div>
    </div>
  )
}
