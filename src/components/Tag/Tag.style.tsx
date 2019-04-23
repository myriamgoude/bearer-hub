import { css } from '@emotion/core'

export default {
  root: css`
    display: inline-block;
    font-size: 0.75rem;
    padding: 0.15rem 0.75rem;
    border-radius: 100px;
    line-height: 1.25rem;

    & + span {
      margin-top: 2px;
      margin-left: 8px;
    }
  `
}
