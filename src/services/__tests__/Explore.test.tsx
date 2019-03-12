import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'

import { path, slug } from '../Explore'
import Link from '../../components/Link/Link'

const myItem = { id: '123', title: 'My Title' }

describe('path', () => {
  const myPath = path(myItem)

  it('returns the path to an integration presentation page', () => {
    expect(myPath).toMatch('/explore/123-my-title')
  })

  it('is considered an internal link', () => {
    // Note: Link will appear as mockConstructor in snapshot
    // since its mocked in /__mocks__/gatsby due to its dependacy on gatsby internals
    const renderer = ShallowRenderer.createRenderer()

    renderer.render(<Link to={myPath}>{myItem.title}</Link>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})

describe('slug', () => {
  it('returns a generated slug with ID and title', () => {
    const mySlug = slug(myItem)
    expect(mySlug).toMatch('123-my-title')
  })

  it('returns a generated slug with title only', () => {
    const mySlug = slug({ title: 'my lonely title' })
    expect(mySlug).toMatch('my-lonely-title')
  })
})
