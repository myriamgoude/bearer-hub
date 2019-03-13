import React from 'react'
import { VideoContent, Container } from '../index'
import styles from './VideoSection.style'

interface IVideoSectionProps {
  thumbnail: string
  src: string
}
const VideoSection = (props: IVideoSectionProps) => {
  return (
    <>
      <div css={styles.root}>
        <Container>
          <div css={styles.video}>
            <VideoContent thumbnail={props.thumbnail} src={props.src} />
          </div>
        </Container>
      </div>
    </>
  )
}

export default VideoSection
