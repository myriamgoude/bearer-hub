import { css } from 'emotion'
import { getEmSize } from '../../styles/mixins'

export default {
  root: css`
    background: white;
    box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.26);
    border-radius: 6px;
  `,
  paddingRegular: css`
    padding: ${getEmSize(24)};
  `,
  paddingLarge: css`
    padding: ${getEmSize(24)} ${getEmSize(48)};
  `,
  heightSmall: css`
    height: 100%;
    max-height: 240px;
  `
}
