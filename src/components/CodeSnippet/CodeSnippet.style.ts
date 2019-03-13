import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

export default {
  root: css`
    font-family: 'Courier New', Courier, monospace;
    background: ${colors.black};
    color: #fff;
    margin: 0;
  `,
  prismSnippet: css`
    padding: 1em !important;
    overflow: scroll;
    border-radius: 2px;
  `
}
