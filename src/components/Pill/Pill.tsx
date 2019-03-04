import * as React from 'react'
import styles from './Pill.style'

interface IPillProps {
  logo: string
  className?: string
}

const Pill = (props: IPillProps) => (
  <div css={[styles.root, props.className && props.className]}>
    <img src={props.logo} alt={`brand logo`} />
  </div>
)

export default Pill
