import { css } from '@emotion/core'
import { dimensions } from '../../styles/variables'
import { getEmSize } from '../../styles/mixins'

export default {
  root: css`
    padding: 0 ${getEmSize(16)};
    max-width: 272px;
  `,
  container: css`
    position: relative;
    width: 180px;
  `,
  image: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  `,
  imageContainer: css`
    height: 215px;
  `,
  title: css`
    font-size: ${dimensions.headingSizes.h4}em;
    margin: 8px 0 0 0;
  `
}
