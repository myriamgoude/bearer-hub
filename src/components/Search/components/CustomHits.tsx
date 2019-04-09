import * as React from 'react'
import { css } from '@emotion/core'

import { connectHits } from 'react-instantsearch-dom'
import { Card, Grid, Clearfix } from '../../index'
import { CustomHighlight } from './CustomHighlight'
import blockStyles from '../../../components/IntergrationPanel/IntegrationPanel.style'
import { templatePath } from '../../../services/Explore'

const cardStyle = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const CustomHits = connectHits(
  ({ hits }: { hits: { objectID: string; title: any; id: string; hubID: string; provider: any; category: any }[] }) => {
    return (
      <Grid
        col={3}
        gutter={16}
        style={css`
          width: 100%;
          margin: 0;
          align-content: flex-start;
          justify-content: flex-start;
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
              link={`${templatePath({ hubID: hit.hubID, title: hit.title, provider: hit.provider })}`}
              trackLink
              trackingAction="explore-integration"
              trackingOptions={{
                category: 'Integration',
                label: hit.hubID
              }}
              small
              className={[blockStyles.item, blockStyles.card, cardStyle]}
            >
              <div css={blockStyles.cardImageContainer}>
                <img src={hit.provider.image ? hit.provider.image.url : null} css={blockStyles.cardImage} />
              </div>
              <div>
                <CustomHighlight attribute="provider.title" hit={hit} />
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
