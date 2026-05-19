'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, ChevronRight } from 'lucide-react'

const tasks = [
  {
    id: '1',
    title: 'Implement user authentication',
    description: 'Add JWT-based auth to the API',
    status: 'CODING',
    priority: 'high',
    agent: 'Backend Agent',
    difficulty: 'Medium',
  },
  {
    id: '2',
    title: 'Fix dashboard responsive layout',
    description: 'Mobile view broken on iPhone 12',
    status: 'REVIEWING',
    priority: 'high',
    agent: 'Frontend Agent',
    difficulty: 'Easy',
  },
  {
    id: '3',
    title: 'Add database migrations',
    description: 'Create migration for user_profiles table',
    status: 'TESTING',
    priority: 'medium',
    agent: 'QA Agent',
    difficulty: 'Medium',
  },
  {
    id: '4',
    title: 'Write API documentation',
    description: 'Update OpenAPI spec for v2 endpoints',
    status: 'TODO',
    priority: 'low',
    agent: 'Unassigned',
    difficulty: 'Easy',
  },
  {
    id: '5',
    title: 'Refactor payment service',
    description: 'Extract Stripe logic to separate service',
    status: 'PLANNING',
    priority: 'medium',
    agent: 'Backend Agent',
    difficulty: 'Hard',
  },
]

const statusColors = {
  TODO: 'bg-slate-500/20 text-slate-200',
  ASSIGNED: 'bg-blue-500/20 text-blue-200',
  PLANNING: 'bg-purple-500/20 text-purple-200',
  CODING: 'bg-cyan-500/20 text-cyan-200',
  REVIEWING: 'bg-orange-500/20 text-orange-200',
  TESTING: 'bg-yellow-500/20 text-yellow-200',
  HUMAN_REVIEW: 'bg-pink-500/20 text-pink-200',
  MERGED: 'bg-emerald-500/20 text-emerald-200',
}

const priorityColors = {
  low: 'bg-slate-500/20 text-slate-200',
  medium: 'bg-blue-500/20 text-blue-200',
  high: 'bg-red-500/20 text-red-200',
}

export function TasksList() {
  return (
    <Card className="bg-card border-border">
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Recent Tasks</h2>
            <p className="text-sm text-muted-foreground">Active tasks and their current status</p>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border bg-muted/30">
            <tr>
              <th className="text-left text-xs font-medium text-muted-foreground p-4">Task</th>
              <th className="text-left text-xs font-medium text-muted-foreground p-4">Status</th>
              <th className="text-left text-xs font-medium text-muted-foreground p-4">Priority</th>
              <th className="text-left text-xs font-medium text-muted-foreground p-4">Assigned To</th>
              <th className="text-left text-xs font-medium text-muted-foreground p-4">Difficulty</th>
              <th className="text-right text-xs font-medium text-muted-foreground p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="p-4">
                  <div>
                    <p className="font-medium text-foreground text-sm">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.description}</p>
                  </div>
                </td>
                <td className="p-4">
                  <Badge className={`${statusColors[task.status as keyof typeof statusColors]}`}>
                    {task.status}
                  </Badge>
                </td>
                <td className="p-4">
                  <Badge className={`${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                    {task.priority}
                  </Badge>
                </td>
                <td className="p-4">
                  <p className="text-sm text-foreground">{task.agent}</p>
                </td>
                <td className="p-4">
                  <Badge variant="outline" className="text-foreground border-border">
                    {task.difficulty}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
