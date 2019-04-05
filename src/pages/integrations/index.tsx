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
    categories(where: { status: PUBLISHED, templates_some: { status: PUBLISHED } }) {
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
      <PageMetadata title="Explore" description="Explore Integrations" />
      <Page>
        <InstantSearch
          appId={`${process.env.GATSBY_ALGOLIA_APP_ID}`}
          apiKey={`${process.env.GATSBY_ALGOLIA_SEARCH_API_KEY}`}
          indexName={`${process.env.GATSBY_ALGOLIA_INDEX_NAME}`}
        >
          <div css={heroStyles.styleBackgroundExplore}>
            <HeroLined
              style={css`
                height: 780px;
              `}
            >
              <Text tag="h1" text="Explore Templates" />
              <Clearfix />
              <Text tag="h3" text="Start building your Integrations even faster!" />
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
              <SearchList categories={data.graphcms.categories} />
            </div>

            <div
              css={css`
                flex: 0 1 70%;
              `}
            >
              <Search />
            </div>
          </Section>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExplorePage
