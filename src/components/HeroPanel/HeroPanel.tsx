import * as React from 'react'

import { Container } from '../index'
import styles from './HeroPanel.style'

interface IHeroPanel {
  title?: string | any
  subtitle?: string | any
  punchline?: string
  image?: string
  imageCss?: any
  highlight?: string
  css?: any
  children?: object
  paddingBottom?: boolean
  style?: any
}

const HeroPanel: React.SFC<IHeroPanel> = ({ css, children, paddingBottom, style }) => {
  return (
    <Container
      flex
      flexDirection="row"
      style={[styles.root, css && css, style && style]}
      padding="large"
      paddingBottom={paddingBottom}
    >
      {children}
    </Container>
  )
}

export default HeroPanel
