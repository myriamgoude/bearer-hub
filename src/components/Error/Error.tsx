import * as React from 'react'
import { css, cx } from 'emotion'
interface IErrorProps {
  message: string
}
export const Error = (props: IErrorProps) => (
  <div
    className={cx(
      css`
        background: rgba(255, 0, 0, 0.25);
        color: red;
        padding: 1em;
      `
    )}
  >
    {props.message}
  </div>
)
