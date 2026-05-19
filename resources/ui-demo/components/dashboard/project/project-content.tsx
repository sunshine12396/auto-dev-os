'use client'

import { StatsCards } from '../stats-cards'
import { TasksList } from '../tasks-list'
import { AgentsGrid } from '../agents-grid'
import { WorkflowTimeline } from '../workflow-timeline'
import { MetricsChart } from '../metrics-chart'
import { Card } from '@/components/ui/card'

export function OverviewPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-foreground mb-6">Project Overview</h1>
        <StatsCards />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Tasks</h2>
        <TasksList />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AgentsGrid />
        </div>
        <div className="lg:col-span-1">
          <WorkflowTimeline />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MetricsChart />
      </section>
    </div>
  )
}

export function ProjectTasksPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Tasks</h1>
        <p className="text-muted-foreground">Manage and track all project tasks</p>
      </div>
      <TasksList />
    </div>
  )
}

export function ProjectAgentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Project Agents</h1>
        <p className="text-muted-foreground">Configure and monitor AI agents assigned to this project</p>
      </div>
      <AgentsGrid />
    </div>
  )
}

export function ProjectRulesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Project Rules</h1>
        <p className="text-muted-foreground">Define coding standards and execution rules for this project</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { title: 'Code Style Guide', items: ['TypeScript strict mode', 'Prettier formatting', 'ESLint rules'] },
          { title: 'Testing Requirements', items: ['Minimum 80% coverage', 'Unit tests required', 'Integration tests'] },
          { title: 'Deployment Rules', items: ['Automated testing before deploy', 'Code review required', 'Staging validation'] },
          { title: 'Documentation', items: ['JSDoc comments required', 'API documentation', 'README updates'] },
        ].map((rule) => (
          <Card key={rule.title} className="p-6 bg-card border-border space-y-4">
            <h3 className="font-semibold text-foreground">{rule.title}</h3>
            <ul className="space-y-2">
              {rule.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function ProjectSkillsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Project Skills</h1>
        <p className="text-muted-foreground">Manage AI agent skills and proficiencies for this project</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { skill: 'Frontend Development', proficiency: 95, tasks: 12 },
          { skill: 'Backend Development', proficiency: 88, tasks: 8 },
          { skill: 'Database Design', proficiency: 92, tasks: 5 },
          { skill: 'DevOps & Infrastructure', proficiency: 85, tasks: 6 },
          { skill: 'Testing & QA', proficiency: 90, tasks: 10 },
          { skill: 'Documentation', proficiency: 82, tasks: 4 },
        ].map((item) => (
          <Card key={item.skill} className="p-4 bg-card border-border space-y-3">
            <h4 className="font-medium text-foreground">{item.skill}</h4>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-muted-foreground">Proficiency</span>
                <span className="text-xs font-medium text-accent">{item.proficiency}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: `${item.proficiency}%` }}></div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{item.tasks} tasks completed</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function ProjectKnowledgePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Knowledge Base</h1>
        <p className="text-muted-foreground">Project documentation and training data</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { title: 'Architecture Guide', docs: 8, updated: '2 days ago' },
          { title: 'API Documentation', docs: 15, updated: '5 hours ago' },
          { title: 'Database Schema', docs: 6, updated: '1 week ago' },
          { title: 'Deployment Guides', docs: 4, updated: '3 days ago' },
        ].map((section) => (
          <Card key={section.title} className="p-6 bg-card border-border space-y-3">
            <h3 className="font-semibold text-foreground">{section.title}</h3>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{section.docs} documents</span>
              <span>Updated {section.updated}</span>
            </div>
            <div className="bg-muted rounded py-2 px-3 text-xs text-muted-foreground">View all documents</div>
          </Card>
        ))}
      </div>
    </div>
  )
}
