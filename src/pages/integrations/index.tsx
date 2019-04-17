import * as React from 'react'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import { Configure, InstantSearch, Pagination } from 'react-instantsearch-dom'

import { breakpoints, colors } from '../../styles/variables'
import IndexLayout from '../../layouts'

import Page from '../../components/Page/Page'
import { Section, HeroLined, Text, Clearfix, Search } from '../../components/index'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'
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
        description="Explore integration templates on dozen of API providers and start 
        building your API integrations in minutes using the Bearer Framework."
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
              <Text tag="h3" text="Build your integrations even faster!" style={{ marginTop: '0.5rem' }} />
            </HeroLined>
          </div>
          <CustomSearchBox />

          <Section
            style={{
              paddingTop: '5rem'
            }}
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
                  margin-bottom: 3em;
                }
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
              <Configure hitsPerPage={12} />
              <div
                css={css`
                  ul {
                    list-decoration: none;
                    text-align: center;
                  }
                  ul li {
                    display: inline-block;
                    padding: 1em;
                    color: ${colors.link[0]};
                  }
                  ul li a {
                    text-decoration: none;
                  }
                  .ais-Pagination-link--selected {
                    font-weight: bold;
                    text-decoration: underline;
                  }
                  .ais-Pagination-item--disabled {
                    color: ${colors.link[2]};
                  }
                `}
              >
                <Pagination showFirst={false} />
              </div>
            </div>
          </Section>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExplorePage
