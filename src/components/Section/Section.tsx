import * as React from 'react'
import { css } from '@emotion/core'

import Container from '../Container/Container'

import styles from './Section.style'

interface ISectionProps {
  children: any
  background?: string
  className?: any
  withTail?: boolean
  css?: any
}

const Section = (props: ISectionProps) => (
  <div
    css={[
      styles.root,
      props.css,
      props.withTail && styles.tail,
      props.background &&
        css`
          background: ${props.background};
        `
    ]}
    className={props.className && props.className}
  >
    <Container>{props.children}</Container>
  </div>
)
export default Section
