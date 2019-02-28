import React from 'react'
import { cx } from 'emotion'
import styles from './Text.css'

interface ITextProps {
  text?: string | any
  className?: any
  small?: boolean
  large?: boolean
}

const Text = (props: ITextProps) => {
  return (
    <p
      className={cx(
        styles.root,
        props.className && props.className,
        props.small && styles.fontSmall,
        props.large && styles.fontLarge
      )}
    >
      {props.text}
    </p>
  )
}

export default Text
