import * as React from 'react'
import renderer from 'react-test-renderer'
import VideoContent from '../VideoContent/VideoContent'

describe('VideoContent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<VideoContent src="/my-video.mp4" thumbnail="/mv-video-perview.jpg" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
