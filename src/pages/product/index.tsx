import * as React from 'react'
import { navigate } from 'gatsby'

import IndexLayout from '../../layouts'

const ProductIndexPage: GatsbyPage = ({ location }) => {
  React.useEffect(() => {
    navigate('/product/framework', { replace: true })
  })

  return <IndexLayout location={location} />
}

export default ProductIndexPage
