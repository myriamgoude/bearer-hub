import { css } from 'emotion'
import { getEmSize } from '../../styles/mixins'
import { colors, dimensions } from '../../styles/variables'

export default {
  root: css`
    color: ${colors.branded.darkBlue};
    font-size: ${getEmSize(dimensions.fontSize.large)};
  `,
  fontSmall: css`
    font-size: ${getEmSize(dimensions.fontSize.small)};
  `,
  fontLarge: css`
    font-size: ${getEmSize(dimensions.fontSize.large)};
  `
}
