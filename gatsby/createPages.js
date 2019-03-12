'use strict'
const { resolve } = require('path')

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
  // EXPLORE PRESENT PAGES //
  //----------------------------//

  // Create pages for integrations at explore/integrations/my-integration-slug/present
  // using content from our CMS system and the explore/present.tsx template
  //
  // Note: we only create pages for PUBLISHED integrations with TIMELINE STAGES

  const allIntegrations = await graphql(`
    {
      graphcms {
        integrations(
          where: { status: PUBLISHED, timeline: { timelineStages_some: { id_not: null, displayOnHub_not: null } } }
        ) {
          id
          title
        }
      }
    }
  `)

  if (allIntegrations.errors) {
    console.error(allIntegrations.errors)
    throw new Error(allIntegrations.errors)
  }

  allIntegrations.data.graphcms.integrations.forEach(({ id, title }) => {
    // See /services/Integration which also generates a slug
    // Since we cannot use this service here, the logic must be duplicated
    const path = `/explore/${id}-${title.toLowerCase().replace(/\s/g, '-')}`

    createPage({
      path,
      component: resolve(`./src/templates/explore/present.tsx`),
      context: {
        id
      }
    })
  })

  //-------------------------------------//
  // EXPLORE CATEGORY AND PROVIDER PAGES //
  //-------------------------------------//

  // Note: Please see the scopedCategories and scopedProviders
  // GraphQL fragments in pages/explore/index. We'd use these
  // fragments in the queries below but they're not available
  // to us here (Gatsby quirk)

  // Create pages for Integration Providers (e.g. "Slack", "MailChimp")
  // at explore/my-provider-slug/ and using content from our CMS system
  // and the explore/providers.tsx template
  const allProviders = await graphql(`
    {
      graphcms {
        providers(
          where: {
            status: PUBLISHED
            integrations_some: {
              id_not: null
              status: PUBLISHED
              timeline: { timelineStages_some: { id_not: null, displayOnHub: true } }
            }
          }
        ) {
          id
          title
        }
      }
    }
  `)

  if (allProviders.errors) {
    console.error(allProviders.errors)
    throw new Error(allProviders.errors)
  }

  allProviders.data.graphcms.providers.forEach(({ id, title }) => {
    const path = `/explore/${title.toLowerCase().replace(/\s/g, '-')}`

    createPage({
      path,
      component: resolve(`./src/templates/explore/providers.tsx`),
      context: {
        id
      }
    })
  })

  // Create pages for Integration Categories (e.g. "Developer Tooling",
  // "Mailing") at explore/my-category-slug and using content from our
  // CMS system and the explore/categories.tsx template
  const allCategories = await graphql(`
    {
      graphcms {
        categories(
          where: {
            status: PUBLISHED
            integrations_some: {
              id_not: null
              status: PUBLISHED
              timeline: { timelineStages_some: { id_not: null, displayOnHub: true } }
            }
          }
        ) {
          id
          title
        }
      }
    }
  `)

  if (allCategories.errors) {
    console.error(allCategories.errors)
    throw new Error(allCategories.errors)
  }

  allCategories.data.graphcms.categories.forEach(({ id, title }) => {
    const path = `/explore/${title.toLowerCase().replace(/\s/g, '-')}`

    createPage({
      path,
      component: resolve(`./src/templates/explore/categories.tsx`),
      context: {
        id
      }
    })
  })
}
