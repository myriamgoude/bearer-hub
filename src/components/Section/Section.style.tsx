import { css } from '@emotion/core'

import { getEmSize } from '../../styles/mixins'
import { colors } from '../../styles/variables'

export default {
  root: css`
    padding: 2em 0;
    position: relative;
  `,
  tail: css`
    padding: ${getEmSize(64 * 2)} 0;

    &:before {
      content: '';
      display: block;
      width: 2px;
      height: 88px;
      position: absolute;
      left: 0;
      right: 0;
      top: -64px;
      margin: auto;
      background: ${colors.yellow};
      z-index: 5;
    }
  `
}
