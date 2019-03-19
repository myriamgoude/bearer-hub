import { css } from '@emotion/core'
import { colors, breakpoints } from '../../styles/variables'

export default {
  root: css`
    align-self: flex-end;
  `,
  link: css`
    &:hover,
    &:focus {
      text-decoration: none;
    }
    padding: 0.6rem 0.75rem;
    min-width: 2rem;
    line-height: 2em;
    font-size: 14px;
    letter-spacing: 0.12px;
    line-height: 17px;
    color: currentColor;
  `,
  linkActive: css`
    color: red;
  `,
  list: css`
    margin: 0;
    display: none;
    background: ${colors.darkBlue};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: white !important;
    padding: 2em 0;

    @media (min-width: ${breakpoints.md}px) {
      display: block;
      background: transparent;
      color: ${colors.black};
    }

    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      list-style: none;

      @media (min-width: ${breakpoints.md}px) {
        width: auto;
        display: inline-block;
      }
    }
  `,
  mobileList: css`
    display: block !important;
  `,

  mobileButton: css`
    appearance: none;
    display: block;
    position: fixed;
    z-index: 10;
    top: 8px;
    right: 8px;
    @media (min-width: ${breakpoints.md}px) {
      display: none;
    }
  `
}
