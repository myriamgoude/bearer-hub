import * as React from 'react'
import { css } from '@emotion/core'
import { connectHighlight } from 'react-instantsearch-dom'
import { Text } from '../../index'

export const CustomHighlight = connectHighlight(({ highlight, attribute, hit }: any) => {
  const parsedHit = highlight({
    attribute,
    hit,
    highlightProperty: '_highlightResult'
  })

  return (
    <Text
      tag="h5"
      style={css`
        font-weight: bold;
        margin-bottom: 8px;
      `}
    >
      {parsedHit.map((part: { value: string; isHighlighted: boolean }, index: number) => {
        return part.isHighlighted ? <mark key={index}>{part.value}</mark> : <span key={index}>{part.value}</span>
      })}
    </Text>
  )
})
