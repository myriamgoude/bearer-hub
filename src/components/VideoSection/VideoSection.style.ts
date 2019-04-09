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
    border-radius: 12px;
    background-color: ${colors.darkBlue};
    background-image: url(${require('../../images/video/demo.svg')});
    background-size: cover;
    box-shadow: 0 8px 17px 0 rgba(3, 13, 54, 0.16);
    position: relative;
    z-index: 5;
  `,
  button: css`
    position: relative;
    z-index: 10;
    margin-top: -1rem;
  `
}
