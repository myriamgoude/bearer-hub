import { css } from '@emotion/core'
import { colors, fonts } from '../../styles/variables'

export default {
  defaultSnippet: css`
    margin: 0;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-family: 'Courier New', Courier, monospace;
    overflow: hidden;
    border-radius: 2px;
    position: relative;
  `,
  blackSnippet: css`
    color: ${colors.white};
    background: ${colors.darkerBlue};
    border: 1px solid #030d36;

    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: white;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: white;
      opacity: 1;
    }
  `,
  multiSnippet: css`
    padding: 0.5rem;
  `,
  whiteSnippet: css`
    color: ${colors.secondary[1]};
    background: ${colors.white};
    border: 1px solid #e6eafa;
    box-shadow: 0 2px 4px 0 #e6e7eb;
  `,
  fadeOnSnippet: css`
    max-height: 200px;
    &::before {
      content: '';
      display: block;
      z-index: 3;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
    }
  `,
  lineComment: css`
    color: ${colors.secondary[2]};
  `,

  lineCode: css`
    width: 100%;
    height: 0.875rem;
    line-height: 0.875rem;
    display: inline-block;
  `,
  lineNumber: css`
    display: inline-block;
    margin-right: 0.5rem;
    width: 0.8rem;
    text-align: right;
    float: left;

    &::before {
      color: ${colors.secondary[2]};
      content: attr(data-line-number);
    }
  `,
  lineContainer: css`
    display: block;
    clear: both;
    font-size: 0.75rem;
    font-family: ${fonts.code};
  `,
  languages: css`
    display: flex;

    & > span {
      color: ${colors.secondary[2]};
      font-size: 0.875rem;
      text-align: center;
      letter-spacing: 0.38px;
      line-height: 120%;
      padding: 0 1rem;
      cursor: pointer;
    }

    & > span.active {
      color: #495ca8;
      letter-spacing: normal;
      border-bottom: 2px solid ${colors.yellow};
    }
  `
}
