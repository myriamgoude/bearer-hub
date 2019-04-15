import * as React from 'react'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import Page from '../../components/Page/Page'
import { Section, HeroLined, Text, Clearfix, Search } from '../../components/index'
import IndexLayout from '../../layouts'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'

import { InstantSearch } from 'react-instantsearch-dom'

import { SearchList } from '../../components/Search/components/SearchList'
import { breakpoints } from '../../styles/variables'
import { CustomSearchBox } from '../../components/Search/components/CustomSearchBox'

interface IQueryData {
  graphcms: {
    categories: {
      id: string
      hubID: string
      title: string
    }[]
  }
}

export const scopedCategories = graphql`
  fragment scopedCategories on GraphCMS {
    categories(where: { status: PUBLISHED, templates_some: { status: PUBLISHED } }, orderBy: title_ASC) {
      id
      hubID
      title
    }
  }
`

export const query = graphql`
  query ExplorePageQuery {
    graphcms {
      ...scopedCategories
    }
  }
`

const ExplorePage: GatsbyPage<IQueryData> = ({ data, location }) => {
  return (
    <IndexLayout location={location}>
      <PageMetadata
        title="Explore API Integration Templates | Bearer"
        description="Explore Integration Templates on dozen of API Providers and
      start building your API Integration in mintues using Bearer Framework."
      />
      <Page css={heroStyles.styleBackgroundExplore}>
        <InstantSearch
          appId={`${process.env.GATSBY_ALGOLIA_APP_ID}`}
          apiKey={`${process.env.GATSBY_ALGOLIA_SEARCH_API_KEY}`}
          indexName={`${process.env.GATSBY_ALGOLIA_INDEX_NAME}`}
        >
          <div css={heroStyles.styleBackgroundExploreAfter}>
            <HeroLined>
              <Text tag="h1" text="Explore Templates" />
              <Clearfix />
              <Text tag="h3" text="Build your integrations even faster!" />
            </HeroLined>
          </div>
          <CustomSearchBox />

          <Section
            styleContainer={css`
              display: flex;
              /* margin-top: -200px; */

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
              <SearchList categories={data.graphcms.categories} />
            </div>

            <Search />
          </Section>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExplorePage
