import { css } from '@emotion/core'
import { breakpoints } from '../../styles/variables'

export default {
  root: css`
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.md}px) {
      flex-direction: row;
    }
  `,
  spaceAround: css`
    justify-content: space-around;
  `,
  spaceBetween: css`
    justify-content: space-between;
  `,
  fullWidth: css`
    max-width: 100%;
  `,
  itemCentered: css`
    justify-content: center;
  `
}
