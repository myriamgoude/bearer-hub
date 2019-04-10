import { css } from '@emotion/core'
import { getEmSize } from '../../styles/mixins'

export default {
  item: css`
    width: 100%;
    text-align: center;
  `,

  featured: css`
    position: relative;
    &&:after {
      content: '\u2605 Featured';
      display: block;
      width: ${getEmSize(80)};
      height: ${getEmSize(22)};
      line-height: ${getEmSize(22)};
      position: absolute;
      top: 0;
      right: 1em;
      text-align: center;
      border-radius: 0 0 2px 2px;
      font-size: ${getEmSize(14)};
      color: white;
      background: linear-gradient(50.21deg, #ffce00 0%, #fbbb18 100%);
    }
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
