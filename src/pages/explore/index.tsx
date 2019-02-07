import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'

interface IExploreIndexProps {
  data: {
    site: {
      siteMetadata: {
        integrations: {
          name: string,
          slug: string
        }[]
      }
    }
  }
}

export const query = graphql`
  query ExploreIndexQuery {
    site {
      siteMetadata {
        integrations {
          name
          slug
        }
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
        {data.site.siteMetadata.integrations.map((integration, index) => (
          <li key={index}><Link to={`/explore/${integration.slug}`}>{integration.name}</Link></li>
        ))}
      </Container>
    </Page>
  </IndexLayout>
)
