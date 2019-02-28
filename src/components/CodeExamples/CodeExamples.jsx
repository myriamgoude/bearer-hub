import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx, css } from 'emotion'
import Highlight, { defaultProps } from 'prism-react-renderer'

import sampleData from '../../data/codeSamples'
import { backendTheme, frontendTheme } from './theme'

import styles from './CodeExamples.css'
import { colors, fonts, breakpoints } from '../../styles/variables'

const renderPreview = (query, snippet, theme) => (
  <Highlight {...defaultProps} theme={theme} code={snippet[query]} language={snippet.language}>
    {({ className, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={cx(
          className,
          css`
            margin: 0;
            font-size: 14px;
            font-family: ${fonts.monospace};
          `
        )}
      >
        {tokens.map((line, index) => (
          <div key={index} className="token-line" {...getLineProps({ line, key: index })}>
            {line.map((token, key) => (
              <span key={key} className={token.types.join(' ')} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

const renderListItem = (activeSample, activeStyle, handleClick, sample, stack) => {
  const stackX = stack === 'backend' ? 0 : 1
  return sample.map(lang => (
    <li key={lang.slug}>
      <button
        type="button"
        className={cx(
          css`
            position: relative;
            color: black;
            background-color: transparent;
            appearance: none;
            border-width: 0;
            padding: 0;
            outline: none;
          `,
          styles.label,
          activeSample[stackX] === lang.slug ? activeStyle : null
        )}
        onClick={() => handleClick(lang.slug, stack)}
      >
        <div
          className={cx(
            css`
              color: ${activeSample[stackX] === lang.slug ? colors.branded.yellow : colors.branded.black};
              cursor: pointer;

              &:hover {
                font-weight: bold;
              }
            `
          )}
        >
          {lang.name}
        </div>
      </button>
    </li>
  ))
}

/** Component that displays code samples from different languages (frontend and backend). */

class CodeExamples extends Component {
  state = {
    activeSample: ['express', 'javascript-front']
  }

  handleStackClick = (language, stack) => {
    const { activeSample } = this.state
    const value = typeof language === 'string' ? language : language.target.value
    if (stack === 'backend') {
      this.setState({
        activeSample: [value, activeSample[1]]
      })
    } else {
      this.setState({
        activeSample: [activeSample[0], value]
      })
    }
  }

  render() {
    const { activeSample } = this.state
    const { data, ...other } = this.props
    return (
      <div {...other}>
        <div
          className={cx(
            css`
              display: flex;
              margin-bottom: 16px;
              @media (min-width: ${breakpoints.md}px) {
                display: none;
              }
            `
          )}
        >
          <div
            className={cx(
              css`
                display: flex;
                flex-direction: column;
                flex: 0 1 50%;
                text-align: center;
                padding-right: 8px;
              `
            )}
          >
            <div tag="label" htmlFor="backend-select">
              Backend
              <select
                id="backend-select"
                data-backend-lang-select=""
                name="backend-select"
                className={cx(
                  css`
                    margin-top: 8px;
                    display: block;
                    width: 100%;
                  `
                )}
                onChange={event => this.handleStackClick(event, 'backend')}
              >
                {data.backendSamples.map(lang => (
                  <option key={lang.slug} value={lang.slug}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            className={cx(
              css`
                display: flex;
                flex-direction: column;
                flex: 0 1 50%;
                text-align: center;
                padding-left: 8px;
              `
            )}
          >
            <div tag="label" htmlFor="frontend-select">
              Frontend
              <select
                id="frontend-select"
                data-frontend-lang-select=""
                name="frontend-select"
                className={cx(
                  css`
                    margin-top: 8px;
                    display: block;
                    width: 100%;
                  `
                )}
                onChange={event => this.handleStackClick(event, 'frontend')}
              >
                {data.frontendSamples.map(lang => (
                  <option key={lang.slug} value={lang.slug}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div
          className={cx(
            css`
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              text-align: left;
            `
          )}
        >
          <div
            className={cx(
              css`
                flex: 0 1 8.33333%;
                display: none;
                @media (min-width: ${breakpoints.md}px) {
                  display: block;
                }
              `
            )}
          >
            <ul
              className={cx(
                styles.backendList,
                css`
                  margin-right: 0px;
                  padding: 0px;
                  list-style: none;
                  text-align: right;
                `
              )}
            >
              {renderListItem(
                activeSample,
                styles.backendActive,
                this.handleStackClick,
                data.backendSamples,
                'backend'
              )}
            </ul>
          </div>

          <div
            className={cx(css`
              flex: 0 1 100%;
              border-radius: 2px;
              overflow: hidden;
              display: flex;
              position: relative;
              z-index: 5;
              flex-direction: column;
              box-shadow: 0 4px 18px 0 #e2e5ee;
              @media (min-width: ${breakpoints.md}px) {
                flex: 0 1 75%;
                flex-direction: row;
                height: 350px;
              }
            `)}
          >
            <div
              className={cx(
                css`
                  padding: 24px;
                  background-color: ${colors.branded.black};
                  flex: 0 1 100%;
                  overflow-y: auto;
                  overflow-x: scroll;
                  width: 100%;
                `
              )}
            >
              {data.backendSamples.map(sample => (
                <div
                  key={sample.slug}
                  className={cx(
                    activeSample[0] === sample.slug
                      ? 'active'
                      : css`
                          display: none;
                        `
                  )}
                  data-backend-sample={sample.slug}
                >
                  {renderPreview('code_push', sample, backendTheme)}
                </div>
              ))}
            </div>

            <div
              className={cx(
                css`
                  padding: 24px;
                  background-color: white;
                  flex: 0 1 100%;
                  overflow-y: auto;
                  overflow-x: scroll;
                  width: 100%;
                  flex: 0 1 100%;
                `
              )}
            >
              {data.frontendSamples.map(sample => (
                <div
                  key={sample.slug}
                  className={cx(
                    activeSample[1] === sample.slug
                      ? 'active'
                      : css`
                          display: none;
                        `
                  )}
                  data-frontend-sample={sample.language}
                >
                  {renderPreview('code_query', sample, frontendTheme)}
                </div>
              ))}
            </div>
          </div>

          <div
            className={cx(css`
              flex: 0 1 8.333333%;
              display: none;
              @media (min-width: ${breakpoints.md}px) {
                display: block;
              }
            `)}
          >
            <ul
              className={cx(
                styles.frontendList,
                css`
                  margin-left: 0;
                  padding: 0;
                  list-style: none;
                  text-align: left;
                `
              )}
            >
              {renderListItem(
                activeSample,
                styles.frontendActive,
                this.handleStackClick,
                data.frontendSamples,
                'frontend'
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

CodeExamples.propTypes = {
  /** The data of the code sample */
  data: PropTypes.object
}

CodeExamples.defaultProps = {
  data: sampleData
}

export default CodeExamples
