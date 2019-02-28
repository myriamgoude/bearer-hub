import * as React from 'react'
import { css, cx } from 'emotion'

import Container from '../Container/Container'

import styles from './Section.css'

interface ISectionProps {
  children: any
  background?: string
  className?: string
  withTail?: boolean
}

const Section = (props: ISectionProps) => (
  <div
    className={cx(
      styles.root,
      props.className,
      props.withTail && styles.tail,
      props.background &&
        css`
          background: ${props.background};
        `
    )}
  >
    <Container>{props.children}</Container>
  </div>
)

export default Section
