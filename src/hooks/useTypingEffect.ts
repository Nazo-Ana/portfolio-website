import { useEffect, useState } from 'react'

export function useTypingEffect(words: string[], typingSpeed = 54, pause = 1450) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex] ?? ''
    const isComplete = !deleting && displayed === word
    const isCleared = deleting && displayed === ''
    const delay = isComplete ? pause : deleting ? 28 : typingSpeed

    const timeout = window.setTimeout(() => {
      if (isComplete) {
        setDeleting(true)
        return
      }

      if (isCleared) {
        setDeleting(false)
        setWordIndex((current) => (current + 1) % words.length)
        return
      }

      const nextLength = deleting ? displayed.length - 1 : displayed.length + 1
      setDisplayed(word.slice(0, nextLength))
    }, delay)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [deleting, displayed, pause, typingSpeed, wordIndex, words])

  return displayed
}
