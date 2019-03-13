import { css } from '@emotion/core'

export default {
  root: css`
    height: 600px;
    background: url(${require('../../images/homepage-waves-2.svg')}) no-repeat center center / contain;
    display: flex;
    align-items: center;
  `,
  video: css`
    height: 310px;
    max-width: 711px;
    margin: auto;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 31px 70px 0 rgba(3, 13, 54, 0.08);
    position: relative;
    z-index: 5;
  `
}
