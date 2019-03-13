import React from 'react'
import Link from '../Link/Link'

import { css } from '@emotion/core'
import { colors } from '../../styles/variables'

import styles from './LightCta.style'
import helpers from '../../styles/helpers'

interface ILightCtaProps {
  to: string
  color?: string
  tailColor?: string
  text: string
  [key: string]: any
}

const LightCta: React.SFC<ILightCtaProps> = ({ to, tailColor, text }: ILightCtaProps) => {
  return (
    <div className="mt-16">
      <Link to={to} css={[styles.link, helpers.paragraph]}>
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
      </Link>
    </div>
  )
}

export default LightCta
