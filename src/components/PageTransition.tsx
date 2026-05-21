import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

type PageTransitionProps = {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        key={location.pathname}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
