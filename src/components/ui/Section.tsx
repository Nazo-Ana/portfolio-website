import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section className={cn('scroll-mt-24 py-20 sm:py-24', className)} id={id}>
      <div className="section-shell">{children}</div>
    </section>
  )
}
