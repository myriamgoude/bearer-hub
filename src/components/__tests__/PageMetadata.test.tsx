import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'
import PageMetadata from '../PageMetadata'

describe('PageMetadata', () => {
  const title = 'My Page'
  const desc = 'My description'
  const img = 'https://static.bearer.sh/logo.png'
  it('renders when given only a title', () => {
    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<PageMetadata title={title} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('renders title, description', () => {
    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<PageMetadata title={title} description={desc} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('renders title, description, image', () => {
    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<PageMetadata title={title} description={desc} image={img} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})
