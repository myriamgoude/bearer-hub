import React from 'react'
import { VideoContent, Container } from '../index'
import styles from './VideoSection.style'

interface IVideoSectionProps {
  thumbnail: string
  src: string
  button?: any
  size?: { width: number; height: number }
}
const VideoSection = (props: IVideoSectionProps) => {
  return (
    <>
      <div css={styles.root}>
        <Container>
          <VideoContent thumbnail={props.thumbnail} src={props.src} size={props.size} />
          {props.button && <div css={styles.button}>{props.button}</div>}
        </Container>
      </div>
    </>
  )
}

export default VideoSection
