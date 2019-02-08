import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'

interface PresentTemplateProps {
    data: {
      graphcms: {
        integrations: {
          name: string
        }[]
      }
    }
  }

  export const query = graphql`
    query ExplorePresentQuery($slug: String!) {
      graphcms {
        integrations(where: {slug: $slug} first: 1){
          name
        }
      }
    }
  `

  const PresentTemplate: React.SFC<PresentTemplateProps> = ({ data }) => {
    const integration = data.graphcms.integrations[0]

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

