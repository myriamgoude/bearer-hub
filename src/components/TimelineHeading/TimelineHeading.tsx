import * as React from 'react'
import Text from '../Text'

import styles from './TimelineHeading.style'

interface TimelineHeadingProps {
  primaryText: string
  secondaryText?: string
  style?: any
}

const TimelineHeading = (props: TimelineHeadingProps) => {
  return (
    <div css={[styles.root, props.style && props.style]}>
      <Text tag="h1" text={props.primaryText} />
      <Text tag="h3" text={props.secondaryText} />
    </div>
  )
}
export default TimelineHeading
