'use strict'

const allPublishedIntegrations = `
  query allPublishedIntegrations { 
    graphcms {
      integrations(where: { status: PUBLISHED, timeline: { timelineStages_some: { id_not: null, displayOnHub: true } } }) {
        id
        uuid
        title
        categories {
          uuid
          title
        }
        providers {
          uuid
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
      attributesForFaceting: ['categories.title', 'providers.title']
    }
  }
]
