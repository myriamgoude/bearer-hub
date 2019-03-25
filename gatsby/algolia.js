'use strict'

const allPublishedIntegrations = `
  query allPublishedIntegrations { 
    graphcms {
      integrations(where: { status: PUBLISHED, timeline: { timelineStages_some: { id_not: null, displayOnHub: true } } }) {
        id
        hubID
        title
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
    query: allPublishedIntegrations,
    transformer: ({ data }) => data.graphcms.integrations,
    settings: {
      attributesForFaceting: ['categories.title', 'provider.title']
    }
  }
]
