import { css } from 'emotion'
import { getEmSize } from '../../styles/mixins'

export default {
  root: css`
    width: 100%;
    flex-shrink: 0;
    text-align: left;
    display: block;
    margin-bottom: ${getEmSize(48)};
  `,
  alignLeft: css`
    text-align: left;
  `,
  alignCenter: css`
    text-align: center;
  `,
  alignRight: css`
    text-align: right;
  `
}