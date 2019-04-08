import * as React from 'react'
import { navigate } from 'gatsby'

const ProductIndexPage: GatsbyPage = () => {
  React.useEffect(() => {
    navigate('/product/framework')
  })

  return null
}

export default ProductIndexPage
