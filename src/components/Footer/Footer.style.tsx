import { css } from '@emotion/core'
import { breakpoints, colors, dimensions } from '../../styles/variables'

export default {
  root: css`
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    letter-spacing: -0.27px;
    line-height: ${dimensions.lineHeight.regular};
    position: relative;

    @media (max-width: ${breakpoints.sm}px) {
      padding: 2rem;
    }

    @media (min-width: ${breakpoints.sm}px) {
      padding: 2.5rem 2rem;
    }
  `,
  container: css`
    position: relative;
    @media (min-width: ${breakpoints.lg}px) {
      display: flex;
      justify-content: space-between;
    }
  `,
  main: css`
    display: flex;
    @media (max-width: ${breakpoints.lg}px) {
      display: block;
    }
  `,
  social: css`
    img {
      width: 1.5rem;
      margin-right: 1rem;
    }
    margin: 2rem 0 0 0;
    @media (max-width: ${breakpoints.lg}px) {
      margin: 5rem 0 0 0;
    }

    @media (min-width: ${breakpoints.lg}px) {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      margin: 0;
      text-align: right;

      a:last-child img {
        margin-right: 0;
      }
    }
  `,
  copyright: css`
    font-size: 0.875rem;

    @media (min-width: ${breakpoints.sm}px) {
      margin: 1rem 0;
    }

    @media (min-width: ${breakpoints.lg}px) {
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
    }
  `,
  categories: css`
    display: flex;
    flex-wrap: wrap;
  `,
  category: css`
    margin: 0 2rem;
    h3 {
      color: ${colors.gray.copy};
      text-transform: uppercase;
      font-size: 0.875rem;
      letter-spacing: 1px;
      line-height: 1rem;
      margin: 0;
      padding: 0;
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 1rem 0;

      a {
        color: inherit;
        text-decoration: none;
        font-size: 1rem;
        line-height: 1.8rem;

        &:hover {
          color: inherit;
          text-decoration: underline;
        }
      }
    }

    @media (max-width: ${breakpoints.md}px) {
      margin: 0 1rem;
      min-width: 120px;
    }

    @media (min-width: ${breakpoints.xl}px) {
      &:first-of-type {
        margin-left: 2rem;
      }
    }
  `,
  logo: css`
    a {
      border: 0;
    }

    a img {
      max-width: none;
      width: 7rem;
    }

    @media (min-width: ${breakpoints.sm}px) {
      margin-bottom: 2rem;
      margin-right: 1rem;
    }
    @media (max-width: ${breakpoints.sm}px) {
      margin-bottom: 3rem;
    }
  `
}
