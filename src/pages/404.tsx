import * as React from 'react'

import Link from '../components/Link/Link'
import Page from '../components/Page/Page'
import Container from '../components/Container/Container'
import IndexLayout from '../layouts'

const NotFoundPage: GatsbyPage = ({ location }) => (
  <IndexLayout location={location}>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
