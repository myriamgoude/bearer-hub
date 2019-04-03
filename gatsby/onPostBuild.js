'use strict'

const fs = require('fs')

function gitHubHandle(gitHubUrl) {
  return gitHubUrl.replace('https://github.com/Bearer/templates/tree/master/', '')
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
  // about templates from Bearer's CMS system, for example images and copy

  // Currently we have two endpoints:
  // - All templates from the Integrations index page: api/explore.json
  // - Featured templates (top 4): api/featured.json

  // Prepare API folder for JSON files
  const dir = './public/api'
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  //-----------------------------------//
  // TEMPLATE API: api/explore.json    //
  //-----------------------------------//
  const templateJSON = []
  const templateData = await graphql(`
    {
      graphcms {
        templates(where: { status: PUBLISHED, provider: { id_not: null } }) {
          hubID
          gitHubUrl
          title
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

  if (templateData.errors) {
    console.error(templateData.errors)
    throw new Error(templateData.errors)
  }

  templateData.data.graphcms.templates.forEach(template => {
    console.log(`Preparing JSON for "${template.title}" template`)

    let handle = gitHubHandle(template.gitHubUrl)
    let imageObj = handleImage(template.provider)

    templateJSON.push({
      template: handle,
      id: template.hubID,
      repo: template.gitHubUrl,
      name: template.title,
      description: `${template.title} : Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: {
        url: imageObj.url,
        handle: imageObj.handle
      }
    })
  })

  fs.writeFileSync(`${dir}/explore.json`, JSON.stringify(templateJSON), 'utf8')

  //----------------------------------------------//
  // FEATURED TEMPLATES API: api/featured.json    //
  //----------------------------------------------//

  const featuredIntegrationJSON = []
  const featuredIntegrationData = await graphql(`
    {
      graphcms {
        templates(where: { status: PUBLISHED, featured: true }, orderBy: featuredOrder_ASC, first: 2) {
          hubID
          featuredOrder
          gitHubUrl
          title
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

  featuredIntegrationData.data.graphcms.templates.forEach(template => {
    let handle = gitHubHandle(template.gitHubUrl)
    let imageObj = handleImage(template.provider)

    featuredIntegrationJSON.push({
      template: handle,
      id: template.hubID,
      repo: template.gitHubUrl,
      name: template.title,
      description: `${template.title} : Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: {
        url: imageObj.url,
        handle: imageObj.handle
      }
    })
  })

  fs.writeFileSync(`${dir}/featured.json`, JSON.stringify(featuredIntegrationJSON), 'utf8')
}
