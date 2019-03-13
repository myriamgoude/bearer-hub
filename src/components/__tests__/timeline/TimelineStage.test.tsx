import React from 'react'
import renderer from 'react-test-renderer'

import TimelineStage from '../../timeline/TimelineStage'

jest.mock('../../../services/Explore', () => ({
  timer: jest.fn().mockReturnValue('11.01')
}))

describe('TimelineStage', () => {
  it('handles when UI element and backend function are both present', () => {
    const stage = {
      timeToComplete: 1,
      backendElementType: 'InstallBearerLibrary',
      backendElementName: 'connect-hello-world',

      uiElement: {
        title: 'Connect Hello World Component',
        codeSnippet: '<connect-hello-world />',
        stage: 1,
        index: 0,
        tooltip: 'This is a tooltip',
        helperText: 'This is some helper text',
        image: {
          handle: 'my-test-image',
          height: 50,
          width: 50
        }
      }
    }
    const tree = renderer.create(<TimelineStage stage={stage} index={2} timeElasped={3} />)
    expect(tree).toMatchSnapshot()
  })

  it('handles when backend function is not present, and has auto margin-left when index is even', () => {
    const stage = {
      timeToComplete: 2,

      uiElement: {
        title: 'Connect Hello World Component',
        codeSnippet: '<connect-hello-world />',
        tooltip: '',
        helperText: 'This is some helper text',
        stage: 2,
        index: 1,
        image: {
          handle: 'my-test-image',
          height: 50,
          width: 50
        }
      }
    }
    const tree = renderer.create(<TimelineStage stage={stage} index={0} timeElasped={2} />)
    expect(tree).toMatchSnapshot()
  })

  it('handles when UI element is not present, and has no auto margin when index is odd', () => {
    const stage = {
      timeToComplete: 2,
      backendElementType: 'InstallBearerLibrary',
      backendElementName: 'connect-hello-world'
    }
    const tree = renderer.create(<TimelineStage stage={stage} index={1} timeElasped={1} />)
    expect(tree).toMatchSnapshot()
  })
})
