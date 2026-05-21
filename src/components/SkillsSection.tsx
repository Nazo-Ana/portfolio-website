import { motion } from 'framer-motion'
import { Code2, SquareTerminal, UsersRound, Wrench } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { skillCategories } from '../data/portfolio'
import type { SkillCategory } from '../types/portfolio'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

const iconMap: Record<SkillCategory['icon'], typeof Code2> = {
  frontend: Code2,
  programming: SquareTerminal,
  tools: Wrench,
  soft: UsersRound,
}

export default function SkillsSection() {
  return (
    <Section className="relative" id="skills">
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-gradient-to-r from-aurora-blue/10 via-aurora-pink/10 to-aurora-green/10 blur-3xl" />
      <SectionHeader
        description="A practical skill map for frontend development, programming, teaching, product delivery, and digital education systems."
        eyebrow="Skills"
        title="Technical depth with the communication range to teach and lead."
      />

      <motion.div
        className="grid gap-5 lg:grid-cols-2"
        initial="hidden"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon]

          return (
            <motion.article
              className="glass-panel rounded-[2rem] p-6"
              key={category.title}
              variants={fadeInUp}
            >
              <div className="mb-7 flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink-950 text-white shadow-glow dark:bg-white dark:text-ink-950">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink-950 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-ink-800 dark:text-slate-100">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-ink-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink-900/10 dark:bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-accent-gradient"
                        initial={{ width: 0 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        whileInView={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
