'use client'

import { useState } from 'react'
import { HomeSidebar } from '@/components/dashboard/home/home-sidebar'
import { HomeHeader } from '@/components/dashboard/home/home-header'
import { ProjectsGallery } from '@/components/dashboard/home/projects-gallery'

export default function Home() {
  const [activeSection, setActiveSection] = useState('projects')

  const renderContent = () => {
    switch (activeSection) {
      case 'skills':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Skills Library</h1>
              <p className="text-muted-foreground">Global AI agent skills and capabilities</p>
            </div>
            <p className="text-muted-foreground">Skills library content coming soon...</p>
          </div>
        )
      case 'organization':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Organization</h1>
              <p className="text-muted-foreground">Manage organization settings and members</p>
            </div>
            <p className="text-muted-foreground">Organization settings coming soon...</p>
          </div>
        )
      case 'settings':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
              <p className="text-muted-foreground">Configure your AI SDLC platform</p>
            </div>
            <p className="text-muted-foreground">Settings coming soon...</p>
          </div>
        )
      default:
        return <ProjectsGallery />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <HomeSidebar activeSection={activeSection} onNavigate={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <HomeHeader />
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
