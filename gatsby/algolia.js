'use strict'

const allPublishedTemplates = `
  query allPublishedTemplates { 
    graphcms {
      templates(where: { status: PUBLISHED }) {
        id
        hubID
        title
        imageShare {
          url
        }
        categories {
          hubID
          title
        }
        provider {
          hubID
          title
          image {
            url
          }
        }
      }
    }
  }
`

module.exports = [
  {
    query: allPublishedTemplates,
    transformer: ({ data }) => data.graphcms.templates,
    settings: {
      attributesForFaceting: ['categories.title']
    }
  }
]
