import { motion } from 'framer-motion'
import { BookOpenText, Boxes, GraduationCap, UsersRound } from 'lucide-react'
import { scaleIn } from '../../animations/variants'
import type { Metric } from '../../types/portfolio'

const iconMap = {
  teaching: BookOpenText,
  students: UsersRound,
  technology: Boxes,
  projects: GraduationCap,
}

type MetricCardProps = {
  metric: Metric
}

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = iconMap[metric.icon]

  return (
    <motion.div
      className="group glass-panel rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-aurora-blue/40"
      variants={scaleIn}
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-ink-950 text-white shadow-glow dark:bg-white dark:text-ink-950">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="h-px w-16 bg-gradient-to-r from-aurora-blue to-transparent opacity-70" />
      </div>
      <p className="text-3xl font-semibold text-ink-950 dark:text-white">{metric.value}</p>
      <h3 className="mt-3 font-semibold text-ink-900 dark:text-slate-100">{metric.label}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-500 dark:text-slate-400">{metric.detail}</p>
    </motion.div>
  )
}
