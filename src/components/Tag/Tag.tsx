import React from 'react'
import { css } from '@emotion/core'
import styles from './Tag.style'
import { hexToRGB } from '../../services/Browser'

interface ITagProps {
  text?: string | any
  style?: any
  children?: any
  color?: string
}

const Tag = (props: ITagProps) => {
  const color = props.color
  return (
    <span
      css={[
        styles.root,
        css`
          background-color: ${color ? hexToRGB(color, 0.12) : 'rgba(100,100,100,0.2)'};
          color: ${color ? color : 'rgba(100,100,100,1)'};
        `
      ]}
    >
      {props.text || props.children}
    </span>
  )
}
export default Tag
