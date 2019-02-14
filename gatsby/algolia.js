'use strict'

const allPublishedIntegrations = `
  query allPublishedIntegrations { 
    graphcms {
      integrations(where: { status: PUBLISHED }) {
        title
        categories {
            title
        }
        providers {
            title
        }
      }
    }
  }
`

module.exports = [
  {
    query: allPublishedIntegrations,
    transformer: ({ data }) => data.graphcms.integrations,
    settings: {
      attributesForFaceting: ['categories.title', 'providers.title']
    }
  }
]