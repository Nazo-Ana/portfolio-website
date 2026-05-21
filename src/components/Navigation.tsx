import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navItems, profile } from '../constants/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import type { Theme } from '../types/portfolio'
import { cn } from '../utils/cn'

type NavigationProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Navigation({ theme, onToggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ids = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useScrollSpy(ids)

  const navLinks = navItems.map((item) => (
    <a
      className={cn(
        'rounded-full px-3 py-2 text-sm font-medium text-ink-500 transition hover:bg-ink-900/5 hover:text-ink-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
        activeId === item.id && 'bg-ink-950 text-white dark:bg-white dark:text-ink-950',
      )}
      href={item.href}
      key={item.href}
      onClick={() => setIsOpen(false)}
    >
      {item.label}
    </a>
  ))

  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
      initial={{ y: -18, opacity: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <nav
        aria-label="Primary navigation"
        className="glass-panel mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full px-4"
      >
        <a className="flex items-center gap-3" href="#home" onClick={() => setIsOpen(false)}>
          <span className="grid size-10 place-items-center rounded-full bg-ink-950 text-sm font-bold text-white shadow-glow dark:bg-white dark:text-ink-950">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-ink-950 sm:inline dark:text-white">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">{navLinks}</div>

        <div className="flex items-center gap-2">
          <button
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid size-10 place-items-center rounded-full text-ink-600 transition hover:bg-ink-900/5 hover:text-ink-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            onClick={onToggleTheme}
            type="button"
          >
            {theme === 'dark' ? (
              <Sun className="size-4" aria-hidden="true" />
            ) : (
              <Moon className="size-4" aria-hidden="true" />
            )}
          </button>
          <button
            aria-expanded={isOpen}
            aria-label="Open navigation menu"
            className="grid size-10 place-items-center rounded-full text-ink-700 transition hover:bg-ink-900/5 lg:hidden dark:text-white dark:hover:bg-white/10"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel mx-auto mt-3 grid w-[calc(100%-24px)] max-w-sm gap-1 rounded-[1.5rem] p-3 lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {navLinks}
        </motion.div>
      ) : null}
    </motion.header>
  )
}
