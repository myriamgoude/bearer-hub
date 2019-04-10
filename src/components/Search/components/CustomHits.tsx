import * as React from 'react'
import { css } from '@emotion/core'

import { connectHits } from 'react-instantsearch-dom'
import { Card, Clearfix, Grid, Tag } from '../../index'
import { CustomHighlight } from './CustomHighlight'
import blockStyles from '../../../components/IntergrationPanel/IntegrationPanel.style'
import { templatePath } from '../../../services/Explore'

interface ICustomHitsProps {
  objectID: string
  apiAuthType: string
  apiArchType: string
  title: any
  id: string
  hubID: string
  provider: any
  categories: { hubId: number; title: string }[]
}

export const CustomHits = connectHits(({ hits }: { hits: ICustomHitsProps[] }) => {
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
        const tags = [hit.apiAuthType, hit.apiArchType]
        if (hit.categories.length) {
          tags.push(hit.categories[0].title)
        }

        return (
          <Card
            itemScope
            itemType="http://schema.org/Product"
            key={hit.objectID}
            link={`${templatePath({ hubID: hit.hubID, title: hit.title, provider: hit.provider })}`}
            trackLink
            trackingAction="explore-template"
            trackingOptions={{
              category: 'Integration',
              label: hit.hubID
            }}
            small
            className={blockStyles.item}
          >
            <div>
              <img
                itemProp="logo"
                src={hit.provider.image ? hit.provider.image.url : null}
                css={blockStyles.cardImage}
              />
            </div>
            <div itemProp="brand">
              <CustomHighlight attribute="title" hit={hit} />
              <Clearfix />
              <div css={blockStyles.cardTags}>
                {tags && tags.map((tag: string, index: number) => <Tag key={index} text={tag} color="#1339D7" />)}
              </div>
            </div>
          </Card>
        )
      })}
    </Grid>
  )
})
