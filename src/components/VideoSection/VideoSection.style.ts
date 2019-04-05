import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

export default {
  root: css`
    background: url(${require('../../images/homepage-waves-2.svg')}) no-repeat center center / contain;
    display: flex;
    align-items: center;
  `,
  video: css`
    height: 310px;
    max-width: 711px;
    margin: auto;
    border-radius: 4px;
    background-color: ${colors.lightblack};
    box-shadow: 0 31px 70px 0 rgba(3, 13, 54, 0.08);
    position: relative;
    z-index: 5;
  `,
  button: css`
    position: relative;
    z-index: 10;
    margin-top: -1rem;
  `
}
