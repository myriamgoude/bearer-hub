import { css } from '@emotion/core'

export default {
  root: css`
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  `
}
