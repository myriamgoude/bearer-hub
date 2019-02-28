import * as React from 'react'

interface IVideoContentProps {
  thumbnail: string
  src: string
  type?: string
}

const VideoContent: React.SFC<IVideoContentProps> = ({ thumbnail, src, type = 'video/mp4' }) => {
  const videoOptions = {
    src,
    type,
    autoPlay: true,
    controls: false,
    loop: true,
    muted: true,
    playsInline: true,
    poster: thumbnail,
    preload: 'auto'
  }
  return <video {...videoOptions} />
}
export default VideoContent
