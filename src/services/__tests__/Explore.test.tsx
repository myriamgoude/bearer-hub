import React from 'react'
import MockDate from 'mockdate'
import * as ShallowRenderer from 'react-test-renderer/shallow'

import { templatePath, categoryPath, slug, timer } from '../Explore'
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

describe('timer', () => {
  afterEach(() => {
    MockDate.reset()
  })

  it('returns the expected time in 24:00 format', () => {
    MockDate.set(new Date('2019-01-01T12:01:11'))
    const myTime = timer(2)
    // 12:01 + 2 minutes = 12:03
    expect(myTime).toMatch('12:03')
  })

  it('returns the expected time across hours', () => {
    MockDate.set(new Date('2019-01-01T08:59:11'))
    const myTime = timer(2)
    // 8:59 + 2 minutes = 9:01
    expect(myTime).toMatch('9:01')
  })
})
