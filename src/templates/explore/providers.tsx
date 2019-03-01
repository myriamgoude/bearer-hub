import * as React from 'react'
import { graphql } from 'gatsby'

import Container from '../../components/Container'
import IndexLayout from '../../layouts'
import Page from '../../components/Page'
import PageHeading from '../../components/PageHeading'
import PageMetadata from '../../components/PageMetadata'
import Search from '../../components/Search'

interface IQueryData {
  graphcms: {
    providers: {
      title: string
    }[]
  }
}

export const query = graphql`
  query ExploreProviderQuery($id: ID!) {
    graphcms {
      providers(where: { id: $id }) {
        title
      }
    }
  }
`

const ExploreProviderTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const providerTitle = data.graphcms.providers[0].title

  return (
    <IndexLayout location={location}>
      <PageMetadata title={providerTitle} description={`Explore ${providerTitle} Integrations`} />
      <Page>
        <PageHeading primaryText={`Explore ${providerTitle} Integrations`} />
        <Container>
          <Search defaultProvider={providerTitle} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ExploreProviderTemplate
