import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import { useTheme } from '../hooks/useTheme'

export default function SiteLayout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen overflow-hidden">
      <a
        className="sr-only rounded-full bg-ink-950 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] dark:bg-white dark:text-ink-950"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navigation onToggleTheme={toggleTheme} theme={theme} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
