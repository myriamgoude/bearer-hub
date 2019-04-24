import * as React from 'react'
import styles from './VideoContent.style'

interface IVideoContentProps {
  thumbnail: string
  src: string
  type?: string
  size?: { width: number; height: number }
}

const VideoContent: React.SFC<IVideoContentProps> = ({
  thumbnail,
  src,
  type = 'video/mp4',
  size = { width: 560, height: 315 }
}) => {
  return (
    <video
      autoPlay={true}
      controls={false}
      loop={true}
      muted={true}
      playsInline={true}
      poster={thumbnail}
      preload={'auto'}
      css={[styles.root]}
      width={`${size.width}px`}
      height={`${size.height}px`}
    >
      <source src={src} type={type} />
    </video>
  )
}
export default VideoContent
