import * as React from 'react'
import styles from '../CodeSnippets/CodeSnippets.style'

interface ICodeSnippetProps {
  className?: any
  isWhite?: boolean
  isFaded?: boolean
  code: string
}

const CodeSnippet = (props: ICodeSnippetProps) => {
  return (
    <pre
      css={[
        styles.defaultSnippet,
        props.isWhite ? styles.whiteSnippet : styles.blackSnippet,
        props.isFaded && styles.fadeOnSnippet,
        props.className && props.className
      ]}
    >
      <code>{props.code}</code>
    </pre>
  )
}

export default CodeSnippet
