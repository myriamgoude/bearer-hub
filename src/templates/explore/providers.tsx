import * as React from 'react'
import { graphql } from 'gatsby'

import Container from '../../components/Container'
import IndexLayout from '../../layouts'
import Page from '../../components/Page'
import PageHeading from '../../components/PageHeading'
import PageMetadata from '../../components/PageMetadata'
import Search from '../../components/Search'
import SearchList from '../../components/SearchList'

interface IQueryData {
  graphcms: {
    defaultProvider: {
      id: string
      title: string
    }[]
    categories: {
      id: string
      title: string
    }[]
    providers: {
      id: string
      title: string
    }[]
  }
}

export const query = graphql`
  query ExploreProviderQuery($id: ID!) {
    graphcms {
      defaultProvider: providers(where: { id: $id }, first: 1) {
        id
        title
      }
      ...scopedCategories
      ...scopedProviders
    }
  }
`

const ExploreProviderTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const provider = data.graphcms.defaultProvider[0]

  return (
    <IndexLayout location={location}>
      <PageMetadata title={provider.title} description={`Explore ${provider.title} Integrations`} />
      <Page>
        <PageHeading primaryText={`Explore ${provider.title} Integrations`} />
        <Container>
          <SearchList
            selected={provider.id}
            categories={data.graphcms.categories}
            providers={data.graphcms.providers}
          />
          <Search defaultProvider={provider.title} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ExploreProviderTemplate
