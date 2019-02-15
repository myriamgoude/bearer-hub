import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'

import { path, slug } from '../Integration'
import Link from '../../components/Link'

const myIntegration = { id: '123', title: 'My Title' }

describe('path', () => {
  const myPath = path(myIntegration)

  it('returns the path to an integration presentation page', () => {
    expect(myPath).toMatch('/explore/123-my-title')
  })

  it('is considered an internal link', () => {
    // Note: Link will appear as mockConstructor in snapshot
    // since its mocked in /__mocks__/gatsby due to its dependacy on gatsby internals
    const renderer = ShallowRenderer.createRenderer()

    renderer.render(<Link to={myPath}>{myIntegration.title}</Link>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})

describe('slug', () => {
  it('returns a generated slug', () => {
    const mySlug = slug(myIntegration)
    expect(mySlug).toMatch('123-my-title')
  })
})
