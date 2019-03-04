import * as React from 'react'
import styles from './Container.style'

interface ContainerProps {
  css?: any
  flex?: boolean
  flexDirection?: string
  padding?: string
}

const Container: React.SFC<ContainerProps> = ({ children, css, flex, flexDirection, padding }) => {
  return (
    <div
      css={[
        styles.root,
        flex && styles.displayFlex,
        !flex && styles.displayBlock,
        flexDirection === 'row' && styles.directionRow,
        flexDirection === 'column' && styles.directionColumn,
        padding === 'large' && styles.paddingLarge,
        padding !== 'large' && styles.paddingRegular,
        css && css
      ]}
    >
      {children}
    </div>
  )
}

export default Container
