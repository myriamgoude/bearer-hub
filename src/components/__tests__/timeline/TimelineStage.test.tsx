import React from 'react'
import renderer from 'react-test-renderer'

import TimelineStage from '../../timeline/TimelineStage'

describe('TimelineStage', () => {
  it('handles when UI element and backend function are both present', () => {
    const stage = {
      timeToComplete: 1,
      backendElementType: 'InstallBearerLibrary',
      backendElementName: 'connect-hello-world',
      uiElement: {
        title: 'Connect Hello World Component',
        codeSnippet: '<connect-hello-world />',
        image: {
          handle: 'my-test-image',
          height: 50,
          width: 50
        }
      }
    }
    const tree = renderer.create(<TimelineStage stage={stage} index={2} />)
    expect(tree).toMatchSnapshot()
  })

  it('handles when backend function is not present, and has auto margin-left when index is even', () => {
    const stage = {
      timeToComplete: 2,
      uiElement: {
        title: 'Connect Hello World Component',
        codeSnippet: '<connect-hello-world />',
        image: {
          handle: 'my-test-image',
          height: 50,
          width: 50
        }
      }
    }
    const tree = renderer.create(<TimelineStage stage={stage} index={0} />)
    expect(tree).toMatchSnapshot()
  })

  it('handles when UI element is not present, and has no auto margin when index is odd', () => {
    const stage = {
      timeToComplete: 2,
      backendElementType: 'InstallBearerLibrary',
      backendElementName: 'connect-hello-world'
    }
    const tree = renderer.create(<TimelineStage stage={stage} index={1} />)
    expect(tree).toMatchSnapshot()
  })
})
