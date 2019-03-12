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
    defaultCategory: {
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
  query ExploreCategoryQuery($id: ID!) {
    graphcms {
      defaultCategory: categories(where: { id: $id }, first: 1) {
        id
        title
      }
      ...scopedCategories
      ...scopedProviders
    }
  }
`

const ExploreCategoryTemplate: GatsbyPage<IQueryData> = ({ data, location }) => {
  const category = data.graphcms.defaultCategory[0]

  return (
    <IndexLayout location={location}>
      <PageMetadata title={category.title} description={`Explore ${category.title} Integrations`} />
      <Page>
        <PageHeading primaryText={`Explore ${category.title} Integrations`} />
        <Container>
          <SearchList
            selected={category.id}
            categories={data.graphcms.categories}
            providers={data.graphcms.providers}
          />
          <Search defaultCategory={category.title} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ExploreCategoryTemplate
