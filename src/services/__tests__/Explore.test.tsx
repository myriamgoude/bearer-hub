import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'

import { templatePath, categoryPath, slug, humanizeAuthType } from '../Explore'
import Link from '../../components/Link/Link'

const myItem = { hubID: '123', title: 'My Item Title' }

describe('templatePath', () => {
  const myIntegration = { hubID: '456', title: 'My Integration Title', provider: myItem }
  const myPath = templatePath(myIntegration)

  it('returns the path to an integration presentation page', () => {
    expect(myPath).toMatch('/integrations/456/my-integration-title')
  })

  it('is considered an internal link', () => {
    // Note: Link will appear as mockConstructor in snapshot
    // since its mocked in /__mocks__/gatsby due to its dependacy on gatsby internals
    const renderer = ShallowRenderer.createRenderer()

    renderer.render(<Link to={myPath}>{myItem.title}</Link>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})

describe('categoryPath', () => {
  const myPath = categoryPath(myItem)

  it('returns the path to a category integrations page', () => {
    expect(myPath).toMatch('/integrations/category/123/my-item-title')
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
  it('returns a generated slug', () => {
    const mySlug = slug('My Dummy Title')
    expect(mySlug).toMatch('my-dummy-title')
  })
})

describe('humanizeAuthType', () => {
  it('humanizes the "API key" Auth type as expected', () => {
    const authType = humanizeAuthType('APIKey')
    expect(authType).toMatch('API Key')
  })

  it('returns other Auth types as expected', () => {
    const authType = humanizeAuthType('OAuth2')
    expect(authType).toMatch('OAuth2')
  })
})
