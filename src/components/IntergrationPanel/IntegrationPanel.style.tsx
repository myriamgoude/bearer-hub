import { css } from '@emotion/core'

export default {
  item: css`
    width: 100%;
    text-align: center;
  `,
  cardImage: css`
    height: 4rem;
    max-width: 8rem;
  `,
  cardTags: css`
    width: 80%;
    margin: 0 auto;
    & > span {
      margin-bottom: 0.25rem;
    }

    & > span:nth-oftype(3) {
      margin-left: 0;
    }
  `
}
