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
    categories: {
      title: string
    }[]
  }
}

export const query = graphql`
  query ExploreCategoryQuery($id: ID!) {
    graphcms {
      categories(where: { id: $id }) {
        title
      }
    }
  }
`

const ExploreCategoryTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const categoryTitle = data.graphcms.categories[0].title

  return (
    <IndexLayout location={location}>
      <PageMetadata title={categoryTitle} description={`Explore ${categoryTitle} Integrations`} />
      <Page>
        <PageHeading primaryText={`Explore ${categoryTitle} Integrations`} />
        <Container>
          <Search defaultCategory={categoryTitle} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ExploreCategoryTemplate
