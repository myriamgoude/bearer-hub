import React from 'react'

import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

interface ILightCtaProps {
  color?: string
  tailColor?: string
  text: string
  style?: any
  [key: string]: any
}

const LightCta: React.SFC<ILightCtaProps> = ({ tailColor, text, style }: ILightCtaProps) => {
  return (
    <div
      css={[
        css`
          margin-bottom: 0.75rem;
          color: ${colors.darkBlue};
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
        `,
        style
      ]}
    >
      <span
        css={css`
          display: inline-block;
          height: 2px;
          width: 1.25rem;
          margin-right: 0.5rem;
          background: ${tailColor ? tailColor : colors.yellow};
        `}
      />{' '}
      {text}
    </div>
  )
}

export default LightCta
