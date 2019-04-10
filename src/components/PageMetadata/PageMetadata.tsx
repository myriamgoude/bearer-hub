/*
  Helper compoment for pages to set common meta
*/
import * as React from 'react'
import Helmet from 'react-helmet'

interface IPageMetadataProps {
  title: string
  description?: string | null
  image?: string | null
}

const PageMetadata: React.SFC<IPageMetadataProps> = ({ title, description, image }) => {
  const allDescriptions = description
    ? [
        { name: 'description', content: description },
        { name: 'twitter:description', content: description },
        { propery: 'og:description', content: description }
      ]
    : []

  const allImages = image ? [{ name: 'twitter:image', content: image }, { propery: 'og:image', content: image }] : []
  const allTitles = [{ name: 'twitter:title', content: title }, { propery: 'og:title', content: title }]

  return <Helmet title={title} meta={[...allTitles, ...allDescriptions, ...allImages]} />
}
export default PageMetadata
