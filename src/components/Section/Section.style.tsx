import { css } from '@emotion/core'

import { colors, breakpoints } from '../../styles/variables'

export default {
  root: css`
    padding: 2rem 0;
    position: relative;
    @media (max-width: ${breakpoints.lg}px) {
      padding: 2rem 1rem;
    }

    &:last-of-type {
      margin-bottom: 6rem;
    }
  `,
  tail: css`
    padding-top: 0;

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
