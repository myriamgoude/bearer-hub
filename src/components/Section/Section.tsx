import * as React from 'react'
import { css } from '@emotion/core'

import Container from '../Container/Container'

import styles from './Section.style'

interface ISectionProps {
  children: any
  background?: string
  className?: any
  withTail?: boolean
  style?: any
  styleContainer?: any
}

const Section = (props: ISectionProps) => (
  <div
    css={[
      styles.root,
      props.withTail && styles.tail,
      props.background &&
        css`
          background: ${props.background};
        `,
      props.style && props.style
    ]}
    className={props.className && props.className}
  >
    <Container style={props.styleContainer}>{props.children}</Container>
  </div>
)
export default Section
