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
  const { data } = await graphql(`
    {
      graphcms {
        integrations(where: { status: PUBLISHED }) {
          uuid
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

  const integrationData = []

  data.graphcms.integrations.forEach(integration => {
    if (integration.githubUrl) {
      console.log(`Preparing JSON for "${integration.title}" integration`)
      let template = githubHandle(integration.githubUrl)
      let imageObj = handleImage(integration.providers[0])

      integrationData.push({
        template,
        id: integration.uuid,
        repo: integration.githubUrl,
        name: integration.title,
        description: integration.description,
        image: {
          url: imageObj.url,
          handle: imageObj.handle
        }
      })
    } else {
      console.log(`No GitHub URL provided for "${integration.title}" integration`)
    }
  })
  const dir = './public/api'
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  fs.writeFileSync(`${dir}/explore.json`, JSON.stringify(integrationData), 'utf8')
}
