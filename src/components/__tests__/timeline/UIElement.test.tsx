import React from 'react'
import renderer from 'react-test-renderer'

import UIElement from '../../timeline/UIElement'

describe('UIElement', () => {
  const element = {
    title: 'Connect Hello World component',
    codeSnippet: '<hello-world-connect />'
  }

  it('has no auto margin when rightAligned is false', () => {
    const rightAligned = false
    const tree = renderer.create(<UIElement element={element} rightAligned={rightAligned} />)
    expect(tree).toMatchSnapshot()
  })

  it('has auto margin-left when rightAligned is true', () => {
    const rightAligned = true
    const tree = renderer.create(<UIElement element={element} rightAligned={rightAligned} />)
    expect(tree).toMatchSnapshot()
  })
})
