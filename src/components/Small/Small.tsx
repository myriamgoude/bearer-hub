import React from 'react'
import { css } from '@emotion/core'
import styles from './Small.style'

interface ISmallProps {
  children: any
  style?: any
  color?: string
}

const Small = (props: ISmallProps) => {
  return (
    <small
      css={[
        styles.root,
        props.style,
        css`
          color: ${props.color} !important;
        `
      ]}
    >
      {props.children}
    </small>
  )
}

export default Small
