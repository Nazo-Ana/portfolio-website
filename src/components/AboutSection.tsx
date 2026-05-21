import { motion } from 'framer-motion'
import { BrainCircuit, GraduationCap, MessageSquareText, Rocket } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { metrics } from '../data/portfolio'
import { MetricCard } from './ui/MetricCard'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

const aboutCards = [
  {
    title: 'Education Background',
    description:
      'Built from the classroom outward, combining English instruction, student mentoring, and digital learning workflows.',
    icon: GraduationCap,
  },
  {
    title: 'Software Engineering Journey',
    description:
      'Focused on frontend architecture, systems thinking, clean interfaces, and real-world product execution.',
    icon: Rocket,
  },
  {
    title: 'AI and Modern Systems',
    description:
      'Exploring how AI can improve education platforms, dashboards, automation, and personalized learning.',
    icon: BrainCircuit,
  },
  {
    title: 'Communication Strength',
    description:
      'Teaching, interpreting, public speaking, and team coordination give every technical project a human edge.',
    icon: MessageSquareText,
  },
]

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader
        description="Nazia brings together software engineering, education experience, communication strength, and founder-level ambition. Her work is not only about building interfaces, but building systems that help people learn, operate, and grow."
        eyebrow="About"
        title="Nazia Zazai is a builder shaped by classrooms, code, and product thinking."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.25 }}
          whileInView="visible"
        >
          <p className="text-lg leading-9 text-ink-600 dark:text-slate-300">
            Nazia's foundation started in education, where clarity, empathy, and communication
            matter every day. That teaching experience now shapes how I build software:
            interfaces should feel understandable, systems should remove friction, and
            technology should help people become more capable.
          </p>
          <p className="mt-6 text-lg leading-9 text-ink-600 dark:text-slate-300">
            As a Software Engineering student, she is developing strong frontend skills while
            exploring AI-powered education systems, dashboards, and scalable digital tools.
            Her long-term direction is to become a founder who builds practical AI systems for
            learning, productivity, and modern business operations.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.25 }}
          whileInView="visible"
        >
          {aboutCards.map((card) => {
            const Icon = card.icon

            return (
              <motion.article
                className="glass-panel rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-aurora-blue/40"
                key={card.title}
                variants={fadeInUp}
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-ink-950 text-white dark:bg-white dark:text-ink-950">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-500 dark:text-slate-400">
                  {card.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </motion.div>
    </Section>
  )
}
