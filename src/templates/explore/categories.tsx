import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import IndexLayout from '../../layouts'
import {
  Clearfix,
  Grid,
  Button,
  SectionHeading,
  HeroLined,
  Page,
  PageMetadata,
  Section,
  Search,
  Text
} from '../../components/index'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { InstantSearch } from 'react-instantsearch-dom'

import { SearchList } from '../../components/Search/components/SearchList'

import { colors } from '../../styles/variables'

interface IQueryData {
  graphcms: {
    defaultCategory: {
      id: string
      hubID: string
      title: string
    }[]
    categories: {
      id: string
      hubID: string
      title: string
    }[]
    providers: {
      id: string
      hubID: string
      title: string
    }[]
  }
}

export const query = graphql`
  query ExploreCategoryQuery($id: ID!) {
    graphcms {
      defaultCategory: categories(where: { id: $id }, first: 1) {
        id
        hubID
        title
      }
      ...scopedCategories
      ...scopedProviders
    }
  }
`

const ExploreCategoryTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const category = data.graphcms.defaultCategory[0]

  return (
    <IndexLayout location={location}>
      <PageMetadata title={category.title} description={`Explore ${category.title} Integrations`} />
      <Page>
        <InstantSearch
          appId={`${process.env.GATSBY_ALGOLIA_APP_ID}`}
          apiKey={`${process.env.GATSBY_ALGOLIA_SEARCH_API_KEY}`}
          indexName={`${process.env.GATSBY_ALGOLIA_INDEX_NAME}`}
        >
          <div css={heroStyles.styleBackgroundExplore}>
            <HeroLined>
              <Text tag="h1" text={`Explore ${category.title} integrations`} />
              <Clearfix />
              <Text tag="h3" text="Over 30 Native Integrations for your App" />
            </HeroLined>
          </div>
          <Section
            styleContainer={css`
              display: flex;
            `}
          >
            <div
              css={css`
                flex: 0 1 30%;
                padding-right: 58px;
              `}
            >
              <SearchList
                selected={category.id}
                categories={data.graphcms.categories}
                providers={data.graphcms.providers}
              />
            </div>
            <div
              css={css`
                flex: 0 1 70%;
              `}
            >
              <Search defaultCategory={category.title} />

              <Grid
                style={css`
                  align-items: center;
                  padding: 80px 0;
                `}
                childrenStyle={css`
                  flex: 0 1 auto !important;
                `}
              >
                <SectionHeading
                  primaryText="Some ideas to share?"
                  css={css`
                    margin-bottom: 0;
                  `}
                />
                <span
                  css={css`
                    display: block;
                    height: 2px;
                    width: 232px;
                    background: ${colors.yellow};
                  `}
                />
                <Button primary link="#" text="Share ideas" />
              </Grid>
            </div>
          </Section>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExploreCategoryTemplate
