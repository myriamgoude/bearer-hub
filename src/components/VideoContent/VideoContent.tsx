import * as React from 'react'
import styles from './VideoContent.style'

interface IVideoContentProps {
  thumbnail: string
  src: string
  type?: string
}

const VideoContent: React.FunctionComponent<IVideoContentProps> = ({ thumbnail, src, type = 'video/mp4' }) => (
  <video
    autoPlay={true}
    controls={false}
    loop={true}
    muted={true}
    playsInline={true}
    poster={thumbnail}
    preload={'auto'}
    css={[styles.root]}
  >
    <source src={src} type={type} />
  </video>
)
export default VideoContent
