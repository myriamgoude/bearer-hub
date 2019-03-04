import * as React from 'react'
import { css } from '@emotion/core'
interface IErrorProps {
  message: string
}
export const Error = (props: IErrorProps) => (
  <div
    css={css`
      background: rgba(255, 0, 0, 0.25);
      color: red;
      padding: 1em;
    `}
  >
    {props.message}
  </div>
)
