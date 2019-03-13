import React from 'react'
import styles from './Text.style'
import CustomTag from '../CustomTag'
import { helpers } from '../../styles/helpers'

interface ITextProps {
  text?: string | any
  style?: any
  small?: boolean
  large?: boolean
  tag?: string
  children?: any
}

const Text = (props: ITextProps) => {
  return (
    <CustomTag
      tag={props.tag ? props.tag : 'p'}
      className={[
        styles.root,
        helpers.paragraph,
        props.style && props.style,
        props.small && styles.fontSmall,
        props.large && styles.fontLarge,
        props.tag === 'h1' && helpers.h1,
        props.tag === 'h2' && helpers.h2,
        props.tag === 'h3' && helpers.h3,
        props.tag === 'h4' && helpers.h4,
        props.tag === 'h5' && helpers.h5
      ]}
    >
      {props.text || props.children}
    </CustomTag>
  )
}
export default Text
