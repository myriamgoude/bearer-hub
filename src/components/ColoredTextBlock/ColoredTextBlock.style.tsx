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
  `,
  containerIcon: css`
    position: absolute;
    display: block;
    top: -3.5rem;
    left: -1rem;
    width: 5rem;
    height: 5rem;
  `,
  containerIconCentered: css`
    left: 0;
    right: 0;
    margin: auto;
  `,
  backgroundIcon: css`
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
  `,
  icon: css`
    position: absolute;
    top: 40%;
    left: 32px;
    transform: translate(-50%, -50%);
  `,
  title: css`
    font-size: ${dimensions.headingSizes.h4}em;
    position: relative;
  `
}
