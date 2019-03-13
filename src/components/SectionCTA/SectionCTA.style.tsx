import { css } from '@emotion/core'

export default {
  root: css`
    background: url(${require('../../images/cta-blue-splash.svg')}) no-repeat center center / 100% 560px;
  `,
  rootIntegrations: css`
    background: url(${require('../../images/shared/cut-wave.svg')}) no-repeat center bottom -250px / cover;
  `
}
