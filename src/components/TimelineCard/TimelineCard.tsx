import React from 'react'
import { css } from '@emotion/core'

import styles from './TimelineCard.style'
import { CodeSnippet } from '../index'
import { colors } from '../../styles/variables'

interface ITimelineCardProps {
  children?: any
  image?: any
  language?: string
  snippet?: any
}

const TimelineCard = (props: ITimelineCardProps) => {
  return (
    <div css={styles.root}>
      {props.image && (
        <div
          css={css`
            padding: 16px 0 40px;
          `}
        >
          {props.image}
        </div>
      )}
      {props.snippet && (
        <div css={styles.table}>
          <div
            css={css`
              height: 40px;
              line-height: 40px;
              width: 60px;
              float: left;
              text-align: center;
              font-size: 12px;
              color: #596ab0;
              border-right: 1px solid #e1e5f1;
            `}
          >
            {props.language}
          </div>
          <div
            css={css`
              height: 40px;
              line-height: 40px;
              width: 40px;
              float: left;
              text-align: center;
              font-size: 12px;
              color: #596ab0;
              border-right: 1px solid #e1e5f1;
            `}
          >
            1
          </div>
          <CodeSnippet
            prism={false}
            className={css`
              width: calc(100% - 100px);
              height: 40px;
              float: left;
              line-height: 40px;
              font-size: 12px;
              background: white;
              padding-left: 16px;
              color: ${colors.black};
              overflow-x: scroll;
              user-select: none;
              pointer-events: all;
            `}
          >
            {props.snippet}
          </CodeSnippet>
        </div>
      )}
      {props.children && props.children}
    </div>
  )
}

export default TimelineCard
