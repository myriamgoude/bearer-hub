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
  `,
  containerIcon: css`
    position: absolute;
    display: block;
    top: -4rem;
    left: -1rem;
    width: 100%;
    height: 5rem;
  `,
  containerIconCentered: css`
    left: 0;

    & > img {
      position: absolute;
      margin: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `,
  backgroundIcon: css`
    z-index: 0;
    position: absolute;
    height: 100%;
    left: 0;
  `,
  icon: css`
    position: absolute;
    height: 40%;
    top: 40%;
    left: 32px;
    transform: translate(-50%, -50%);
  `,
  title: css`
    font-size: ${dimensions.headingSizes.h4}em;
    position: relative;
    color: inherit;
    overflow: hidden;
    height: 3rem;
  `
}
