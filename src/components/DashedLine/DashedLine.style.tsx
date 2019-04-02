import css from '@emotion/css'
import { colors } from '../../styles/variables'

export default {
  root: css`
    display: block;
    width: 100%;
    height: 1px;
    position: relative;
    left: 0;
    text-align: center;
    user-select: none;
    pointer-events: none;
  `,
  mention: css`
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    top: -30px;
    margin: auto;
    width: 130px;
    height: 60px;
    line-height: 60px;
    padding: 0 1em;
    color: ${colors.link[2]};
  `
}
