import { css } from '@emotion/core'
import { colors, breakpoints } from '../../styles/variables'

export default {
  root: css`
    margin: auto;
    border-radius: 12px;
    background-color: ${colors.darkBlue};
    background-size: cover;
    box-shadow: 0 8px 17px 0 rgba(3, 13, 54, 0.16);
    position: relative;
    z-index: 5;
    width: 100%;
    height: 389px;
    @media (max-width: ${breakpoints.xl}px) {
      height: 326px;
    }
  `
}
