import { css } from '@emotion/core'
import { getEmSize } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'

export default {
  root: css`
    width: 100%;
    flex-shrink: 0;
    text-align: left;
    display: block;
    margin-bottom: ${getEmSize(24)};

    & > h2 {
      margin-top: 2rem;
    }
  `,
  heading: css`
    display: inline;
  `,
  alignLeft: css`
    text-align: left;
    @media (max-width: ${breakpoints.lg}px) {
      text-align: center;
    }
  `,
  alignCenter: css`
    text-align: center;
  `,
  alignRight: css`
    text-align: right;
  `
}
