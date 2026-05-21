import { motion } from 'framer-motion'
import {
  Bot,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Paintbrush,
  PanelsTopLeft,
  Settings2,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { services } from '../data/portfolio'
import type { Service } from '../types/portfolio'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

const iconMap: Record<Service['icon'], typeof PanelsTopLeft> = {
  frontend: PanelsTopLeft,
  ai: Bot,
  dashboard: LayoutDashboard,
  education: GraduationCap,
  design: Paintbrush,
  optimization: Gauge,
  systems: Settings2,
}

export default function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeader
        description="Focused services for clients, schools, founders, and teams who want digital systems that look premium and work clearly."
        eyebrow="Services"
        title="Practical software and education systems with a premium product feel."
      />

      <motion.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.14 }}
        whileInView="visible"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon]

          return (
            <motion.article
              className="group glass-panel relative overflow-hidden rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-aurora-blue/40"
              key={service.title}
              variants={fadeInUp}
            >
              <div className="absolute -right-14 -top-14 size-36 rounded-full bg-aurora-blue/10 blur-2xl transition duration-500 group-hover:bg-aurora-cyan/20" />
              <span className="relative grid size-12 place-items-center rounded-2xl bg-ink-950 text-white shadow-glow dark:bg-white dark:text-ink-950">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 text-xl font-semibold text-ink-950 dark:text-white">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-ink-500 dark:text-slate-400">
                {service.description}
              </p>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
