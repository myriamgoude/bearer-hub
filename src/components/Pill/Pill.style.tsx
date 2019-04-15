import { css } from '@emotion/core'
import { getEmSize } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'

export default {
  root: css`
    height: ${getEmSize(88)};
    width: ${getEmSize(88)};
    background: linear-gradient(180deg, #f5f6fa 0%, #ffffff 100%);
    box-shadow: 0 2px 5px 0 rgba(3, 13, 54, 0.15);
    border-radius: 200px;
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (max-width: ${breakpoints.lg}px) {
      width: 60px;
      height: 60px;
      padding: 8px;
    }
  `
}
