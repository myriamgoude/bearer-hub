import { css } from 'emotion'
import { colors, breakpoints } from '../../styles/variables'

export default {
  root: css`
    flex-direction: column;
    align-items: center;
    @media (min-width: ${breakpoints.md}px) {
      flex-direction: row;
    }
  `,
  heroItem: css`
    flex: 0 1 50%;
  `,
  highlight: css`
    color: ${colors.branded.yellow};
  `,
  illustration: css`
    height: 200px;

    @media (min-width: ${breakpoints.lg}px) {
      height: 300px;
    }
  `,
  heightXl: css`
    height: 800px;
  `,

  backgroundHomepage: css`
    background-image: radial-gradient(circle at 62% 40%, #f6faff, #f6faff 1%, #f0f2fc);
  `,
  curvedSection: css`
    &::after {
      display: block;
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: url(${require('../../images/curve.svg')}) no-repeat center bottom / 100%;
      bottom: 0;
      height: 300px;
      user-select: none;
      pointer-events: none;
    }
  `
}
