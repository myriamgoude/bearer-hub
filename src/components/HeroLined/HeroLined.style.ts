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
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    max-height: 300px;
    transform: translateY(-50%);

    &:before {
      content: '';
      display: block;
      width: 2px;
      position: absolute;
      height: 88px;
      left: 0;
      right: 0;
      top: -120px;
      margin: auto;
      background: ${colors.yellow};
      z-index: 5;
    }
    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 88px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -120px;
      margin: auto;
      background: ${colors.yellow};
      z-index: 5;
    }
  `
}
