import { css } from '@emotion/core'
import { colors, breakpoints } from '../../styles/variables'

export default {
  root: css`
    align-self: flex-end;
  `,
  link: css`
    position: relative;
    padding: 0 0.75rem;
    line-height: 1rem;
    height: 1rem;
    font-size: 0.875rem;
    letter-spacing: 0.12px;
    color: ${colors.darkBlue};

    &:hover,
    &:focus {
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
    }
  `,
  list: css`
    margin: 0;
    display: none;
    background: ${colors.darkBlue};
    top: 0;
    left: 0;
    width: 100%;
    padding: 2em 0;

    @media (min-width: ${breakpoints.md}px) {
      display: inline-block;
      background: transparent;
      color: ${colors.black};
      width: auto;
      padding: 0;
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
      // border-right: 1px solid #eceef8;
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
