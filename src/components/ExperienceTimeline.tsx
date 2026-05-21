import { motion } from 'framer-motion'
import { BookOpenText, Code2, Languages, MonitorCog, Presentation } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { experiences } from '../data/portfolio'
import type { Experience } from '../types/portfolio'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

const iconMap: Record<Experience['icon'], typeof BookOpenText> = {
  education: BookOpenText,
  code: Code2,
  language: Languages,
  training: Presentation,
  systems: MonitorCog,
}

export default function ExperienceTimeline() {
  return (
    <Section id="experience">
      <SectionHeader
        description="A timeline of teaching, training, interpretation, software learning, and system-building experience."
        eyebrow="Experience"
        title="A career path designed around communication, education, and technical systems."
      />

      <motion.div
        className="relative mx-auto max-w-4xl"
        initial="hidden"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
      >
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-aurora-blue via-aurora-violet to-transparent sm:block" />
        {experiences.map((experience, index) => {
          const Icon = iconMap[experience.icon]

          return (
            <motion.article
              className="relative mb-5 grid gap-4 sm:grid-cols-[2.8rem_1fr]"
              key={experience.role}
              variants={fadeInUp}
            >
              <div className="relative z-10 hidden size-11 place-items-center rounded-full bg-ink-950 text-white shadow-glow sm:grid dark:bg-white dark:text-ink-950">
                <Icon className="size-5" aria-hidden="true" />
              </div>

              <div className="glass-panel rounded-[1.75rem] p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-aurora-blue">{experience.years}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink-950 dark:text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-500 dark:text-slate-400">
                      {experience.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-ink-900/5 px-3 py-1 text-xs font-semibold text-ink-500 dark:bg-white/10 dark:text-slate-300">
                    Step {index + 1}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li className="flex gap-3 text-sm leading-7 text-ink-600 dark:text-slate-300" key={item}>
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-aurora-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
