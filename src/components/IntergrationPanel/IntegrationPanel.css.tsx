import { css } from 'emotion'
export default {
  item: css`
    width: 100%;
  `,
  featured: css`
    position: relative;
    &&:after {
      content: '\u2605 Featured';
      display: block;
      width: 80px;
      height: 22px;
      line-height: 22px;
      position: absolute;
      top: 0;
      right: 1em;
      text-align: center;
      border-radius: 0 0 2px 2px;
      font-size: 14px;
      color: white;
      background: linear-gradient(50.21deg, #ffce00 0%, #fbbb18 100%);
    }
  `,
  cardImageContainer: css`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0.3em;
  `,
  cardImage: css`
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  `
}
