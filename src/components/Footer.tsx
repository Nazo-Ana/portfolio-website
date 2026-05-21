import { ArrowUpRight, GitBranch, Mail, Network } from 'lucide-react'
import { navItems, profile, socialLinks } from '../constants/site'

const serviceLinks = [
  'Frontend Development',
  'AI Integration',
  'Dashboard Systems',
  'Educational Platforms',
]

const resources = ['Project Portfolio', 'Teaching Systems', 'AI Roadmap', 'Contact Brief']

export function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-white/70 py-12 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/70">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-ink-950 text-sm font-bold text-white shadow-glow dark:bg-white dark:text-ink-950">
              {profile.initials}
            </span>
            <div>
              <p className="font-semibold text-ink-950 dark:text-white">{profile.name}</p>
              <p className="text-sm text-ink-500 dark:text-slate-400">
                Software, education, and AI systems
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-ink-500 dark:text-slate-400">
            A premium digital portfolio for Nazia Zazai's software engineering journey,
            technical education work, and future AI-powered products.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-full bg-ink-900/5 text-ink-700 transition hover:bg-aurora-blue hover:text-white dark:bg-white/10 dark:text-white"
              href={socialLinks.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Network className="size-4" />
            </a>
            <a
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-full bg-ink-900/5 text-ink-700 transition hover:bg-aurora-blue hover:text-white dark:bg-white/10 dark:text-white"
              href={socialLinks.github}
              rel="noreferrer"
              target="_blank"
            >
              <GitBranch className="size-4" />
            </a>
            <a
              aria-label="Email"
              className="grid size-10 place-items-center rounded-full bg-ink-900/5 text-ink-700 transition hover:bg-aurora-blue hover:text-white dark:bg-white/10 dark:text-white"
              href={socialLinks.email}
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn title="Navigation" items={navItems.map((item) => item.label)} />
          <FooterColumn title="Services" items={serviceLinks} />
          <FooterColumn title="Resources" items={resources} />
        </div>
      </div>
      <div className="section-shell mt-10 flex flex-col gap-4 border-t border-ink-900/10 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-slate-400">
        <p>Copyright 2026 {profile.name}. All rights reserved.</p>
        <a className="inline-flex items-center gap-2 hover:text-aurora-blue" href="#home">
          Back to top <ArrowUpRight className="size-4" />
        </a>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  items: string[]
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase text-ink-950 dark:text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-ink-500 dark:text-slate-400">
        {items.map((item) => (
          <li key={item}>
            <a className="transition hover:text-aurora-blue" href={`#${item.toLowerCase().split(' ')[0]}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
