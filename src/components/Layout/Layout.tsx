import * as React from 'react'

import '../../../node_modules/modern-normalize/modern-normalize.css'
import '../../styles/normalize'

import SiteMetadata from '../SiteMetadata/SiteMetadata'
import { Footer, Header, LayoutMain, LayoutRoot } from '../index'

const Layout: React.SFC<{ location: Location; enrichedHeader?: boolean }> = ({
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
export default Layout
