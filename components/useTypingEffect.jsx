import { useState, useEffect } from 'react'

const useTypingEffect = (fullText) => {
  const [text, setText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [fullText])

  return [text, setText]
}

export default useTypingEffect
