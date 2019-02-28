import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'
import { DefaultMeta } from '../SiteMetadata/SiteMetadata'

describe('SiteMetadata', () => {
  const props = {
    title: 'Bearer',
    canonical: 'https://example.com/my-page',
    twitter: '@bearersh',
    image: 'https://example.com/my-image.jpg',
    description: 'This is an example description'
  }
  it('DefaultMeta renders expected metadata', () => {
    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<DefaultMeta {...props} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})
