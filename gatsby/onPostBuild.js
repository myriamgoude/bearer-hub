'use strict'

const fs = require('fs')
const pify = require('pify')

const writeFile = pify(fs.writeFile)

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
  const { data } = await graphql(`
    {
      graphcms {
        integrations(where: { status: PUBLISHED }) {
          githubUrl
          title
          description
          providers {
            image {
              url
              handle
            }
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.error(data.errors)
    throw new Error(data.errors)
  }

  let integrationData = {}

  data.graphcms.integrations.forEach(integration => {
    if (integration.githubUrl) {
      console.log(`Preparing JSON for "${integration.title}" integration`)
      let identifier = githubHandle(integration.githubUrl)
      let imageObj = handleImage(integration.providers[0])

      integrationData[identifier] = {
        name: integration.title,
        description: integration.description,
        image: {
          url: imageObj.url,
          handle: imageObj.handle
        }
      }
    } else {
      console.log(`No GitHub URL provided for "${integration.title}" integration`)
    }
  })

  writeFile('./static/api/explore.json', JSON.stringify(integrationData), 'utf8').catch(e => {
    console.log(`Failed to write JSON file: ${e}`)
  })
}
