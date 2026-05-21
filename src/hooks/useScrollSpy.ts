import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    if (ids.length === 0) {
      return
    }

    let frame = 0

    const updateActiveId = () => {
      const viewportAnchor = window.innerHeight * 0.34
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => Boolean(element))

      const current =
        sections.findLast((section) => section.getBoundingClientRect().top <= viewportAnchor) ??
        sections[0]

      if (current) {
        setActiveId(current.id)
      }
    }

    const handleScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateActiveId)
    }

    updateActiveId()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [ids])

  return activeId
}
