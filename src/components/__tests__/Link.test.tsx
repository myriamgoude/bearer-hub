import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'
import Link from '../Link/Link'

describe('Header', () => {
  const text = 'my link'
  const renderer = ShallowRenderer.createRenderer()
  it('renders internal links', () => {
    // Note: Link will appear as mockConstructor in snapshot
    // since its mocked in /__mocks__/gatsby due to its dependacy on gatsby internals
    const to = '/foo'
    renderer.render(<Link to={to}>{text}</Link>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('renders external links', () => {
    const to = 'http://example.com'
    renderer.render(<Link to={to}>{text}</Link>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('renders tricky non gatsby links', () => {
    const to = '#'
    renderer.render(<Link to={to}>{text}</Link>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it('passes props to subcomponents', () => {
    const handler = () => {}
    const to = '#'
    renderer.render(
      <Link to={to} onClick={handler}>
        {text}
      </Link>
    )
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})
