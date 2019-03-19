import * as React from 'react'
import { css } from '@emotion/core'

import { connectHits } from 'react-instantsearch-dom'
import { Card, Grid, Clearfix } from '../../index'
import { CustomHighlight } from './CustomHighlight'
import blockStyles from '../../../components/IntergrationPanel/IntegrationPanel.style'
import { path } from '../../../services/Explore'

const cardStyle = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const CustomHits = connectHits(
  ({ hits }: { hits: { objectID: string; title: any; id: string; providers: any; category: any }[] }) => {
    return (
      <Grid
        col={3}
        gutter={16}
        style={css`
          justify-content: ${hits.length <= 2 ? 'flex-start !important' : null};
        `}
        childrenStyle={css`
          margin-bottom: 8px;
          margin-right: ${(hits.length = 2 ? 16 : 0)}px;
        `}
      >
        {hits.map(hit => {
          return (
            <Card
              key={hit.objectID}
              link={`${path({ id: hit.id, title: hit.title })}`}
              small
              className={[blockStyles.item, blockStyles.card, cardStyle]}
            >
              <div css={blockStyles.cardImageContainer}>
                <img src={hit.providers[0].image ? hit.providers[0].image.url : null} css={blockStyles.cardImage} />
              </div>
              <div>
                <CustomHighlight attribute="providers[0].title" hit={hit} />
                <Clearfix />
                <CustomHighlight attribute="title" hit={hit} />
              </div>
            </Card>
          )
        })}
      </Grid>
    )
  }
)
