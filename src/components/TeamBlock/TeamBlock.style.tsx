import { css } from '@emotion/core'
import { dimensions, breakpoints } from '../../styles/variables'
import { getEmSize } from '../../styles/mixins'

export default {
  root: css`
    padding: 0 ${getEmSize(16)};
    max-width: 272px;
    @media (max-width: ${breakpoints.lg}px) {
      max-width: 100%;
    }
  `,
  container: css`
    position: relative;
    width: 180px;
    @media (max-width: ${breakpoints.lg}px) {
      width: 100%;
    }
  `,
  image: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  `,
  imageContainer: css`
    height: 215px;
    @media (max-width: ${breakpoints.lg}px) {
      height: 64px;
      width: 64px;
      display: inline-block;
      float: left;
      margin-right: 16px;
    }
  `,
  title: css`
    font-size: ${dimensions.headingSizes.h4}em;
    margin: 8px 0 0 0;
  `
}
