import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

export default {
  root: css`
    height: 64px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.06);
    justify-content: center;
    align-items: center;
  `,
  item: css`
    display: inline-block;
    font-family: 'ProximaNova-Semibold';
    padding: 0 8px;
    height: 64px;
    line-height: 64px;
    color: ${colors.secondary[1]};
    border-bottom: 2px solid white;
  `,
  active: css`
    color: ${colors.yellow};
    border-color: currentColor;
  `
}
