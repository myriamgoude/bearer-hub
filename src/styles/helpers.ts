import { css } from '@emotion/core'
import { colors, dimensions, breakpoints } from './variables'
import { getEmSize } from './mixins'

export const helpers = {
  h1: css`
    font-size: ${dimensions.headingSizes.h1}em;
    font-weight: bold;
    color: ${colors.darkBlue};

    @media (max-width: ${breakpoints.lg}px) {
      font-size: ${dimensions.headingSizes.h1 / 1.2}em;
    }
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
  `,

  markdownPages: css`
    margin: auto;
    width: 100%;
    color: ${colors.darkBlue};

    p {
      font-size: ${dimensions.fontSize.regular}px;
    }

    h1,
    h2,
    h3,
    h4,
    b,
    strong {
      color: currentColor;
    }

    h2 {
      font-family: 'ProximaNova-Bold';
    }
    h3 {
      font-weight: 300;
    }

    /**
      Since we're using parsed markdown as only DOM, we'll have to assume that
      the DOM will always be formatted that the following:

      H2 title
      H3 subtitle
      P  content

      H2 title
      H3 subtitle
      P  content

      The following style will only work if this structure is respected
      */

    h2:not(:first-of-type) {
      margin-top: ${getEmSize(48)};
    }
  `
}
export default helpers
