import { css } from '@emotion/core'
import { colors, breakpoints } from '../../styles/variables'

export default {
  root: css`
    flex-direction: column;
    align-items: center;
    position: relative;
    height: auto;

    & .hero-half {
      width: 50%;
      text-align: right;
    }
    & .hero-half:first-of-type {
      width: 100%;
      text-align: center;
      margin-top: -3rem;
      h1 {
        margin-bottom: 2rem;
      }
      @media (min-width: ${breakpoints.md}px) {
        width: 100%;
      }

      @media (min-width: ${breakpoints.lg}px) {
        margin-top: 0;
        width: 45%;
        margin-right: 5%;
        text-align: left;
      }
    }
    @media (min-width: ${breakpoints.md}px) {
      flex-direction: row;
    }
    @media (max-width: ${breakpoints.lg}px) {
      padding-left: 3rem;
      padding-right: 3rem;
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
      height: 380px;
      width: auto;
    }
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
    background-size: contain;
  `,
  styleBackgroundExplore: css`
    background: url(${require('../../images/hero-explore.svg')}) no-repeat;
    background-position: top 300px center;
    background-size: contain;
    position: relative;
    @media (min-width: ${breakpoints.sm}px) {
      background-position: top 250px center;
    }
    @media (min-width: ${breakpoints.md}px) {
      background-position: top 200px center;
    }
    @media (min-width: ${breakpoints.lg}px) {
    }
    @media (min-width: ${breakpoints.xl}px) {
      background-position: top 100px center;
    }

    @media (min-width: ${breakpoints.xxl}px) {
      background-position: top 50px center;
    }

    @media (max-width: ${breakpoints.lg}px) {
      background-size: 470px;
      background-position: center top 300px;
      padding-top: 60px;
    }
  `,
  styleBackgroundExploreAfter: css`
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 17rem;
      background-image: url(${require('../../images/explore-hero-shape.svg')});
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
      background-color: transparent;
      position: absolute;
    }
  `,
  styleBackgroundBefore: css`
    margin-top: -18rem;
  `,

  styleDefaultCurve: css`
    background: url(${require('../../images/hero-background-homepage.svg')}) no-repeat top right;
  `
}
