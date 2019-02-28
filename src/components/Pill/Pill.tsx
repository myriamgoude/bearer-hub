import * as React from 'react'
import { cx } from 'emotion'
import styles from './Pill.css'

interface IPillProps {
  logo: string
  className?: string
}

const Pill = (props: IPillProps) => (
  <div className={cx(styles.root, props.className && props.className)}>
    <img src={props.logo} alt={`brand logo`} />
  </div>
)

export default Pill
