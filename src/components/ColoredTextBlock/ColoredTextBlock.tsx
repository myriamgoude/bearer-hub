import * as React from 'react'
import { css } from '@emotion/core'

import { colors, breakpoints } from '../../styles/variables'

import styles from './ColoredTextBlock.style'

import Text from '../Text'

interface IColoredTextBlocks {
  children?: any
  title: string
  text: any
  onClick?: any
  color?: string
  centered?: boolean
  icon?: string
  iconBg?: string
  style?: any
}

const ColoredTextBlock = (props: IColoredTextBlocks) => {
  const color = props.color ? props.color : colors.darkBlue
  return (
    <div css={[styles.root, props.style]} style={{ color }}>
      <div css={styles.container}>
        <object css={[styles.containerIcon, props.centered && styles.containerIconCentered]}>
          <img src={props.iconBg} css={styles.backgroundIcon} />
          <img src={props.icon} css={styles.icon} />
        </object>
        <h3
          css={[
            styles.title,
            props.centered &&
              css`
                text-align: center;
                @media (max-width: ${breakpoints.lg}px) {
                  text-align: left;
                }
                height: auto;
              `
          ]}
        >
          {props.title}
        </h3>
      </div>
      <Text text={props.text} />
    </div>
  )
}

export default ColoredTextBlock
