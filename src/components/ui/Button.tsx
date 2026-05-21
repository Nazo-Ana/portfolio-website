import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark'

type ButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  icon?: ReactNode
  variant?: ButtonVariant
  download?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-gradient text-white shadow-glow hover:shadow-glow-violet hover:-translate-y-0.5',
  secondary:
    'glass-panel text-ink-900 hover:-translate-y-0.5 hover:border-aurora-blue/40 dark:text-white',
  ghost:
    'text-ink-600 hover:bg-ink-900/5 hover:text-ink-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
  dark: 'bg-ink-950 text-white shadow-premium hover:-translate-y-0.5 dark:bg-white dark:text-ink-950',
}

export function Button({
  children,
  className,
  href,
  icon,
  variant = 'primary',
  download,
  type = 'button',
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const content = (
    <>
      {icon ? <span className="flex size-4 items-center justify-center">{icon}</span> : null}
      <span>{children}</span>
      {variant === 'primary' ? <ArrowRight className="size-4" aria-hidden="true" /> : null}
    </>
  )

  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 disabled:pointer-events-none disabled:opacity-60',
    variantClasses[variant],
    className,
  )

  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        className={classes}
        download={download}
        href={href}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        target={href.startsWith('http') ? '_blank' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  )
}
