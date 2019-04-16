import { css } from '@emotion/core'
import { dimensions, breakpoints } from '../../styles/variables'
import { getEmSize } from '../../styles/mixins'

export default {
  root: css`
    padding: 0 ${getEmSize(16)};
    margin-bottom: 1rem;
    max-width: 272px;
    text-align: center;
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
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  `,
  imageContainer: css`
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
