import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

import styles from './CodeSnippet.style'

import { backendTheme, frontendTheme } from '../CodeExamples/Theme'

interface ICodeSnippetProps {
  className?: any
  prism: boolean
  isWhite?: boolean
  isFaded?: boolean
  code?: any
  backend?: boolean
}
const CodeSnippet = (props: ICodeSnippetProps) => {
  return props.prism ? (
    <Highlight {...defaultProps} code={props.code} language="jsx" theme={props.backend ? backendTheme : frontendTheme}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} css={styles.prismSnippet}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ) : (
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
