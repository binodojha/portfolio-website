'use client'

import { useState, useEffect } from 'react'

export default function TypeAnimation() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ['Web Developer', 'Web Designer']

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType()
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  const handleType = () => {
    const i = loopNum % words.length
    const fullText = words[i]

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

    setTypingSpeed(isDeleting ? 30 : 150)

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        I am a <span className="text-blue-600">{text}</span>
        <span className="animate-blink">|</span>
      </h1>
    </div>
  )
}