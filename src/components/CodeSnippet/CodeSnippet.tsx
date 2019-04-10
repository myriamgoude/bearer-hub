import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

import styles from './CodeSnippet.style'

export interface Snippet {
  language: string
  code: string
}
interface ICodeSnippetProps {
  className?: any
  prism: boolean
  isWhite?: boolean
  isFaded?: boolean
  code?: any
  snippets?: Snippet[]
  backend?: boolean
}

const PrismSnippet = (props: ICodeSnippetProps) => (
  <Highlight {...defaultProps} code={props.code} language="jsx">
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
)

const CodeSnippet = (props: ICodeSnippetProps) => {
  if (props.prism) {
    return <PrismSnippet {...props} />
  }
  if (props.snippets) {
    return (
      <div>
        {props.snippets.length > 1 && (
          <div css={styles.languages}>
            {props.snippets.map((snippet, index) => (
              <span {...index === 0 && { className: 'active' }}>{snippet.language}</span>
            ))}
          </div>
        )}
        {props.snippets.map((snippet, index) => (
          <pre
            css={[
              styles.defaultSnippet,
              styles.multiSnippet,
              props.isWhite ? styles.whiteSnippet : styles.blackSnippet,
              props.isFaded && styles.fadeOnSnippet,
              props.className && props.className
            ]}
            {...index > 0 && { style: { display: 'none' } }}
          >
            <code itemScope itemType="http://schema.org/SoftwareSourceCode">
              {snippet.code.split('\n').map((code, index) => {
                const isBash = snippet.language === 'bash'
                return (
                  <div css={styles.lineContainer}>
                    {isBash ? (
                      code[0] === '$' ? (
                        <>
                          <span css={styles.lineNumber} data-line-number={code[0] === '$' ? '$' : ''} />
                          <span css={styles.lineCode}>{code[0] === '$' ? code.substring(2) : code}</span>
                        </>
                      ) : (
                        <span css={[styles.lineComment, styles.lineCode]}>{code}</span>
                      )
                    ) : (
                      <>
                        <span css={styles.lineNumber} data-line-number={index + 1} />
                        <span css={styles.lineCode}>{code}</span>
                      </>
                    )}
                  </div>
                )
              })}
            </code>
          </pre>
        ))}
      </div>
    )
  }
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
