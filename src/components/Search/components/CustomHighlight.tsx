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

  console.log(`%c parsedHit  {${parsedHit}}, ${parsedHit.length}`, 'color: blue', parsedHit)
  console.log(`%c Type  {${typeof parsedHit}}, ${parsedHit.length}`, 'color: green')

  return (
    <Text
      tag={attribute === 'providers.title' ? 'h5' : 'p'}
      small={attribute === 'title' && true}
      style={css`
        font-weight: bold;
        margin-bottom: 8px;
      `}
      text={parsedHit[0].isHighlighted ? <mark> test {parsedHit[0].value}</mark> : <span>{parsedHit[0].value}</span>}
    >
      {/* {parsedHit.map(({ part, index }: any) => {
        console.log(part)
        return part.isHighlighted ? <mark key={index}>{part.value}</mark> : <span key={index}>{part.value}</span>
      })} */}

      {/* REWORK */}
    </Text>
  )
})
