import type { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'
import CodeBlock from './components/CodeBlock'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">{children}</h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="text-2xl font-medium mb-3 text-gray-700">{children}</h3>
    ),
    p: ({ children }: { children: ReactNode }) => (
      <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>
    ),
    pre: ({ children, ...props }: any) => {
      // Check if this is a code block
      if (props.className) {
        return <CodeBlock className={props.className}>{children}</CodeBlock>
      }
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          {children}
        </pre>
      )
    },
    code: ({ children, className }: any) => {
      // If it has a className, it's likely a code block
      if (className) {
        return <CodeBlock className={className}>{children}</CodeBlock>
      }
      // Otherwise it's inline code
      return (
        <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm">
          {children}
        </code>
      )
    },
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="list-disc list-inside mb-4 text-gray-600">{children}</ul>
    ),
    ...components,
  }
}