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
                <SearchList categories={data.graphcms.categories} />
              </div>

              <Search />
            </Section>
          </div>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExplorePage
