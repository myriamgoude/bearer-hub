import * as React from 'react'
import Container from '../Container/Container'
import styles from './HeroPanel.style'

interface IHeroPanel {
  title: string | object
  subtitle?: string | object
  image?: string
  imageCss?: any
  highlight?: string
  css?: any
  children?: object
  longHero?: boolean
}

const HeroPanel: React.SFC<IHeroPanel> = ({ title, subtitle, highlight, longHero, image, imageCss, css, children }) => {
  const highlightString = (highlight: string) => {
    return (
      <h1>
        <span css={styles.highlight}>{highlight}</span>{' '}
        {typeof title === 'string' ? title.replace(highlight, '') : null}
      </h1>
    )
  }

  return (
    <Container flex flexDirection="row" css={[css && css, styles.root, longHero && styles.heightXl]} padding="large">
      <div css={styles.heroItem}>
        {highlight ? highlightString(highlight) : <h1>{title}</h1>}
        <p>{subtitle}</p>
        {children}
      </div>
      <div css={styles.heroItem}>
        <img src={image} css={[styles.illustration, imageCss && imageCss]} alt="Hero illustration" />
      </div>
    </Container>
  )
}

export default HeroPanel
