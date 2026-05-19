'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, Clock } from 'lucide-react'

const workflow = [
  { stage: 'TODO', status: 'completed', description: 'Task created' },
  { stage: 'ASSIGNED', status: 'completed', description: 'Planner assigned' },
  { stage: 'PLANNING', status: 'completed', description: 'Analysis done' },
  { stage: 'CODING', status: 'active', description: 'Code in progress' },
  { stage: 'REVIEWING', status: 'pending', description: 'Code review' },
  { stage: 'TESTING', status: 'pending', description: 'QA testing' },
  { stage: 'HUMAN_REVIEW', status: 'pending', description: 'Manual review' },
  { stage: 'MERGED', status: 'pending', description: 'Ready to merge' },
]

export function WorkflowTimeline() {
  return (
    <Card className="bg-card border-border p-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">Task Lifecycle</h2>

      <div className="space-y-4">
        {workflow.map((item, index) => (
          <div key={item.stage} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div>
                {item.status === 'completed' && (
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                )}
                {item.status === 'active' && (
                  <Clock className="w-6 h-6 text-cyan-500 animate-spin" />
                )}
                {item.status === 'pending' && (
                  <Circle className="w-6 h-6 text-slate-500" />
                )}
              </div>
              {index < workflow.length - 1 && (
                <div className={`w-0.5 h-8 mt-2 ${
                  item.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-700'
                }`} />
              )}
            </div>

            <div className="pt-0.5">
              <Badge className={`${
                item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-200' :
                item.status === 'active' ? 'bg-cyan-500/20 text-cyan-200' :
                'bg-slate-500/20 text-slate-200'
              }`}>
                {item.stage}
              </Badge>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
