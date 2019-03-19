import { css } from '@emotion/core'

import { heights, dimensions, colors } from '../../styles/variables'

export default {
  root: css`
    height: ${heights.header}px;
    padding: 1em ${dimensions.containerPadding}rem;
    color: ${colors.black};
    position: relative;
    z-index: 100;
    margin-bottom: -${heights.header}px;
  `,
  container: css`
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
  `
}
