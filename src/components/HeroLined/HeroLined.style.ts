import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

export default {
  root: css`
    text-align: center;
    padding: 0;
    height: 700px;
    display: block;
  `,
  item: css`
    margin: auto;
    width: 100%;
    padding-top: calc((64px * 2) + 40px);
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 2px;
      position: absolute;
      height: 64px;
      left: 0;
      right: 0;
      top: 64px;
      margin: auto;
      background: ${colors.yellow};
      z-index: 5;
    }
    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 64px;
      position: relative;
      left: 0;
      right: 0;
      bottom: -40px;
      margin: auto;
      background: ${colors.yellow};
      z-index: 5;
    }
  `
}
