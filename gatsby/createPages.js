'use strict'
const { resolve } = require('path')
const fs = require('fs')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  //----------------------------//
  // MARKDOWN PAGES             //
  //----------------------------//

  // Create pages for our static content that is not managed in our CMS
  // such as our security and privacy pages
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      component: resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        slug
      }
    })
  })

  //----------------------------//
  //  ALL EXPLORE PAGES         //
  //----------------------------//

  // Templates for Explore pages
  const integrationTemplate = resolve(`./src/templates/explore/present.tsx`)
  const providerTemplate = resolve(`./src/templates/explore/providers.tsx`)
  const categoryTemplate = resolve(`./src/templates/explore/categories.tsx`)

  // Redirect data for the Netlify _redirects file
  const providerRedirects = []
  const providerRewrites = []
  const categoryRedirects = []
  const categoryRewrites = []
  const integrationRedirects = []
  const integrationRewrites = []
  const integrationProviderRedirects = []

  // See /services/Integration which also generates a slug
  // Since we cannot use this service here, the logic must be duplicated
  function generateSlug(title) {
    return title.toLowerCase().replace(/\s/g, '-')
  }

  // Note 1: we only ask for PUBLISHED integrations with 1+ PROVIDER and Hub-worthy TIMELINE STAGES
  // Note 2: ID is a hashed string used by GraphCMS e.g. cjs3996bq9ew00c15zc96bcnh, cjsukbmse36eh0c150la5jzc2
  //         UUID is a field we have defined, and use in the URLs e.g. 1, 5, 72
  const allExplore = await graphql(`
    {
      graphcms {
        integrations(
          where: {
            status: PUBLISHED
            timeline: { timelineStages_some: { id_not: null, displayOnHub_not: null } }
            providers_some: { id_not: null }
          }
        ) {
          id
          uuid
          title
          providers {
            id
            uuid
            title
          }
          categories {
            id
            uuid
            title
          }
        }
      }
    }
  `)

  if (allExplore.errors) {
    console.error(allExplore.errors)
    throw new Error(allExplore.errors)
  }

  allExplore.data.graphcms.integrations.forEach(integration => {
    const provider = integration.providers[0]
    const providerSlug = generateSlug(provider.title)
    const providerPath = `/explore/provider/${provider.uuid}/${providerSlug}`
    const providerWildCardPath = `/explore/provider/${provider.uuid}/:slug`

    const integrationPath = `/explore/${provider.uuid}/${providerSlug}/${integration.uuid}/${generateSlug(
      integration.title
    )}`
    const integrationWildCardPath = `/explore/${provider.uuid}/:slug/${integration.uuid}/:slug`
    // Take us from e.g. explore/12/slack/ to explore/provider/12/slack
    const integrationProviderRedirect = `/explore/${provider.uuid}/:slug /explore/provider/${
      provider.uuid
    }/${providerSlug} 301`

    // Create pages for Integrations (e.g. "Slack Notification")
    createPage({
      path: integrationPath,
      component: integrationTemplate,
      context: {
        id: integration.id
      }
    })

    // Create pages for Integration Providers (e.g. "Slack", "MailChimp")
    createPage({
      path: providerPath,
      component: providerTemplate,
      context: {
        id: provider.id
      }
    })

    // Add rewrite (200) and redirect (301) data for Integration and Provider
    providerRewrites.push(`${providerPath} ${providerPath} 200`)
    providerRedirects.push(`${providerWildCardPath} ${providerPath} 301`)

    integrationRewrites.push(`${integrationPath} ${integrationPath} 200`)
    integrationRedirects.push(`${integrationWildCardPath} ${integrationPath} 301`)

    integrationProviderRedirects.push(integrationProviderRedirect)

    // Create pages for Integration Categories (e.g. "Developer Tooling", "Mailing")
    integration.categories.forEach(category => {
      const categoryPath = `/explore/category/${category.uuid}/${generateSlug(category.title)}`
      const categoryWildCardPath = `/explore/category/${category.uuid}/:slug`

      createPage({
        path: categoryPath,
        component: categoryTemplate,
        context: {
          id: category.id
        }
      })

      // Add rewrite (200) and redirect (301) data for Category
      categoryRewrites.push(`${categoryPath} ${categoryPath} 200`)
      categoryRedirects.push(`${categoryWildCardPath} ${categoryPath} 301`)
    })
  })
  console.log('Populating redirect file for Netlify...')
  const dir = './public/'

  const redirectData = []

  // Add rewrites (200)
  redirectData.push(integrationRewrites.join('\n'))
  redirectData.push(providerRewrites.join('\n'))
  redirectData.push(categoryRewrites.join('\n'))

  // Add redirects (301)
  redirectData.push(integrationRedirects.join('\n'))
  redirectData.push(integrationProviderRedirects.join('\n'))
  redirectData.push(providerRedirects.join('\n'))
  redirectData.push(categoryRedirects.join('\n'))

  fs.writeFileSync(`${dir}/_redirects`, redirectData.join('\n'), 'utf8')
}
