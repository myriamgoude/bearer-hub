import * as React from 'react'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import Page from '../../components/Page/Page'
import { Section, HeroPanel, Search, Text, Clearfix, Grid } from '../../components/index'
import IndexLayout from '../../layouts'
import SearchList from '../../components/SearchList'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import heroStyles from '../../components/HeroPanel/HeroPanel.style'

interface IQueryData {
  graphcms: {
    providers: {
      id: string
      title: string
    }[]
    categories: {
      id: string
      title: string
    }[]
  }
}

export const scopedCategories = graphql`
  fragment scopedCategories on GraphCMS {
    categories(
      where: {
        status: PUBLISHED
        integrations_some: {
          id_not: null
          status: PUBLISHED
          timeline: { timelineStages_some: { id_not: null, displayOnHub: true } }
        }
      }
    ) {
      id
      title
    }
  }
`

export const scopedProviders = graphql`
  fragment scopedProviders on GraphCMS {
    providers(
      where: {
        status: PUBLISHED
        integrations_some: {
          id_not: null
          status: PUBLISHED
          timeline: { timelineStages_some: { id_not: null, displayOnHub: true } }
        }
      }
    ) {
      id
      title
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

const ExplorePage: GatsbyPage<IQueryData> = ({ data, location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Explore" description="Explore Integrations" />
    <Page>
      <div css={heroStyles.styleBackgroundExplore}>
        <HeroPanel
          longHero
          style={css`
            text-align: center;
          `}
        >
          <Text tag="h1" text="Explore integrations" />
          <Clearfix />
          <Text tag="h3" text="Over 30 Native Integrations for your App" />
        </HeroPanel>
      </div>
      <Section>
        <Grid>
          <SearchList categories={data.graphcms.categories} providers={data.graphcms.providers} />
          <div style={{ flex: '0 1 60%' }}>
            <Search />
          </div>
        </Grid>
      </Section>
    </Page>
  </IndexLayout>
)

export default ExplorePage
