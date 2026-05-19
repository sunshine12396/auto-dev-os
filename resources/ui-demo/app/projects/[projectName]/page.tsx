'use client'

import { useState } from 'react'
import { ProjectSidebar } from '@/components/dashboard/project/project-sidebar'
import { ProjectHeader } from '@/components/dashboard/project/project-header'
import {
  OverviewPage,
  ProjectTasksPage,
  ProjectAgentsPage,
  ProjectRulesPage,
  ProjectSkillsPage,
  ProjectKnowledgePage,
} from '@/components/dashboard/project/project-content'

interface ProjectPageProps {
  params: {
    projectName: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [activeSection, setActiveSection] = useState('overview')
  const projectName = decodeURIComponent(params.projectName)
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const renderContent = () => {
    switch (activeSection) {
      case 'tasks':
        return <ProjectTasksPage />
      case 'agents':
        return <ProjectAgentsPage />
      case 'rules':
        return <ProjectRulesPage />
      case 'skills':
        return <ProjectSkillsPage />
      case 'knowledge':
        return <ProjectKnowledgePage />
      default:
        return <OverviewPage />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <ProjectSidebar projectName={projectName} activeSection={activeSection} onNavigate={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ProjectHeader projectName={projectName} />
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
