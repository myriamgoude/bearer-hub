import * as React from 'react'
import { css } from '@emotion/core'

import { colors } from '../../styles/variables'

import styles from './ColoredTextBlock.style'

import Text from '../Text'

interface IColoredTextBlocks {
  children?: any
  title: string
  text: any
  onClick?: any
  color?: string
  icon?: string
  iconBg?: string
}

const ColoredTextBlock = (props: IColoredTextBlocks) => {
  const color = props.color ? props.color : colors.branded.black
  return (
    <div css={styles.root}>
      <div css={styles.container}>
        <object css={styles.containerIcon}>
          <img src={props.iconBg} css={styles.backgroundIcon} />
          <img src={props.icon} css={styles.icon} />
        </object>
        <h3
          css={[
            styles.title,
            css`
              color: ${color};
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
