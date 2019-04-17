import { css } from '@emotion/core'
import { breakpoints, colors } from '../../styles/variables'

export default {
  root: css`
    text-align: center;
    padding: 0;
    display: block;
  `,
  item: css`
    margin: 5rem auto 0 auto;
    width: 100%;
    padding-top: 4rem;
    position: relative;
    @media (max-width: ${breakpoints.lg}px) {
      margin: 2rem auto 0 auto;
    }

    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 4rem;
      margin: 2rem auto;
      background: ${colors.yellow};
      z-index: 5;
    }

    &:before {
      margin-top: 0;
      @media (max-width: ${breakpoints.lg}px) {
        display: none;
      }
    }
  `
}
