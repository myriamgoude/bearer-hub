import * as React from 'react'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import Page from '../../components/Page/Page'
import { Section, HeroLined, Text, Clearfix, Grid, SectionHeading, Button, Search } from '../../components/index'
import IndexLayout from '../../layouts'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'

import { InstantSearch } from 'react-instantsearch-dom'

import { SearchList } from '../../components/Search/components/SearchList'

import { colors } from '../../styles/variables'

interface IQueryData {
  graphcms: {
    providers: {
      id: string
      hubID: string
      title: string
      image: {
        url: string
      }
    }[]
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

export const scopedProviders = graphql`
  fragment scopedProviders on GraphCMS {
    providers(where: { status: PUBLISHED, templates_some: { status: PUBLISHED } }) {
      id
      hubID
      title
      image {
        url
      }
    }
  }
`

export const query = graphql`
  query ExplorePageQuery {
    graphcms {
      ...scopedProviders
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
              <Text tag="h1" text="Explore integrations" />
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
              <SearchList categories={data.graphcms.categories} providers={data.graphcms.providers} />
            </div>

            <div
              css={css`
                flex: 0 1 70%;
              `}
            >
              <Search />

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
                <Button primary trackLink link="?share-ideas" text="Share ideas" />
              </Grid>
            </div>
          </Section>
        </InstantSearch>
      </Page>
    </IndexLayout>
  )
}

export default ExplorePage
