"use strict";
const { resolve } = require("path");

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields;

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: resolve(`./src/templates/${layout || "page"}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    });
  });

  // Add presentation pages for integrations at explore/integrations/my-integration-slug/present
  // using site metadata and the explore/present.tsx template
  const allExplorePages = await graphql(`
    {
      graphcms {
        integrations(where: {status: "PUBLISHED"}) {
          slug
        }
      }
    }
  `)

  if (allExplorePages.errors) {
    console.error(allExplorePages.errors);
    throw new Error(allExplorePages.errors);
  }

  allExplorePages.data.graphcms.integrations.forEach(({ slug }) => {
    createPage({
      path: "/explore/" + slug,
      component: resolve(`./src/templates/explore/present.tsx`),
      context: {
        slug
      }
    });
  });
};
