import React from 'react'

import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

interface ILightCtaProps {
  color?: string
  tailColor?: string
  text: string
  [key: string]: any
}

const LightCta: React.SFC<ILightCtaProps> = ({ tailColor, text }: ILightCtaProps) => {
  return (
    <div className="mt-16">
      <span
        css={css`
          display: inline-block;
          height: 1px;
          width: 16px;
          margin-right: 10px;
          background: ${tailColor ? tailColor : colors.yellow};
          vertical-align: middle;
        `}
      />{' '}
      {text}
    </div>
  )
}

export default LightCta
