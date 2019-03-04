import * as React from 'react'

import CustomTag from '../CustomTag'

import styles from './SectionHeading.style'

interface ISectionHeadingProps {
  primaryText: string
  secondaryText?: string
  className?: string
  align?: string
  tag?: string
  css?: any
}

const SectionHeading = (props: ISectionHeadingProps) => {
  let alignment
  switch (props.align) {
    case 'left':
      alignment = styles.alignLeft
      break
    case 'right':
      alignment = styles.alignRight
      break
    case 'center':
      alignment = styles.alignCenter
      break
    default:
      alignment = styles.alignCenter
      break
  }
  return (
    <div css={[styles.root, alignment, props.css && props.css]} className={props.className && props.className}>
      <CustomTag tag={props.tag ? props.tag : 'h2'}>{props.primaryText}</CustomTag>
      <h3>{props.secondaryText}</h3>
    </div>
  )
}

export default SectionHeading
