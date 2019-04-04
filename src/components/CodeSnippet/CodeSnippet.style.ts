import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

export default {
  prismSnippet: css`
    padding: 1em !important;
    overflow: scroll;
    border-radius: 2px;
  `,
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
  `
}
