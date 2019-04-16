import { css } from '@emotion/core'
import { colors, breakpoints } from '../../styles/variables'

export default {
  root: css`
    align-self: flex-end;
    @media (max-width: ${breakpoints.lg}px) {
      .desktop-login {
        display: none !important;
      }
    }
  `,
  link: css`
    text-decoration: none;
    position: relative;
    padding: 0 0.75rem;
    line-height: 1rem;
    height: 1rem;
    font-size: 0.875rem;
    letter-spacing: 0.12px;
    color: ${colors.darkBlue};

    &:hover,
    &:focus {
      font-weight: bold;
      text-decoration: none;
    }

    &.active {
      font-weight: bold;
    }

    &.active:before {
      content: '';
      display: block;
      width: 2px;
      height: 18px;
      background: ${colors.yellow};
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: -30px;
      @media (max-width: ${breakpoints.lg}px) {
        display: none;
      }
    }
  `,
  list: css`
    .mobile-login {
      display: none;
    }

    @media (min-width: ${breakpoints.lg}px) {
      display: inline-block;
      background: transparent;
      color: ${colors.black};
      width: auto;
      padding: 0;
    }
    @media (max-width: ${breakpoints.lg}px) {
      margin: 0;
      background: ${colors.lightGrey};
      top: 0;
      left: 0;
      width: 100%;
      padding: 2em 0;
      position: fixed;
      color: ${colors.darkBlue};
      box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.26);

      li a {
        color: currentColor;
        font-weight: bold;
      }

      display: none;
      &.show {
        display: block;
      }

      .mobile-login {
        display: block;
        padding: 1em;
      }
    }

    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      list-style: none;

      @media (min-width: ${breakpoints.lg}px) {
        width: auto;
        display: inline-block;
      }
    }

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:not(:last-child)::after {
      display: inline-block;
      content: '';
      width: 1px;
      height: 1.5rem;
      margin-bottom: -0.5rem;
      margin-left: 1rem;
      background-color: #e2e6f1;
      border-right: 1px solid #eceef8;

      @media (max-width: ${breakpoints.lg}px) {
        display: none;
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
    border: none;
    background: transparent;
    z-index: 10;
    top: 16px;
    right: 8px;
    @media (min-width: ${breakpoints.lg}px) {
      display: none;
    }
  `
}
