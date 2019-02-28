import { css } from 'emotion'
import { breakpoints } from '../../styles/variables'

export default {
  root: css`
    display: flex;
    max-width: 568px;
    margin: auto;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.sm}px) {
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
  `
}
