import { css } from '@emotion/core'
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
    height: 300px;

    @media (min-width: ${breakpoints.lg}px) {
      height: 400px;
    }
  `,
  heightXl: css`
    height: 800px;
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
  `,

  styleBackgroundHome: css`
    background: url(${require('../../images/hero-background-homepage.svg')}) no-repeat top right;
    background-size: 600px;

    @media (min-width: ${breakpoints.sm}px) {
      background-size: auto 300px;
    }
    @media (min-width: ${breakpoints.md}px) {
      background-size: auto 400px;
    }
    @media (min-width: ${breakpoints.lg}px) {
      background-size: auto 600px;
    }
  `
}
