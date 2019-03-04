import { css } from '@emotion/core'
import { dimensions } from '../../styles/variables'
import { getEmSize } from '../../styles/mixins'

export default {
  root: css`
    padding: 0 ${getEmSize(16)};
  `,
  container: css`
    position: relative;
  `,
  containerIcon: css`
    position: absolute;
    display: block;
    top: -70px;
    left: -40px;
    width: ${getEmSize(100)};
    height: ${getEmSize(100)};
  `,
  backgroundIcon: css`
    position: absolute;
    width: 100%;
    height: 100%;
  `,
  icon: css`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  title: css`
    font-size: ${dimensions.headingSizes.h3}em;
  `
}
