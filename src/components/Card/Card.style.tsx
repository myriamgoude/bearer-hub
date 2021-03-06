import { css } from '@emotion/core'
import { getEmSize } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'

export default {
  root: css`
    background: white;
    box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.26);
    border: 1px solid #d4d9ea;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h5 {
      @media (max-width: ${breakpoints.lg}) {
        font-size: 18px !important;
      }
    }

    @media (max-width: ${breakpoints.lg}px) {
      min-width: 200px;
      margin-top: 0 !important;
    }
  `,
  paddingRegular: css`
    padding: ${getEmSize(24)};
  `,
  paddingLarge: css`
    padding: ${getEmSize(24)} ${getEmSize(48)};
  `,
  heightSmall: css`
    height: 100%;
  `
}
