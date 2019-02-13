import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'

interface IExploreIndexProps {
  data: {
    graphcms: {
      integrations: {
        name: string
        slug: string
      }[]
    }
  }
}

export const query = graphql`
  query ExploreIndexQuery {
    graphcms {
      integrations(where: { status: PUBLISHED }) {
        name
        slug
      }
    }
  }
`

export default ({ data }: IExploreIndexProps) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Explore Integrations</h1>
        <h2>List of integrations...</h2>
        {data.graphcms.integrations.map((integration, index) => (
          <li key={index}>
            <Link to={`/explore/${integration.slug}`}>{integration.name}</Link>
          </li>
        ))}
      </Container>
    </Page>
  </IndexLayout>
)
