'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Zap, GitPullRequest, TrendingUp } from 'lucide-react'
import { ArrowUp } from 'lucide-react'

const stats = [
  {
    title: 'Active Tasks',
    value: '24',
    change: '+3',
    icon: CheckCircle,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Agents Running',
    value: '8',
    change: '+1',
    icon: Zap,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'PRs Pending',
    value: '12',
    change: '-2',
    icon: GitPullRequest,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Success Rate',
    value: '94%',
    change: '+5%',
    icon: TrendingUp,
    color: 'from-emerald-500 to-emerald-600',
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="bg-card border-border p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-xs text-emerald-600">{stat.change} this week</span>
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
