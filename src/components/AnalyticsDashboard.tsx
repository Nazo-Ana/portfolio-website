import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { BarChart3, PieChart as PieChartIcon, TrendingUp } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { projectAnalytics, skillGrowth, studentAnalytics } from '../data/portfolio'
import { cn } from '../utils/cn'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

const chartColors = ['#4f8cff', '#8b5cf6', '#22d3ee', '#f472b6']
const modes = ['Students', 'Projects', 'Growth'] as const
type DashboardMode = (typeof modes)[number]

export default function AnalyticsDashboard() {
  const [mode, setMode] = useState<DashboardMode>('Students')

  return (
    <Section id="analytics">
      <SectionHeader
        description="A product-style analytics section showing student focus areas, project distribution, and skill growth trends."
        eyebrow="Analytics"
        title="Interactive metrics for learning, projects, and technical growth."
      />

      <motion.div
        className="glass-panel overflow-hidden rounded-[2rem]"
        initial="hidden"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        <div className="flex flex-col gap-5 border-b border-ink-900/10 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <div>
            <h3 className="text-xl font-semibold text-ink-950 dark:text-white">
              Portfolio Intelligence
            </h3>
            <p className="mt-2 text-sm text-ink-500 dark:text-slate-400">
              Switch views to inspect education, project, and skill signals.
            </p>
          </div>
          <div className="grid grid-cols-3 rounded-full bg-ink-900/5 p-1 dark:bg-white/10">
            {modes.map((item) => (
              <button
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition',
                  mode === item
                    ? 'bg-ink-950 text-white shadow-sm dark:bg-white dark:text-ink-950'
                    : 'text-ink-500 hover:text-ink-950 dark:text-slate-300 dark:hover:text-white',
                )}
                key={item}
                onClick={() => setMode(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid gap-0 lg:grid-cols-[0.72fr_1fr]"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div className="border-b border-ink-900/10 p-6 lg:border-b-0 lg:border-r dark:border-white/10">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <DashboardStat
                icon={<PieChartIcon className="size-5" />}
                label="Student Focus"
                value="4 Tracks"
              />
              <DashboardStat
                icon={<BarChart3 className="size-5" />}
                label="Project Systems"
                value="6 Products"
              />
              <DashboardStat
                icon={<TrendingUp className="size-5" />}
                label="Skill Momentum"
                value="+42%"
              />
            </div>
          </div>

          <div className="min-h-[26rem] p-6">
            {mode === 'Students' ? (
              <ResponsiveContainer height={360} width="100%">
                <PieChart>
                  <Pie
                    cx="50%"
                    cy="50%"
                    data={studentAnalytics}
                    dataKey="value"
                    innerRadius={72}
                    outerRadius={128}
                    paddingAngle={5}
                  >
                    {studentAnalytics.map((entry, index) => (
                      <Cell fill={chartColors[index % chartColors.length]} key={entry.name} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : null}

            {mode === 'Projects' ? (
              <ResponsiveContainer height={360} width="100%">
                <BarChart data={projectAnalytics}>
                  <CartesianGrid stroke="rgba(148,163,184,0.18)" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                    {projectAnalytics.map((entry, index) => (
                      <Cell fill={chartColors[index % chartColors.length]} key={entry.name} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : null}

            {mode === 'Growth' ? (
              <ResponsiveContainer height={360} width="100%">
                <AreaChart data={skillGrowth}>
                  <defs>
                    <linearGradient id="frontend" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#4f8cff" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#4f8cff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="ai" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="teaching" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148,163,184,0.18)" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} />
                  <YAxis tickLine={false} />
                  <Tooltip />
                  <Area dataKey="frontend" fill="url(#frontend)" stroke="#4f8cff" strokeWidth={3} />
                  <Area dataKey="ai" fill="url(#ai)" stroke="#8b5cf6" strokeWidth={3} />
                  <Area dataKey="teaching" fill="url(#teaching)" stroke="#22d3ee" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

type DashboardStatProps = {
  icon: ReactNode
  label: string
  value: string
}

function DashboardStat({ icon, label, value }: DashboardStatProps) {
  return (
    <motion.div
      className="rounded-[1.5rem] bg-ink-900/5 p-5 dark:bg-white/10"
      variants={fadeInUp}
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-ink-950 text-white dark:bg-white dark:text-ink-950">
        {icon}
      </div>
      <p className="text-sm text-ink-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-ink-950 dark:text-white">{value}</p>
    </motion.div>
  )
}
