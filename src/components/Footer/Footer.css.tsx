import { css } from 'emotion'
import { breakpoints, colors, dimensions } from '../../styles/variables'

export default {
  root: css`
    background-color: ${colors.dark};
    color: ${colors.white};
    letter-spacing: -0.27px;
    line-height: ${dimensions.lineHeight.regular};
    position: relative;

    @media (max-width: ${breakpoints.sm}px) {
      padding: 2rem;
    }

    @media (min-width: ${breakpoints.sm}px) {
      padding: 2rem;
    }

    @media (min-width: ${breakpoints.xl}px) {
      display: flex;
      justify-content: space-between;
    }
  `,
  main: css`
    @media (min-width: ${breakpoints.md}px) {
      display: flex;
    }
  `,
  social: css`
    img {
      width: 1.5rem;
      margin-right: 1rem;
    }

    @media (min-width: ${breakpoints.lg}px) {
      margin: 0 0 0 2rem;
    }

    @media (min-width: ${breakpoints.xl}px) {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      margin: 2.875rem 2rem 0 0;
      text-align: right;

      a:last-child img {
        margin-right: 0;
      }
    }
  `,
  copyright: css`
    @media (min-width: ${breakpoints.sm}px) {
      margin: 1rem 0 0 0;
    }

    @media (min-width: ${breakpoints.lg}px) {
      margin: 1rem 0 0 2rem;
    }

    @media (min-width: ${breakpoints.xl}px) {
      position: absolute;
      bottom: 2rem;
      right: 4rem;
      text-align: right;
    }
  `,
  categories: css`
    @media (min-width: ${breakpoints.md}px) {
      display: flex;
    }
  `,
  category: css`
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

      a {
        color: inherit;
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          color: inherit;
          text-decoration: underline;
        }
      }
    }

    @media (max-width: ${breakpoints.sm}px) {
      margin: 1rem 0;

      ul {
        margin: 1rem 0 0 0;
        padding: 0;
      }
    }

    @media (min-width: ${breakpoints.sm}px) {
      ul {
        margin: 2rem 0 2rem 0;
        padding: 0;
      }
    }

    @media (min-width: ${breakpoints.md}px) {
      margin-right: 4rem;
    }

    @media (min-width: ${breakpoints.lg}px) {
      margin: 0 2rem;

      &:first-child {
        margin-left: 1rem;
      }
    }

    @media (min-width: ${breakpoints.xl}px) {
      &:first-child {
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
    }

    @media (min-width: ${breakpoints.md}px) {
      padding: 0 2rem;
    }
  `
}
