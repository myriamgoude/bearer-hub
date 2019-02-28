import * as React from 'react'
import { css, cx } from 'emotion'
import styles from './Container.css'

interface ContainerProps {
  className?: string
  flex?: boolean
  flexDirection?: string
  padding?: string
  style?: string
}

const Container: React.SFC<ContainerProps> = ({ children, className, flex, flexDirection, padding, style }) => {
  const containerClass = cx(
    styles.root,
    className,
    flex ? styles.displayFlex : styles.displayBlock,
    flexDirection === 'row' ? styles.directionRow : styles.directionColumn,
    padding === 'large' ? styles.paddingLarge : styles.paddingRegular,
    style &&
      css`
        ${style}
      `
  )
  return <div className={containerClass}>{children}</div>
}

export default Container
