import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'

interface IQueryData {
  graphcms: {
    integrations: {
      title: string
    }[]
  }
}

export const query = graphql`
  query ExplorePresentQuery($id: ID!) {
    graphcms {
      integrations(where: { id: $id }, first: 1) {
        title
      }
    }
  }
`

const PresentTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const integration = data.graphcms.integrations[0]

  return (
    <IndexLayout location={location}>
      <Page>
        <Container>
          <h1>{integration.title}</h1>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default PresentTemplate
