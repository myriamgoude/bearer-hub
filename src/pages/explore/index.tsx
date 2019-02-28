import * as React from 'react'

import Page from '../../components/Page/Page'
import Container from '../../components/Container/Container'
import IndexLayout from '../../layouts'
import Search from '../../components/Search/Search'
import PageMetadata from '../../components/PageMetadata/PageMetadata'

const ExplorePage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <PageMetadata title="Explore" description="Explore Integrations" />
    <Page>
      <Container>
        <div>
          <h1>Explore Integrations</h1>
          <Search />
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

export default ExplorePage
