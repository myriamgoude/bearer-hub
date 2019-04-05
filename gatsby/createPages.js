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
  //  ALL INTEGRATION PAGES     //
  //----------------------------//

  // Templates for Integration pages
  const timelineTemplate = resolve(`./src/templates/integrations/timeline.tsx`)
  const categoryTemplate = resolve(`./src/templates/integrations/categories.tsx`)

  // Redirect data for the Netlify _redirects file
  const categoryRedirects = []
  const categoryRewrites = []
  const templateRedirects = []
  const templateRewrites = []

  // See /services/template which also generates a slug
  // Since we cannot use this service here, the logic must be duplicated
  function generateSlug(title) {
    return title.toLowerCase().replace(/\s/g, '-')
  }

  // Note 1: we only ask for PUBLISHED templates with an associated PROVIDER
  // Note 2: ID is a hashed string used by GraphCMS e.g. cjs3996bq9ew00c15zc96bcnh, cjsukbmse36eh0c150la5jzc2
  //         Hub ID is a unique and required field we have defined in the CMS, which we use in the URLs e.g. 1, 5, 72
  const allTemplates = await graphql(`
    {
      graphcms {
        templates(where: { status: PUBLISHED, provider: { id_not: null } }) {
          id
          hubID
          title
          categories {
            id
            hubID
            title
          }
        }
      }
    }
  `)

  if (allTemplates.errors) {
    console.error(allTemplates.errors)
    throw new Error(allTemplates.errors)
  }

  allTemplates.data.graphcms.templates.forEach(template => {
    const templatePath = `/integrations/${template.hubID}/${generateSlug(template.title)}`
    const templateWildCardPath = `/integrations/${template.hubID}/:slug`

    // Create pages for templates (e.g. "Slack Notification")
    createPage({
      path: templatePath,
      component: timelineTemplate,
      context: {
        id: template.id
      }
    })

    // Add rewrite (200) and redirect (301) data for template
    templateRewrites.push(`${templatePath} ${templatePath} 200`)
    templateRedirects.push(`${templateWildCardPath} ${templatePath} 301`)

    // Create pages for template Categories (e.g. "Developer Tooling", "Mailing")
    template.categories.forEach(category => {
      const categoryPath = `/integrations/category/${category.hubID}/${generateSlug(category.title)}`
      const categoryWildCardPath = `/integrations/category/${category.hubID}/:slug`

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
  console.log('\nPopulating redirect file for Netlify...')
  const dir = './public/'

  const redirectData = []

  // Add rewrites (200)
  redirectData.push(templateRewrites.join('\n'))
  redirectData.push(categoryRewrites.join('\n'))

  // Add redirects (301)
  redirectData.push(templateRedirects.join('\n'))
  redirectData.push(categoryRedirects.join('\n'))

  fs.writeFileSync(`${dir}/_redirects`, redirectData.join('\n'), 'utf8')
}
