import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { GitBranch, Mail, MapPin, MessageCircle, Network, Send } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { profile, socialLinks } from '../constants/site'
import { submitContactForm } from '../services/contact'
import { Button } from './ui/Button'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

const contactCards = [
  {
    label: 'Email',
    value: profile.email,
    href: socialLinks.email,
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: profile.whatsapp,
    href: socialLinks.whatsapp,
    icon: MessageCircle,
  },
  {
    label: 'LinkedIn',
    value: 'Professional profile',
    href: socialLinks.linkedin,
    icon: Network,
  },
  {
    label: 'GitHub',
    value: 'Project repositories',
    href: socialLinks.github,
    icon: GitBranch,
  },
]

export default function ContactSection() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')

    setIsSubmitting(true)
    const result = await submitContactForm({ email, message, name })
    setStatus(result.message)
    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <Section id="contact">
      <SectionHeader
        description="Reach out for internships, frontend projects, education systems, AI-enabled tools, and ambitious collaborations with Nazia."
        eyebrow="Contact"
        title="Start a conversation about software, education, or AI systems."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="space-y-4"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.18 }}
          whileInView="visible"
        >
          <motion.div className="glass-panel rounded-[2rem] p-6" variants={fadeInUp}>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-ink-950 text-white dark:bg-white dark:text-ink-950">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-ink-950 dark:text-white">{profile.location}</p>
                <p className="text-sm text-ink-500 dark:text-slate-400">Remote-first collaboration</p>
              </div>
            </div>
          </motion.div>

          {contactCards.map((card) => {
            const Icon = card.icon

            return (
              <motion.a
                className="glass-panel flex items-center gap-4 rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-aurora-blue/40"
                href={card.href}
                key={card.label}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                variants={fadeInUp}
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-ink-900/5 text-aurora-blue dark:bg-white/10">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-ink-500 dark:text-slate-400">
                    {card.label}
                  </span>
                  <span className="block font-semibold text-ink-950 dark:text-white">
                    {card.value}
                  </span>
                </span>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.form
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
          initial="hidden"
          onSubmit={handleSubmit}
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink-700 dark:text-slate-200">
                Name
              </span>
              <input
                className="h-12 w-full rounded-2xl border border-ink-900/10 bg-white/70 px-4 text-ink-950 outline-none transition placeholder:text-ink-300 focus:border-aurora-blue dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-500"
                name="name"
                placeholder="Your name"
                required
                type="text"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink-700 dark:text-slate-200">
                Email
              </span>
              <input
                className="h-12 w-full rounded-2xl border border-ink-900/10 bg-white/70 px-4 text-ink-950 outline-none transition placeholder:text-ink-300 focus:border-aurora-blue dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-500"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold text-ink-700 dark:text-slate-200">
              Message
            </span>
            <textarea
              className="min-h-44 w-full resize-none rounded-[1.5rem] border border-ink-900/10 bg-white/70 px-4 py-4 text-ink-950 outline-none transition placeholder:text-ink-300 focus:border-aurora-blue dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-500"
              name="message"
              placeholder="Tell me about your project, role, or collaboration idea."
              required
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button disabled={isSubmitting} icon={<Send className="size-4" />} type="submit">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            <p className="text-sm text-ink-500 dark:text-slate-400" role="status">
              {status || 'Nazia is ready for high-signal opportunities.'}
            </p>
          </div>
        </motion.form>
      </div>
    </Section>
  )
}
