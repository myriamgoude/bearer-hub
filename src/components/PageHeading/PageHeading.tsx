import * as React from 'react'
import Text from '../Text'

import styles from './PageHeading.style'

interface PageHeadingProps {
  primaryText: string
  secondaryText?: string
  style?: any
}

const PageHeading = (props: PageHeadingProps) => {
  return (
    <div css={[styles.root, props.style && props.style]}>
      <Text tag="h1" text={props.primaryText} />
      <Text tag="h3" text={props.secondaryText} />
    </div>
  )
}
export default PageHeading
