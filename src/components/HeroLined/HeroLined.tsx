import * as React from 'react'
import styles from './HeroLined.style'
import HeroPanel from '../HeroPanel'

interface IHeroLinedPros {
  children: any
}
const HeroLined = (props: IHeroLinedPros) => {
  return (
    <HeroPanel longHero style={styles.root}>
      <div css={styles.item}>{props.children}</div>
    </HeroPanel>
  )
}

export default HeroLined
