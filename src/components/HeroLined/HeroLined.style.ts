import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

export default {
  root: css`
    text-align: center;
    padding: 0;
    display: block;
  `,
  item: css`
    margin: auto;
    width: 100%;
    padding-top: 6rem;
    position: relative;

    &:before,
    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 5.5rem;
      margin: 2rem auto;
      background: ${colors.yellow};
      z-index: 5;
    }
  `
}
