import { css } from '@emotion/core'
import { breakpoints, colors } from '../../styles/variables'

export default {
  root: css`
    width: 100%;
    @media (max-width: ${breakpoints.lg}px) {
      padding-left: 16px !important;
    }
  `,
  stageHeading: css`
    display: flex;
    padding-top: 16px;
    color: #030d36;
    font-size: 1.2rem;

    @media (max-width: ${breakpoints.lg}px) {
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 16px;
        height: 2px;
        background: ${colors.yellow};
        left: 8px;
        margin-top: 8px;
      }
    }
  `,
  stageTooltip: css`
    display: inline-block;
    margin: 0 0.75rem;
  `,
  stageHint: css`
    display: block;
    margin-top: 1rem;
    font-size: 0.875rem;
    line-height: 1.3 !important;
  `
}
