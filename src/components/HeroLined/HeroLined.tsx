import * as React from 'react'
import styles from './HeroLined.style'
import HeroPanel from '../HeroPanel'

interface IHeroLinedPros {
  children: any
  style?: any
  itemStyle?: any
}
const HeroLined = (props: IHeroLinedPros) => {
  return (
    <HeroPanel longHero style={[styles.root, props.style]}>
      <div css={[styles.item, props.itemStyle]}>{props.children}</div>
    </HeroPanel>
  )
}

export default HeroLined
