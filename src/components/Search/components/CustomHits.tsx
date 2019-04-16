import * as React from 'react'
import { css } from '@emotion/core'

import { connectHits } from 'react-instantsearch-dom'
import { Card, Grid, Tag } from '../../index'
import { CustomHighlight } from './CustomHighlight'
import blockStyles from '../../../components/IntergrationPanel/IntegrationPanel.style'
import { humanizeAuthType, templatePath } from '../../../services/Explore'
import { breakpoints } from '../../../styles/variables'

interface ICustomHitsProps {
  objectID: string
  apiAuthType: string
  apiArchType: string
  title: any
  id: string
  hubID: string
  provider: any
}

export const CustomHits = connectHits(({ hits }: { hits: ICustomHitsProps[] }) => {
  return (
    <Grid
      col={3}
      gutter={16}
      style={css`
        justify-content: ${hits.length <= 2 ? 'flex-start !important' : null};
        @media (max-width: ${breakpoints.lg}px) {
          display: block;
          width: ${hits.length * 152 + (hits.length === 2 ? 16 : 0)}px;
          overflow: scroll;
        }
      `}
      childrenStyle={css`
        -webkit-transition: box-shadow 0.2s; /* Safari */
        transition: box-shadow 0.2s;
        margin-bottom: 16px;
        margin-right: ${(hits.length = 2 ? 16 : 0)}px;
        @media (max-width: ${breakpoints.lg}px) {
          min-width: 152px;
          max-width: 152px;
          display: inline-block;
        }
        &:hover {
          box-shadow: 0 3px 4px 0 rgba(30, 9, 54, 0.1);
        }
      `}
    >
      {hits.map(hit => {
        const tags = [humanizeAuthType(hit.apiAuthType), hit.apiArchType]

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
            </div>
            <div css={blockStyles.cardTags}>
              {tags && tags.map((tag: string, index: number) => <Tag key={index} text={tag} color="#1339D7" />)}
            </div>
          </Card>
        )
      })}
    </Grid>
  )
})
