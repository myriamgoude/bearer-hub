import * as React from 'react'
import { cx } from 'emotion'
import Container from '../Container/Container'
import styles from './HeroPanel.css'

interface IHeroPanel {
  title: string | object
  subtitle?: string | object
  image?: string
  highlight?: string
  className?: string
  children?: object
  longHero?: boolean
}

const HeroPanel: React.SFC<IHeroPanel> = ({ title, subtitle, highlight, longHero, image, className, children }) => {
  const highlightString = (highlight: string) => {
    return (
      <h1>
        <span className={styles.highlight}>{highlight}</span>{' '}
        {typeof title === 'string' ? title.replace(highlight, '') : null}
      </h1>
    )
  }

  return (
    <Container
      flex
      flexDirection="column"
      className={cx(className && className, longHero && styles.heightXl, styles.root)}
      padding="large"
    >
      <div className={cx(styles.heroItem)}>
        {highlight ? highlightString(highlight) : <h1>{title}</h1>}
        <p>{subtitle}</p>
        {children}
      </div>
      <div className={cx(styles.heroItem)}>
        <img src={image} className={cx(styles.illustration)} alt="Hero illustration" />
      </div>
    </Container>
  )
}

export default HeroPanel
