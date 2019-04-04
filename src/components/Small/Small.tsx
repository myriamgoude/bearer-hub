import React from 'react'
import styles from './Small.style'

interface ISmallProps {
  children: any
  style?: any
}

const Small = (props: ISmallProps) => {
  return <small css={[styles.root, props.style]}>{props.children}</small>
}

export default Small
