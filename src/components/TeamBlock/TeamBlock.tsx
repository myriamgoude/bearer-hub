import * as React from 'react'
import styles from './TeamBlock.style'

import Text from '../Text'

interface ITeamBlocks {
  children?: any
  name?: string
  role?: string
  onClick?: any
  photo?: string
}

const TeamBlock = (props: ITeamBlocks) => {
  return (
    <div css={styles.root}>
      <div css={styles.container}>
        <div css={styles.imageContainer}>{props.photo && <img src={props.photo} css={styles.image} />}</div>
        {props.name && <h4 css={styles.title}>{props.name}</h4>}
        {props.role && <Text text={`${props.role}`} />}
      </div>
    </div>
  )
}

export default TeamBlock
