import React from 'react'
import Link from '../Link/Link'

import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

import styles from './LightCta.style'

interface ILightCtaProps {
  to: string
  color?: string
  tailColor?: string
  text: string
  [key: string]: any
}

const LightCta: React.SFC<ILightCtaProps> = ({ to, color, tailColor, text }: ILightCtaProps) => {
  return (
    <div className="mt-16">
      <Link
        to={to}
        css={[
          styles.link,
          css`
            color: ${color ? color : colors.branded.black};
          `
        ]}
      >
        <span
          css={css`
            display: inline-block;
            height: 1px;
            width: 18px;
            border: 1px solid ${tailColor ? tailColor : colors.branded.primary[0]};
            vertical-align: middle;
          `}
        />{' '}
        {text}
      </Link>
    </div>
  )
}

export default LightCta
