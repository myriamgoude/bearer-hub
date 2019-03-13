import * as React from 'react'
import styles from './Container.style'

interface IContainerProps {
  style?: any
  flex?: boolean
  flexDirection?: string
  padding?: string
  paddingBottom?: boolean
  children: any
}
const Container = (props: IContainerProps) => {
  return (
    <div
      css={[
        styles.root,
        props.flex && styles.displayFlex,
        !props.flex && styles.displayBlock,
        props.flexDirection === 'row' && styles.directionRow,
        props.flexDirection === 'column' && styles.directionColumn,
        props.padding === 'large' && styles.paddingLarge,
        props.padding !== 'large' && styles.paddingRegular,
        !props.paddingBottom && styles.noPaddingBottom,
        props.style && props.style
      ]}
    >
      {props.children}
    </div>
  )
}

export default Container
