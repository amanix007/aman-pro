'use client'
import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'

interface CodeBlockProps {
  children: string
  className?: string
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const language = className?.replace('language-', '') || 'javascript'

  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>
        {children}
      </code>
    </pre>
  )
}