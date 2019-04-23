import { css } from '@emotion/core'
import { getEmSize } from '../../styles/mixins'
import { widths, dimensions, breakpoints } from '../../styles/variables'

export default {
  root: css`
    margin: auto;
    width: 100%;
    @media (min-width: ${breakpoints.xl}px) {
      max-width: ${getEmSize(widths.xxl)};
    }
    @media (max-width: ${breakpoints.xl}px) {
      max-width: ${getEmSize(widths.xl)};
    }
  `,
  displayFlex: css`
    display: flex;
  `,
  displayBlock: css`
    display: block;
  `,
  directionRow: css`
    flex-direction: row;
  `,
  directionColumn: css`
    flex-direction: column;
  `,
  paddingLarge: css`
    padding: ${getEmSize(160)} ${getEmSize(dimensions.containerPadding)};
  `,
  paddingRegular: css`
    padding: 0 ${getEmSize(dimensions.containerPadding)};
  `,
  noPaddingBottom: css`
    padding-bottom: 0;
  `
}
