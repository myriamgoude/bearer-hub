'use strict'

module.exports = {
  siteMetadata: {
    title: 'Bearer Hub',
    description: 'Bearer Hub',
    author: {
      name: '@bearersh'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.GATSBY_HUB_SEGMENT_ID,
        devKey: process.env.GATSBY_HUB_SEGMENT_ID,
        trackPage: true
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bearer-hub-staging.netlify.com/',
        sitemap: 'https://bearer-hub-staging.netlify.com/',
        policy: [{ userAgent: '*', disallow: ['/'] }]
      }
    },
  ]
}
