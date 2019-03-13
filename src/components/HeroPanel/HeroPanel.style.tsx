import { css } from '@emotion/core'
import { colors, breakpoints } from '../../styles/variables'

export default {
  root: css`
    flex-direction: column;
    align-items: center;
    position: relative;
    @media (min-width: ${breakpoints.md}px) {
      flex-direction: row;
    }
  `,
  subtitle: css`
    margin-top: 12px;
  `,
  halfItem: css`
    flex: 0 1 50%;
  `,
  fullItem: css`
    flex: 0 1 100%;
  `,
  highlight: css`
    color: ${colors.yellow};
  `,
  illustration: css`
    height: 300px;

    @media (min-width: ${breakpoints.lg}px) {
      height: 440px;
      width: auto;
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
      bottom: -1px; /* 0 will cause an uncontrolled line that might appear */
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
      background-size: 990px;
    }
    @media (min-width: ${breakpoints.xl}px) {
      background-size: 1200px;
    }
  `,
  styleBackgroundExplore: css`
    background: url(${require('../../images/hero-explore.svg')}) no-repeat bottom 200px center / 1200px;
  `
}
