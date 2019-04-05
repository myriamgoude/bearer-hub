import { css } from '@emotion/core'

import { colors } from '../../styles/variables'

export default {
  root: css`
    padding: 2rem 0;
    position: relative;
  `,
  tail: css`
    padding: 0;

    &:before {
      content: '';
      display: block;
      width: 2px;
      height: 5.5rem;
      margin: 2rem auto;
      background: ${colors.yellow};
      z-index: 5;
    }
  `
}
