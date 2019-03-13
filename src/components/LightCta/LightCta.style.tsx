import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

export default {
  link: css`
    text-decoration: none;
    color: ${colors.darkBlue};
    &:hover {
      text-decoration: none;
    }
  `
}
