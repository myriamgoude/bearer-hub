import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import IndexLayout from '../../layouts'
import { Clearfix, HeroLined, Page, PageMetadata, Section, Search, Text } from '../../components/index'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { InstantSearch } from 'react-instantsearch-dom'

import { SearchList } from '../../components/Search/components/SearchList'
import { CustomSearchBox } from '../../components/Search/components/CustomSearchBox'
import { breakpoints } from '../../styles/variables'

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
    }
  }
`

const ExploreCategoryTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const category = data.graphcms.defaultCategory[0]

  return (
    <IndexLayout location={location}>
      <PageMetadata title={category.title} description={`Explore ${category.title} Integration Templates`} />
      <Page css={heroStyles.styleBackgroundExplore}>
        <InstantSearch
          appId={`${process.env.GATSBY_ALGOLIA_APP_ID}`}
          apiKey={`${process.env.GATSBY_ALGOLIA_SEARCH_API_KEY}`}
          indexName={`${process.env.GATSBY_ALGOLIA_INDEX_NAME}`}
        >
          <div css={heroStyles.styleBackgroundExploreAfter}>
            <HeroLined>
              <Text tag="h1" text={`Explore ${category.title} Templates`} />
              <Clearfix />
              <Text tag="h3" text="Start building your Integrations even faster!" />
            </HeroLined>
          </div>
          <CustomSearchBox />
          <Section
            styleContainer={css`
              display: flex;
              flex-wrap: wrap;

              @media (max-width: ${breakpoints.lg}px) {
                display: block;
              }
            `}
          >
            <div
              css={css`
                flex: 0 1 30%;
                padding-right: 58px;

                @media (max-width: ${breakpoints.lg}px) {
                  flex: 0 1 100%;
                  margin-top: 1em;
                }
              `}
            >
              <SearchList selected={category.id} categories={data.graphcms.categories} />
            </div>
            <div
              css={css`
                flex: 0 1 70%;
              `}
            >
              <Search defaultCategory={category.title} />
            </div>
          </Section>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExploreCategoryTemplate
