import React from 'react'
import styles from './Small.style'

interface ISmallProps {
  children: any
}

const Small = (props: ISmallProps) => {
  return <small css={styles.root}>{props.children}</small>
}

export default Small
