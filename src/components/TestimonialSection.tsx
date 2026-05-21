import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { fadeInUp } from '../animations/variants'
import { testimonials } from '../data/portfolio'
import { cn } from '../utils/cn'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5200)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const active = testimonials[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <Section id="testimonials">
      <SectionHeader
        description="Feedback from students, collaborators, and education-focused professionals who value clarity, reliability, and practical execution."
        eyebrow="Testimonials"
        title="Trusted for teaching quality, technical clarity, and product-minded work."
      />

      <motion.div
        className="glass-panel relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-6 sm:p-8"
        initial="hidden"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.22 }}
        whileInView="visible"
      >
        <div className="absolute right-8 top-8 text-aurora-blue/20">
          <Quote className="size-20" aria-hidden="true" />
        </div>

        <div className="relative">
          <div className="flex gap-1">
            {Array.from({ length: active.rating }).map((_, index) => (
              <Star
                className="size-5 fill-aurora-amber text-aurora-amber"
                key={`${active.name}-${index}`}
                aria-hidden="true"
              />
            ))}
          </div>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-2xl font-medium leading-10 text-ink-950 dark:text-white"
            initial={{ opacity: 0, y: 12 }}
            key={active.quote}
            transition={{ duration: 0.35 }}
          >
            "{active.quote}"
          </motion.p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-semibold text-ink-950 dark:text-white">{active.name}</p>
              <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">{active.role}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="Previous testimonial"
                className="grid size-11 place-items-center rounded-full bg-ink-900/5 text-ink-700 transition hover:bg-ink-950 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-ink-950"
                onClick={goToPrevious}
                type="button"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                aria-label="Next testimonial"
                className="grid size-11 place-items-center rounded-full bg-ink-950 text-white transition hover:bg-aurora-blue dark:bg-white dark:text-ink-950"
                onClick={goToNext}
                type="button"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                aria-label={`Show testimonial from ${testimonial.name}`}
                className={cn(
                  'h-2 rounded-full transition-all',
                  index === activeIndex
                    ? 'w-9 bg-aurora-blue'
                    : 'w-2 bg-ink-900/15 dark:bg-white/20',
                )}
                key={testimonial.name}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
