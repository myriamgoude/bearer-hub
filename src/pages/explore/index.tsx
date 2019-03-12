import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../../components/Page/Page'
import Container from '../../components/Container/Container'
import IndexLayout from '../../layouts'
import Search from '../../components/Search/Search'
import SearchList from '../../components/SearchList'
import PageMetadata from '../../components/PageMetadata/PageMetadata'

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
      <Container>
        <div>
          <h1>Explore Integrations</h1>
          <SearchList categories={data.graphcms.categories} providers={data.graphcms.providers} />
          <Search />
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

export default ExplorePage
