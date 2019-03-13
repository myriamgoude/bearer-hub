import { css } from '@emotion/core'
import { getEmSize } from '../../styles/mixins'
import { colors, dimensions } from '../../styles/variables'

export default {
  root: css`
    display: inline-block;
    color: ${colors.darkBlue};
    font-size: ${getEmSize(dimensions.fontSize.large)};
  `,
  fontSmall: css`
    font-size: ${getEmSize(dimensions.fontSize.small)};
  `,
  fontLarge: css`
    font-size: ${getEmSize(dimensions.fontSize.large)};
  `
}
