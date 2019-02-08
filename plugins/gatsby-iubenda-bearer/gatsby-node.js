/*
  Based on https://github.com/Scandy-co/gatsby-source-iubenda
*/

const axios = require("axios");
const crypto = require("crypto");
const { resolve } = require("path");

const getTitle = content => {
  const h1 = new RegExp(`<h1>[^]*<\/h1>`);
  const h1Match = content.match(h1);
  const titleWithTags = h1Match ? h1Match[0] : "Cookie Policy";
  const titleWithoutTags = titleWithTags.replace(/<\/?[^>]+(>|$)/g, ""); // remove "of"?
  // titleWithoutTags = titleWithoutTags.replace(' of', '')

  return titleWithoutTags;
};

const processData = (doc, id, slug) => {
  const nodeContent = JSON.stringify(doc);
  const nodeContentDigest = crypto
    .createHash("md5")
    .update(nodeContent)
    .digest("hex");
  return {
    ...doc,
    id,
    title: getTitle(doc.content),
    parent: null,
    slug,
    children: [],
    internal: {
      type: `IubendaDocument`,
      content: nodeContent,
      contentDigest: nodeContentDigest
    }
  };
};

exports.sourceNodes = async ({ actions, createNodeId }, { policy }) => {
  const { createNode } = actions;
  const create = (page, { data }) => {
    const nodeId = createNodeId(page.url, `iubenda-doc`);
    const nodeData = processData({ content: data.content }, nodeId, page.slug);
    return createNode(nodeData);
  };
  console.log("Fetching document(s) from iubenda");
  const pages = [
    {
      slug: "/privacy-policy",
      url: `https://www.iubenda.com/api/privacy-policy/${policy}/no-markup`
    },
    {
      slug: "/cookie-policy",
      url: `https://www.iubenda.com/api/privacy-policy/${policy}/cookie-policy/no-markup`
    }
  ];
  return Promise.all(
    pages.map(async (page, index) => {
      const result = await axios.get(page.url);
      return create(page, result);
    })
  );
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const all = await graphql(`
    {
      allIubendaDocument {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (all.errors) {
    console.error(all.errors);
    throw new Error(all.errors);
  }
  all.data.allIubendaDocument.edges.forEach(({ node }) => {
    const { slug, id } = node
    createPage({
      path: slug,
      component: resolve(`./src/templates/iubenda.tsx`),
      context: {
        id
      }
    });
  });
};
