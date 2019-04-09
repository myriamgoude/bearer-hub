import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import IndexLayout from '../../layouts'
import { Clearfix, HeroLined, Page, PageMetadata, Section, Search, Text } from '../../components/index'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
import { InstantSearch } from 'react-instantsearch-dom'

import { SearchList } from '../../components/Search/components/SearchList'
import { CustomSearchBox } from '../../components/Search/components/CustomSearchBox'

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
          <div css={heroStyles.styleBackgroundBefore}>
            <CustomSearchBox />
            <Section
              styleContainer={css`
                display: flex;
                padding-top: 2rem;
              `}
            >
              <div
                css={css`
                  padding-right: 58px;
                `}
              >
                <SearchList selected={category.id} categories={data.graphcms.categories} />
              </div>

              <Search defaultCategory={category.title} />
            </Section>
          </div>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExploreCategoryTemplate
