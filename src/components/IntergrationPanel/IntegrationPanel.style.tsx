import { css } from '@emotion/core'
import { breakpoints } from '../../styles/variables'

export default {
  item: css`
    width: 100%;
    text-align: center;
  `,
  cardImage: css`
    height: 4rem;
    max-width: 8rem;
  `,
  cardTags: css`
    width: 80%;
    margin: 0 auto;
    & > span {
      margin-bottom: 0.25rem;
    }

    & > span:nth-of-type(3) {
      margin-left: 0;
    }

    @media (max-width: ${breakpoints.lg}px) {
      width: 100%;
    }
  `
}
