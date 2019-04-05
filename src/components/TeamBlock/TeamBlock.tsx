import * as React from 'react'
import styles from './TeamBlock.style'

import Text from '../Text'

interface ITeamBlocks {
  children?: any
  name: string
  role: any
  onClick?: any
  photo?: string
}

const TeamBlock = (props: ITeamBlocks) => {
  return (
    <div css={styles.root}>
      <div css={styles.container}>
        <div css={styles.imageContainer}>
          <img src={props.photo} css={styles.image} />
        </div>
        <h4 css={styles.title}>{props.name}</h4>
        <Text text={`${props.role}`} />
      </div>
    </div>
  )
}

export default TeamBlock
