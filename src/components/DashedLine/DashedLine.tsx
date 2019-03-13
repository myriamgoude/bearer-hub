import * as React from 'react'
import { css } from '@emotion/core'

import styles from './DashedLine.style'

import { colors } from '../../styles/variables'

interface IDashedLineProps {
  mention?: string
  mentionBg?: string
  color?: string
  className?: any
}

const DashedLine = (props: IDashedLineProps) => (
  <span css={[styles.root, props.className]}>
    <svg
      css={css`
        width: 100%;
      `}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="5" x2="100%" y2="5" stroke={colors.link[2]} strokeDasharray="10 5" />
    </svg>
    <span
      css={[
        styles.mention,
        css`
          background-color: ${props.mentionBg};
        `
      ]}
    >
      {props.mention}
    </span>
  </span>
)

export default DashedLine
