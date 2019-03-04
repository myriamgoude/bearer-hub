import * as React from 'react'
import styles from './PageHeading.style'

interface PageHeadingProps {
  primaryText: string
  secondaryText?: string
}

const PageHeading = (PageHeadingProps: PageHeadingProps) => (
  <div css={styles.root}>
    <h1>{PageHeadingProps.primaryText}</h1>
    <h3>{PageHeadingProps.secondaryText}</h3>
  </div>
)

export default PageHeading
