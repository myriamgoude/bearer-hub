import React from 'react'
import { VideoContent, Container } from '../index'
import styles from './VideoSection.style'

interface IVideoSectionProps {
  thumbnail: string
  src: string
  button?: any
}
const VideoSection = (props: IVideoSectionProps) => {
  return (
    <>
      <div css={styles.root}>
        <Container>
          <div css={styles.video}>
            <VideoContent thumbnail={props.thumbnail} src={props.src} />
          </div>
          {props.button && <div css={styles.button}>{props.button}</div>}
        </Container>
      </div>
    </>
  )
}

export default VideoSection
