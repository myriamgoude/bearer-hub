import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'
import { PageMetadataTags } from '../PageMetadata/PageMetadata'

describe('PageMetadata', () => {
  const title = 'My Page'
  const desc = 'My description'
  const img = 'logo.png'
  const siteUrl = 'http://www.bearer.sh/'
  it('renders when given only a title', () => {
    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<PageMetadataTags siteUrl={siteUrl} title={title} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('renders title, description', () => {
    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<PageMetadataTags siteUrl={siteUrl} title={title} description={desc} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('renders title, description, image', () => {
    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<PageMetadataTags siteUrl={siteUrl} title={title} description={desc} image={img} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})
