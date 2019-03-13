import { css } from '@emotion/core'
import { colors, dimensions } from './variables'

export const helpers = {
  h1: css`
    font-size: ${dimensions.headingSizes.h1}em;
    font-weight: bold;
    color: ${colors.darkBlue};
  `,
  h2: css`
    font-size: 32px;
    color: ${colors.darkBlue};
    font-family: 'ProximaNova-Semibold';
  `,
  h3: css`
    font-size: ${dimensions.headingSizes.h3}em;
    color: ${colors.darkBlue};
  `,
  h4: css`
    font-size: ${dimensions.headingSizes.h4}em;
  `,
  h5: css`
    font-size: 24px;
  `,

  paragraph: css`
    font-size: ${dimensions.fontSize.regular}px;
  `,

  small: css`
    font-size: ${dimensions.fontSize.small}px;
  `
}
export default helpers
