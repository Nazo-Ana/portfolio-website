import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  BadgeCheck,
  Download,
  GitBranch,
  Network,
  Mail,
  Sparkles,
  Zap,
} from 'lucide-react'
import naziaPortrait from '../assets/nazia-portrait.png'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { profile, socialLinks } from '../constants/site'
import { heroRoles } from '../data/portfolio'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { Button } from './ui/Button'

const ThreeHeroCanvas = lazy(() =>
  import('./ThreeHeroCanvas').then((module) => ({ default: module.ThreeHeroCanvas })),
)

export function HeroSection() {
  const role = useTypingEffect(heroRoles)

  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:pt-32"
      id="home"
    >
      <Suspense fallback={<div className="absolute inset-0" />}>
        <ThreeHeroCanvas />
      </Suspense>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_15%,rgba(79,140,255,0.18),transparent_28rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent dark:from-ink-950" />

      <motion.div
        className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        initial="hidden"
        variants={staggerContainer}
        animate="visible"
      >
        <div className="relative z-10 max-w-4xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-aurora-blue/25 bg-white/70 px-4 py-2 text-sm font-medium text-ink-700 shadow-sm backdrop-blur-xl dark:bg-white/10 dark:text-slate-200"
            variants={fadeInUp}
          >
            <Sparkles className="size-4 text-aurora-blue" aria-hidden="true" />
            <span className="font-semibold text-ink-950 dark:text-white">{profile.name}</span>
            <span className="h-1 w-1 rounded-full bg-aurora-blue" />
            <span className="min-w-48 text-left">{role}</span>
            <span className="h-4 w-px animate-pulse bg-aurora-blue" />
          </motion.div>

          <motion.h1
            className="text-balance font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-6xl lg:text-7xl dark:text-white"
            variants={fadeInUp}
          >
            Building Modern AI-Powered Systems While Empowering Students Through Technology
            & Education
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl text-lg leading-8 text-ink-500 sm:text-xl dark:text-slate-300"
            variants={fadeInUp}
          >
            Nazia Zazai is a Software Engineering student specializing in frontend development, digital
            education systems, modern web technologies, and scalable software solutions.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeInUp}>
            <Button download href={profile.cvPath} icon={<Download className="size-4" />}>
              Download CV
            </Button>
            <Button href="#projects" icon={<Zap className="size-4" />} variant="secondary">
              View Projects
            </Button>
            <Button href={socialLinks.linkedin} icon={<Network className="size-4" />} variant="ghost">
              LinkedIn
            </Button>
            <Button href={socialLinks.github} icon={<GitBranch className="size-4" />} variant="ghost">
              GitHub
            </Button>
            <Button href="#contact" icon={<Mail className="size-4" />} variant="dark">
              Contact
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-sm"
            variants={fadeInUp}
          >
            {['AI-ready systems', 'Education first', 'Founder mindset'].map((item) => (
              <div
                className="glass-panel rounded-2xl px-4 py-4 text-center font-medium text-ink-700 dark:text-slate-200"
                key={item}
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="relative z-10 lg:pl-8" variants={fadeInUp}>
          <div className="relative mx-auto max-w-[34rem]">
            <div className="absolute -inset-6 -z-10 animate-pulseGlow rounded-[2rem] bg-accent-gradient opacity-25 blur-3xl" />
            <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
              <img
                alt="Nazia Zazai premium software engineering portfolio portrait"
                className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
                loading="eager"
                src={naziaPortrait}
              />
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              className="glass-panel absolute right-6 top-6 flex items-center gap-3 rounded-2xl p-3 shadow-glow"
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="grid size-9 place-items-center rounded-full bg-accent-gradient text-white">
                <BadgeCheck className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase text-aurora-cyan">
                  Portfolio Owner
                </span>
                <span className="block text-sm font-semibold text-ink-950 dark:text-white">
                  {profile.name}
                </span>
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              className="glass-panel absolute -left-3 top-32 rounded-2xl p-4 shadow-glow sm:-left-8"
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs font-semibold uppercase text-aurora-cyan">Learning OS</p>
              <p className="mt-2 text-2xl font-semibold text-ink-950 dark:text-white">94%</p>
              <p className="text-xs text-ink-500 dark:text-slate-400">Skill growth</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              className="glass-panel absolute -bottom-4 right-2 rounded-2xl p-4 shadow-glow-violet sm:-right-5"
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs font-semibold uppercase text-aurora-pink">Founder Mode</p>
              <p className="mt-2 text-sm font-semibold text-ink-950 dark:text-white">
                Build, teach, scale
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <a
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-ink-900/10 bg-white/70 p-3 text-ink-600 shadow-sm backdrop-blur-xl transition hover:text-aurora-blue md:block dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
        href="#about"
      >
        <ArrowDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
