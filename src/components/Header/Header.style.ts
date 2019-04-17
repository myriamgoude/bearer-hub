import { css } from '@emotion/core'

import { heights, dimensions } from '../../styles/variables'

export default {
  root: css`
    height: ${heights.header}px;
    padding: 1rem ${dimensions.containerPadding}rem;
    position: relative;
    z-index: 100;
    margin-bottom: -${heights.header}px;
  `,
  container: css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
  `,
  link: css`
    align-self: flex-start;
    display: flex;
    align-items: center;
    height: 100%;
    flex: 0 1 30%;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  `,
  image: css`
    height: 2rem;
    line-height: 2rem;
    vertical-align: bottom;
    margin-right: 0.5rem;
    width: auto;
  `,
  enriched: css`
    border-bottom-right-radius: 9px;
    border-bottom-left-radius: 9px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(3, 13, 54, 0.08);
    padding: 4rem 1rem 1rem 1rem;
    position: absolute;
    top: -1rem;
    left: -1.4rem;
    z-index: -1;

    & img {
      margin-right: 0;
    }

    & a {
      padding-right: 0.2rem;
    }

    & a:last-of-type {
      padding-right: 0;
    }
  `
}
