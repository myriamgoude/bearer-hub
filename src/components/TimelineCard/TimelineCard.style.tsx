import { css } from '@emotion/core'

export default {
  root: css`
    background: #f3f6ff;
    border: 1px solid #dde0ee;
    padding: 30px 16px 40px 16px;
    border-radius: 4px;
    height: auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(3, 13, 54, 0.15);
  `,
  table: css`
    background: white;
    position: absolute;
    height: 40px;
    width: 100%;
    left: 0;
    border-top: 1px solid #ced5ea;
    user-select: none;
    pointer-events: none;
  `,
  tableItem: css`
    width: 60px;
    height: 40px;
    line-height: 40px;
  `,
  tableLanguage: css`
    width: calc(100% - 60px);
  `
}
