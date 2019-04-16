import * as React from 'react'

import 'modern-normalize'
import '../styles/normalize'

import SiteMetadata from '../components/SiteMetadata/SiteMetadata'
import { Header, LayoutMain, LayoutRoot, Footer } from '../components'

const IndexLayout: React.SFC<{ location: Location; enrichedHeader?: boolean }> = ({
  children,
  location,
  enrichedHeader
}) => (
  <LayoutRoot>
    <SiteMetadata pathname={location.pathname} />
    <Header enriched={enrichedHeader} />
    <LayoutMain>{children}</LayoutMain>
    <Footer />
  </LayoutRoot>
)
export default IndexLayout
