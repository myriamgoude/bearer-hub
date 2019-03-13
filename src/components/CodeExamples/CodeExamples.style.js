import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

const styles = {
  backendList: css`
    margin-left: 1.45rem;
  `,
  frontendList: css`
    margin-right: 1.45rem;
  `,
  backendActive: css`
    &:before,
    &:after {
      content: '';
      display: block;
      height: 1px;
      background-color: ${colors.yellow};
      position: absolute;
      top: -2px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    &:before {
      right: inherit;
      left: -14px;
      width: 8px;
    }
    &:after {
      right: -38px;
      left: inherit;
      width: 34px;
    }
  `,
  frontendActive: css`
    &:before,
    &:after {
      content: '';
      display: block;
      height: 1px;
      background-color: ${colors.yellow};
      position: absolute;
      top: -2px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    &:before {
      right: inherit;
      left: -38px;
      width: 34px;
    }
    &:after {
      right: -14px;
      left: inherit;
      width: 8px;
    }
  `
}

export default styles
