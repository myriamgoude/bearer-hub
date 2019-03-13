import { css } from '@emotion/core'
import { colors } from '../../styles/variables'
import { getEmSize } from '../../styles/mixins'
export default {
  buttonStyle: css`
    border-radius: 4px;
    appearance: none;
    border: 0;
    cursor: pointer;
    font-weight: 600;
  `,

  linkStyle: `
    & + a {
      margin-left: ${getEmSize(8)};
    }
  `,

  regularButtonDimensions: css`
    height: 48px;
    line-height: 48px;
    padding: 0 ${getEmSize(24)};
  `,
  mediumButtonDimensions: css`
    height: 40px;
    line-height: 40px;
    padding: 0 ${getEmSize(18)};
  `,
  smallButtonDimensions: css`
    height: 32px;
    line-height: 32px;
    padding: 0 ${getEmSize(16)};
  `,

  primaryButton: css`
    background-color: ${colors.primary[1]};
    color: ${colors.secondary[0]};

    &:hover {
      background-color: ${colors.primary[0]};
    }
  `,
  secondaryButton: css`
    background-color: ${colors.secondary[0]};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.secondary[1]};
    }
  `,
  saveButton: css`
    background-color: ${colors.accent[0]};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.accent[1]};
    }
  `
}
