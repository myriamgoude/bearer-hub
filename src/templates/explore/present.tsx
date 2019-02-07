import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'

interface PresentTemplateProps {
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

  // FIXME: unlike allMarkdown or GraphCMS data, with site metadata we cannot query e.g.
  // "first" or "where" which we would want to do in this case.
  export const query = graphql`
    query ExplorePresentQuery {
      site {
        siteMetadata {
          integrations{
            slug
            name
          }
        }
      }
    }
  `

  const PresentTemplate: React.SFC<PresentTemplateProps> = ({ data }) => {
    // FIXME: unlike allMarkdown or GraphCMS data, with site metadata we cannot query e.g.
    // "first" or "where" which we would want to do in this case.
    const integration = data.site.siteMetadata.integrations[0]

    return (
      <IndexLayout>
        <Page>
          <Container>
            <h1>{integration.name}</h1>
          </Container>
        </Page>
      </IndexLayout>
    )
  }

  export default PresentTemplate

