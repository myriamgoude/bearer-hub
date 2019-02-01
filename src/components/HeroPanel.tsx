import * as React from 'react'
import Container from '../components/Container'

interface IHeroPanel {
  title: string,
  image?: string,
}

const HeroPanel: React.SFC<IHeroPanel> = ({ title, image, children }) => (
  <Container>
    <div>
      <h1>{title}</h1>
      {children}
    </div>
    <img src={image} />
  </Container>
)

export default HeroPanel
