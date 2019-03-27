'use strict'

const fs = require('fs')

function githubHandle(githubUrl) {
  return githubUrl.replace('https://github.com/Bearer/integrations/tree/master/', '')
}

function handleImage(provider) {
  if (provider && provider.image) {
    return { url: provider.image.url, handle: provider.image.handle }
  }
  return {}
}

module.exports = async ({ graphql }) => {
  //-----------------------------------//
  // GENERATE JSON API                 //
  //-----------------------------------//

  // www.bearer.sh provides a JSON API which exposes for consumption various information
  // about integrations from Bearer's CMS system, for example images and copy

  // Currently we have two endpoints:
  // - All integrations from the Explore index page: api/explore.json
  // - Featured integrations (top 4): api/featured.json

  // Prepare API folder for JSON files
  const dir = './public/api'
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  //-----------------------------------//
  // INTEGRATION API: api/explore.json //
  //-----------------------------------//
  const integrationJSON = []
  const integrationData = await graphql(`
    {
      graphcms {
        integrations(
          where: {
            status: PUBLISHED
            githubUrl_not: null
            timeline: { timelineStages_some: { id_not: null, displayOnHub_not: null } }
            provider: { id_not: null }
          }
        ) {
          hubID
          githubUrl
          title
          description
          provider {
            image {
              url
              handle
            }
          }
        }
      }
    }
  `)

  if (integrationData.errors) {
    console.error(integrationData.errors)
    throw new Error(integrationData.errors)
  }

  integrationData.data.graphcms.integrations.forEach(integration => {
    console.log(`Preparing JSON for "${integration.title}" integration`)

    let template = githubHandle(integration.githubUrl)
    let imageObj = handleImage(integration.provider)

    integrationJSON.push({
      template,
      id: integration.hubID,
      repo: integration.githubUrl,
      name: integration.title,
      description: integration.description,
      image: {
        url: imageObj.url,
        handle: imageObj.handle
      }
    })
  })

  fs.writeFileSync(`${dir}/featured.json`, JSON.stringify(integrationJSON), 'utf8')

  //----------------------------------------------//
  // FEATURED INTEGRATIONS API: api/featured.json //
  //----------------------------------------------//

  const featuredIntegrationJSON = []
  const featuredIntegrationData = await graphql(`
    {
      graphcms {
        integrations(
          where: { status: PUBLISHED, githubUrl_not: null, featured: true }
          orderBy: featuredOrder_ASC
          first: 2
        ) {
          hubID
          featuredOrder
          githubUrl
          title
          description
          provider {
            image {
              url
              handle
            }
          }
        }
      }
    }
  `)

  if (featuredIntegrationData.errors) {
    console.error(featuredIntegrationData.errors)
    throw new Error(featuredIntegrationData.errors)
  }

  featuredIntegrationData.data.graphcms.integrations.forEach(integration => {
    let template = githubHandle(integration.githubUrl)
    let imageObj = handleImage(integration.provider)

    featuredIntegrationJSON.push({
      template,
      id: integration.hubID,
      repo: integration.githubUrl,
      name: integration.title,
      description: integration.description,
      image: {
        url: imageObj.url,
        handle: imageObj.handle
      }
    })
  })

  fs.writeFileSync(`${dir}/featured.json`, JSON.stringify(featuredIntegrationJSON), 'utf8')
}
