import React from 'react'
import * as ShallowRenderer from 'react-test-renderer/shallow'

import UIElement from '../../timeline/UIElement'

describe('UIElement', () => {
  const element = {
    title: 'Connect Hello World component',
    codeSnippet: '<hello-world-connect />',
    tooltip: 'This is a tooltip',
    helperText: 'This is some helper text',
    image: {
      handle: 'my-test-image',
      height: 50,
      width: 50
    }
  }

  it('has no auto margin when rightAligned is false', () => {
    const rightAligned = false

    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<UIElement element={element} rightAligned={rightAligned} time={5} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

  it('has auto margin-left when rightAligned is true', () => {
    const rightAligned = false

    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<UIElement element={element} rightAligned={rightAligned} time={5} />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})
