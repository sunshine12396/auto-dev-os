'use client'

import { useState } from 'react'
import { Plus, Github, Gitlab, GitBranch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

interface CreateProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onCreateProject: (project: any) => void
}

export function CreateProjectModal({ isOpen, onClose, onCreateProject }: CreateProjectModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    repository: '',
    language: '',
    framework: '',
    gitProvider: '',
    enableCI: false,
    enableTesting: false,
    enableSecurity: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleCreate = () => {
    const newProject = {
      name: formData.name,
      status: 'Planning',
      progress: 5,
      description: formData.description,
      language: formData.language,
      framework: formData.framework,
    }
    onCreateProject(newProject)
    resetForm()
    onClose()
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      repository: '',
      language: '',
      framework: '',
      gitProvider: '',
      enableCI: false,
      enableTesting: false,
      enableSecurity: false,
    })
    setStep(1)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>Step {step} of 3 - Set up your AI-powered development project</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., My Awesome App"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-card border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what your project does..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-card border-border min-h-24"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Primary Language</Label>
                <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                  <SelectTrigger className="bg-card border-border">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="rust">Rust</SelectItem>
                    <SelectItem value="go">Go</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 2: Tech Stack */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="framework">Framework</Label>
                <Select value={formData.framework} onValueChange={(value) => handleInputChange('framework', value)}>
                  <SelectTrigger className="bg-card border-border">
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nextjs">Next.js</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue.js</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="express">Express.js</SelectItem>
                    <SelectItem value="django">Django</SelectItem>
                    <SelectItem value="fastapi">FastAPI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="repository">Repository URL</Label>
                <Input
                  id="repository"
                  placeholder="https://github.com/yourname/repo"
                  value={formData.repository}
                  onChange={(e) => handleInputChange('repository', e.target.value)}
                  className="bg-card border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gitProvider">Git Provider</Label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { provider: 'github', icon: Github, label: 'GitHub' },
                    { provider: 'gitlab', icon: Gitlab, label: 'GitLab' },
                    { provider: 'git', icon: GitBranch, label: 'Git' },
                  ].map(({ provider, icon: Icon, label }) => (
                    <button
                      key={provider}
                      onClick={() => handleInputChange('gitProvider', provider)}
                      className={`p-3 rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                        formData.gitProvider === provider
                          ? 'bg-accent border-accent text-accent-foreground'
                          : 'bg-card border-border hover:border-accent'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Setup Options */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Enable Features</p>
                {[
                  { key: 'enableCI', label: 'CI/CD Pipeline', description: 'Automated testing and deployment' },
                  { key: 'enableTesting', label: 'Test Coverage', description: 'Automatic test generation and coverage' },
                  { key: 'enableSecurity', label: 'Security Scanning', description: 'Vulnerability and code analysis' },
                ].map(({ key, label, description }) => (
                  <label
                    key={key}
                    className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-accent cursor-pointer transition-colors"
                  >
                    <Checkbox
                      checked={formData[key as keyof typeof formData] as boolean}
                      onCheckedChange={(checked) => handleInputChange(key, checked)}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-medium text-foreground text-sm">{label}</p>
                      <p className="text-xs text-muted-foreground">{description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button
                onClick={handleNext}
                disabled={step === 1 && !formData.name}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleCreate}
                disabled={!formData.name || !formData.language}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Create Project
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
