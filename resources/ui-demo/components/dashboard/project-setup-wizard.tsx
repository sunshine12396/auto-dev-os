'use client'

import { useState } from 'react'
import { Check, Zap, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card } from '@/components/ui/card'

interface ProjectSetupWizardProps {
  isOpen: boolean
  onClose: () => void
  projectName: string
}

type SetupStep = {
  id: string
  title: string
  description: string
  status: 'pending' | 'in-progress' | 'completed'
  estimatedTime: string
}

export function ProjectSetupWizard({ isOpen, onClose, projectName }: ProjectSetupWizardProps) {
  const [steps, setSteps] = useState<SetupStep[]>([
    {
      id: 'clone',
      title: 'Clone Repository',
      description: 'Initialize and clone your repository',
      status: 'completed',
      estimatedTime: '1 min',
    },
    {
      id: 'env',
      title: 'Setup Environment',
      description: 'Configure environment variables and dependencies',
      status: 'in-progress',
      estimatedTime: '2 min',
    },
    {
      id: 'agents',
      title: 'Initialize Agents',
      description: 'Deploy AI agents for code generation',
      status: 'pending',
      estimatedTime: '3 min',
    },
    {
      id: 'ci',
      title: 'Configure CI/CD',
      description: 'Setup automated testing and deployment pipelines',
      status: 'pending',
      estimatedTime: '2 min',
    },
    {
      id: 'rules',
      title: 'Apply Rules & Policies',
      description: 'Configure code style guides and security rules',
      status: 'pending',
      estimatedTime: '1 min',
    },
  ])

  const handleSkip = () => {
    onClose()
  }

  const handleCompleteSetup = () => {
    // Mark all as completed
    setSteps((prev) =>
      prev.map((step) => ({
        ...step,
        status: 'completed',
      }))
    )
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  const completedCount = steps.filter((s) => s.status === 'completed').length
  const totalCount = steps.length
  const progressPercent = (completedCount / totalCount) * 100

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Setting up {projectName}</DialogTitle>
          <DialogDescription>Your project is being initialized with AI agents and configurations</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Overall Progress</span>
              <span className="font-medium text-foreground">{completedCount}/{totalCount}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Setup Steps */}
          <div className="space-y-3">
            {steps.map((step) => (
              <Card
                key={step.id}
                className={`p-4 border-border flex items-start gap-4 transition-all ${
                  step.status === 'in-progress' ? 'bg-accent/5 border-accent' : 'bg-card'
                }`}
              >
                <div className="mt-1">
                  {step.status === 'completed' && (
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                  )}
                  {step.status === 'in-progress' && (
                    <div className="w-6 h-6 rounded-full border-2 border-accent animate-spin">
                      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent"></div>
                    </div>
                  )}
                  {step.status === 'pending' && (
                    <div className="w-6 h-6 rounded-full border-2 border-muted bg-card"></div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <span className="text-xs text-muted-foreground">{step.estimatedTime}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <div className="flex gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-blue-600">Setup in Progress</p>
              <p className="text-xs text-blue-600/70">Your AI agents are being configured and will be ready shortly.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={handleSkip} className="flex-1">
              Skip for Now
            </Button>
            <Button onClick={handleCompleteSetup} className="flex-1 bg-primary hover:bg-primary/90">
              Complete Setup
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
