import { motion } from 'framer-motion'
import { fadeInUp } from '../../animations/variants'
import { cn } from '../../utils/cn'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        'mx-auto mb-12 max-w-3xl',
        align === 'center' ? 'text-center' : 'mx-0 text-left',
      )}
      initial="hidden"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.35 }}
      whileInView="visible"
    >
      <p className="mb-4 text-sm font-semibold uppercase text-aurora-blue">{eyebrow}</p>
      <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-ink-950 sm:text-5xl dark:text-white">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-ink-500 sm:text-lg dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  )
}
