import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, GitBranch, Layers3, Maximize2, Sparkles, X } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { projects } from '../data/portfolio'
import type { Project } from '../types/portfolio'
import { Button } from './ui/Button'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <Section id="projects">
      <SectionHeader
        description="A curated product portfolio spanning education platforms, AI concepts, dashboards, and business management systems."
        eyebrow="Projects"
        title="Premium project concepts built for real operating needs."
      />

      <motion.div
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.12 }}
        whileInView="visible"
      >
        {projects.map((project) => (
          <motion.article
            className="group glass-panel overflow-hidden rounded-[2rem]"
            key={project.title}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
          >
            <button
              aria-label={`Open details for ${project.title}`}
              className="relative block w-full overflow-hidden text-left"
              onClick={() => setSelectedProject(project)}
              type="button"
            >
              <img
                alt={`${project.title} preview`}
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-white/90 text-ink-950 shadow-lg backdrop-blur">
                <Maximize2 className="size-4" aria-hidden="true" />
              </span>
            </button>

            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <span
                    className="rounded-full bg-ink-900/5 px-3 py-1 text-xs font-semibold text-ink-600 dark:bg-white/10 dark:text-slate-300"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-ink-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={project.liveUrl} icon={<ExternalLink className="size-4" />} variant="secondary">
                  Live Demo
                </Button>
                <Button href={project.githubUrl} icon={<GitBranch className="size-4" />} variant="ghost">
                  GitHub
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <ProjectModal onClose={() => setSelectedProject(null)} project={selectedProject} />
    </Section>
  )
}

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-ink-950/70 px-4 py-8 backdrop-blur-xl"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <button
            aria-label="Close project details"
            className="absolute inset-0 cursor-default"
            onClick={onClose}
            type="button"
          />
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-h-[88vh] w-full max-w-5xl overflow-auto rounded-[2rem] border border-white/10 bg-white text-ink-950 shadow-premium dark:bg-ink-900 dark:text-white"
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.25 }}
          >
            <button
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-ink-950 shadow-lg backdrop-blur transition hover:bg-white dark:bg-ink-950/90 dark:text-white"
              onClick={onClose}
              type="button"
            >
              <X className="size-4" />
            </button>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <img
                alt={`${project.title} large preview`}
                className="h-full min-h-80 w-full object-cover"
                src={project.image}
              />
              <div className="p-7 sm:p-9">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-aurora-blue/10 px-3 py-1 text-xs font-semibold text-aurora-blue">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Product Detail
                </div>
                <h3 className="text-3xl font-semibold leading-tight">{project.title}</h3>
                <p className="mt-5 leading-8 text-ink-600 dark:text-slate-300">
                  {project.longDescription}
                </p>

                <div className="mt-6 rounded-2xl bg-ink-900/5 p-5 dark:bg-white/10">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Layers3 className="size-4 text-aurora-blue" aria-hidden="true" />
                    Impact
                  </div>
                  <p className="mt-2 text-sm leading-7 text-ink-500 dark:text-slate-400">
                    {project.impact}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-full bg-ink-950 px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-ink-950"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={project.liveUrl} icon={<ExternalLink className="size-4" />}>
                    View Live Demo
                  </Button>
                  <Button href={project.githubUrl} icon={<GitBranch className="size-4" />} variant="secondary">
                    GitHub Repository
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
