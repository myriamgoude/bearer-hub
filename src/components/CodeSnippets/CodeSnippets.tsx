import * as React from 'react'
import styles from './CodeSnippets.style'

export interface Snippet {
  language: string
  code: string
}
interface ICodeSnippetsProps {
  className?: any
  isWhite?: boolean
  isFaded?: boolean
  snippets: Snippet[]
}

class CodeSnippets extends React.Component<ICodeSnippetsProps, any> {
  constructor(props: ICodeSnippetsProps) {
    super(props)

    this.state = { activeLanguage: this.props.snippets[0].language.toLowerCase() }
  }

  handleChange = (e: React.MouseEvent): void => {
    e.preventDefault()

    const target = e.target as HTMLSpanElement
    this.setState({ activeLanguage: target.innerHTML.toLowerCase() })
  }

  isActiveLanguage = (snippet: Snippet): boolean => {
    const activeLanguage = this.state.activeLanguage
    return activeLanguage === snippet.language.toLowerCase()
  }

  render() {
    return (
      <div>
        {this.props.snippets.length > 1 && (
          <div css={styles.languages}>
            {this.props.snippets.map((snippet, index) => (
              <span
                key={index}
                {...this.isActiveLanguage(snippet) && { className: 'active' }}
                onClick={this.handleChange}
              >
                {snippet.language}
              </span>
            ))}
          </div>
        )}
        {this.props.snippets.map((snippet, index) => {
          if (this.props.snippets.length > 1 && !this.isActiveLanguage(snippet)) {
            return ''
          }
          return (
            <pre
              key={index}
              css={[
                styles.defaultSnippet,
                styles.multiSnippet,
                this.props.isWhite ? styles.whiteSnippet : styles.blackSnippet,
                this.props.isFaded && styles.fadeOnSnippet,
                this.props.className && this.props.className
              ]}
            >
              <code itemScope itemType="http://schema.org/SoftwareSourceCode">
                {snippet.code.split('\n').map((code, index) => {
                  const isBash = snippet.language === 'bash'
                  return (
                    <div css={styles.lineContainer} key={index}>
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
          )
        })}
      </div>
    )
  }
}

export default CodeSnippets
