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
        <object>
          <img src={props.photo} />
        </object>
        <h3>{props.name}</h3>
      </div>
      <Text text={props.role} />
    </div>
  )
}

export default TeamBlock
