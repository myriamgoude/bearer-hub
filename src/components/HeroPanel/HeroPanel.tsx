import * as React from 'react'

import { Container, Text, LightCta } from '../index'
import styles from './HeroPanel.style'
import helpers from '../../styles/helpers'

interface IHeroPanel {
  title?: string | any
  subtitle?: string | any
  punchline?: string
  image?: string
  imageCss?: any
  highlight?: string
  css?: any
  children?: object
  longHero?: boolean
  paddingBottom?: boolean
  style?: any
}

const HeroPanel: React.SFC<IHeroPanel> = ({
  title,
  subtitle,
  punchline,
  longHero,
  image,
  imageCss,
  css,
  children,
  paddingBottom,
  style
}) => {
  return (
    <Container
      flex
      flexDirection="row"
      style={[styles.root, longHero && styles.heightXl, css && css, style && style]}
      padding="large"
      paddingBottom={paddingBottom}
    >
      <div css={image ? styles.halfItem : styles.fullItem}>
        {punchline && <LightCta text={punchline} />}
        {typeof title === 'string' ? <h1 css={helpers.h1}>{title}</h1> : title}
        {subtitle && <Text text={subtitle} tag="h3" style={styles.subtitle} />}
        {children}
      </div>
      {image && (
        <div css={styles.halfItem}>
          <img src={image} css={[styles.illustration, imageCss && imageCss]} alt="Hero illustration" />
        </div>
      )}
    </Container>
  )
}

export default HeroPanel
