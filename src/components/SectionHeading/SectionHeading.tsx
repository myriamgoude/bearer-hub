import * as React from 'react'

import Text from '../Text'

import styles from './SectionHeading.style'

interface ISectionHeadingProps {
  primaryText?: string | any
  secondaryText?: string
  className?: string
  align?: string
  tag?: string
  style?: any
  children?: any
  tooltip?: any
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
    <div css={[styles.root, alignment, props.style]} className={props.className}>
      {props.primaryText && (
        <Text tag={props.tag ? props.tag : 'h2'} css={styles.heading}>
          {props.primaryText} {props.tooltip}
        </Text>
      )}
      {props.secondaryText && <h3 css={styles.heading}>{props.secondaryText}</h3>}
      {props.children}
    </div>
  )
}
export default SectionHeading
