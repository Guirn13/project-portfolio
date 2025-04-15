import { useState, useEffect } from 'react'

function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!isDeleting && currentIndex < text.length) {

      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (isDeleting && displayedText.length > 0) {

      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1))
      }, speed / 2)

      return () => clearTimeout(timeout)
    } else if (currentIndex >= text.length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
      setCurrentIndex(0)
    }
  }, [currentIndex, text, speed, isDeleting, displayedText])

  return <p className="text-3xl font-bold">{displayedText}</p>
}

export default Typewriter