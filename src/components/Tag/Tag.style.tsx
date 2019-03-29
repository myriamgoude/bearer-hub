import { css } from '@emotion/core'
import { getEmSize } from '../../styles/mixins'

export default {
  root: css`
    display: inline-block;
    font-size: ${getEmSize(12)};
    padding: 0 10px;
    border-radius: 100px;
    text-transform: uppercase;
    max-height: 20px;
    line-height: 20px;

    & + span {
      margin-left: 8px;
    }
  `
}
