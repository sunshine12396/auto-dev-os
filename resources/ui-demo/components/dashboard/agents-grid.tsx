'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bot, TrendingUp, Clock } from 'lucide-react'

const agents = [
  {
    id: '1',
    name: 'Backend Agent',
    role: 'Backend',
    level: 'Hard',
    status: 'Running',
    workload: '3/5',
    successRate: 96,
    avgTime: '8m',
  },
  {
    id: '2',
    name: 'Frontend Agent',
    role: 'Frontend',
    level: 'Medium',
    status: 'Running',
    workload: '2/5',
    successRate: 92,
    avgTime: '5m',
  },
  {
    id: '3',
    name: 'Reviewer Agent',
    role: 'Reviewer',
    level: 'Hard',
    status: 'Running',
    workload: '4/5',
    successRate: 98,
    avgTime: '12m',
  },
  {
    id: '4',
    name: 'QA Agent',
    role: 'QA',
    level: 'Medium',
    status: 'Idle',
    workload: '0/5',
    successRate: 94,
    avgTime: '15m',
  },
  {
    id: '5',
    name: 'Planner Agent',
    role: 'Planner',
    level: 'Hard',
    status: 'Running',
    workload: '1/5',
    successRate: 99,
    avgTime: '10m',
  },
  {
    id: '6',
    name: 'Bug Fix Agent',
    role: 'Backend',
    level: 'Medium',
    status: 'Running',
    workload: '2/5',
    successRate: 91,
    avgTime: '7m',
  },
]

const roleColors = {
  Backend: 'from-blue-500 to-blue-600',
  Frontend: 'from-purple-500 to-purple-600',
  Reviewer: 'from-orange-500 to-orange-600',
  QA: 'from-emerald-500 to-emerald-600',
  Planner: 'from-cyan-500 to-cyan-600',
}

export function AgentsGrid() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">Active Agents</h2>
        <p className="text-sm text-muted-foreground">AI agents currently working on tasks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent) => {
          const color = roleColors[agent.role as keyof typeof roleColors]
          return (
            <Card key={agent.id} className="bg-card border-border p-4 hover:border-border/80 transition-colors">
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${color}`}>
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">{agent.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {agent.role}
                    </Badge>
                    <Badge
                      className={`text-xs ${
                        agent.status === 'Running'
                          ? 'bg-emerald-500/20 text-emerald-200'
                          : 'bg-slate-500/20 text-slate-200'
                      }`}
                    >
                      {agent.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Workload</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${(parseInt(agent.workload.split('/')[0]) / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-3 h-3 text-cyan-500" />
                      <span className="text-xs text-muted-foreground">Success</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{agent.successRate}%</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock className="w-3 h-3 text-cyan-500" />
                      <span className="text-xs text-muted-foreground">Avg Time</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{agent.avgTime}</p>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
