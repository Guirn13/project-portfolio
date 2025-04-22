import { useState, useEffect } from 'react'

function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, ] = useState(false)

  useEffect(() => {
    if (!isDeleting && currentIndex < text.length) {

      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, isDeleting, displayedText])

  return <h1 className="text-3xl font-bold">{displayedText}</h1>
}

export default Typewriter