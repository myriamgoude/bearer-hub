import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'
import Link from '../Link/Link'

describe('Link', () => {
  const text = 'my link'
  const renderer = ShallowRenderer.createRenderer()
  it('renders internal links', () => {
    // Note: Link will appear as mockConstructor in snapshot
    // since its mocked in /__mocks__/gatsby due to its dependacy on gatsby internals
    const to = '/foo'
    renderer.render(<Link to={to}>{text}</Link>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('passes props to subcomponents', () => {
    const handler = () => {}
    const to = '/bar'
    renderer.render(
      <Link to={to} onClick={handler}>
        {text}
      </Link>
    )
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('renders external links as expected (e.g. target blank)', () => {
    const to = 'http://example.com'
    renderer.render(<Link to={to}>{text}</Link>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})
