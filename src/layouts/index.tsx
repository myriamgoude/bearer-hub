import * as React from 'react'

import 'modern-normalize'
import '../styles/normalize'

import SiteMetadata from '../components/SiteMetadata/SiteMetadata'
import { Header, LayoutMain, LayoutRoot, Footer } from '../components'

const IndexLayout: React.SFC<{ location: Location }> = ({ children, location }) => (
  <LayoutRoot>
    <SiteMetadata pathname={location.pathname} />
    <Header enriched={location.pathname === '/press/' && true} />
    <LayoutMain>{children}</LayoutMain>
    <Footer />
  </LayoutRoot>
)
export default IndexLayout
