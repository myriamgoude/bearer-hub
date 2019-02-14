import * as React from 'react'
import { graphql } from 'gatsby'

import Link from '../../components/Link'
import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'

import { path } from '../../services/Integration'

interface IExploreIndexProps {
  data: {
    graphcms: {
      integrations: {
        id: string
        title: string
      }[]
    }
  }
}

export const query = graphql`
  query ExploreIndexQuery {
    graphcms {
      integrations(where: { status: PUBLISHED }) {
        id
        title
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
            <Link to={`${path(integration)}`}>{integration.title}</Link>
          </li>
        ))}
      </Container>
    </Page>
  </IndexLayout>
)
