import * as React from 'react'
import styles from './VideoContent.style'

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
    preload: 'auto',
    isLanding: true
  }

  return <video {...videoOptions} css={[styles.root]} />
}
export default VideoContent
