import React from 'react'
import styles from './Text.style'

interface ITextProps {
  text?: string | any
  className?: any
  small?: boolean
  large?: boolean
}

const Text = (props: ITextProps) => {
  return (
    <p
      css={[
        styles.root,
        props.className && props.className,
        props.small && styles.fontSmall,
        props.large && styles.fontLarge
      ]}
    >
      {props.text}
    </p>
  )
}

export default Text
