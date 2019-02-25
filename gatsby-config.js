'use strict'

const queries = require('./gatsby/algolia')

module.exports = {
  siteMetadata: {
    title: 'Bearer',
    siteUrl: process.env.GATSBY_BASE_DOMAIN,
    description: 'Bearer Hub',
    twitter: '@BearerSH',
    howToSteps: [
      {
        title: 'Modular Components',
        description:
          'Bearer’s Integrations are composed of highly flexible modular components built on top of APIs. Did we mention they are 100% Open Source?'
      },
      {
        title: 'UI Elements & Backend Functions',
        description:
          'The Integration Components provide a mix of UI Elements & Backend Functions to cover fullstack usage.'
      },
      {
        title: 'Integration Proxy',
        description:
          'Our Infrastructure act as an Integration proxy, taking care of hard things like APIs Authentication (OAuth etc.), Security, Logging and Scaling.'
      }
    ],
    footer: [
      {
        title: 'Integrations',
        links: [
          { to: '/explore', label: 'Explore' },
          { to: '/pricing', label: 'Pricing' },
          { to: '/security', label: 'security' }
        ]
      },
      {
        title: 'Help',
        links: [
          { to: '/how-it-works', label: 'How it works' },
          { to: '#', label: 'Documentation' },
          { to: 'https://support.bearer.sh/', label: 'FAQ' },
          { to: '#', label: 'Status Page' }
        ]
      },
      {
        title: 'Company',
        links: [
          { to: '/native-integrations', label: 'Manifesto' },
          { to: '/about', label: 'About us' },
          { to: '/press', label: 'Press Kit' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { to: '/privacy-policy', label: 'Privacy' },
          { to: '/cookie-policy', label: 'Cookie Policy' },
          { to: '/legal', label: 'Legal Notices' },
          { to: '#', label: 'GDPR' }
        ]
      }
    ]
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
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'graphcms',
        url: process.env.GRAPHCMS_ENDPOINT_URL
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000 // default: 1000
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
        siteUrl: process.env.GATSBY_BASE_DOMAIN
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
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
        host: process.env.GATSBY_BASE_DOMAIN,
        sitemap: process.env.GATSBY_BASE_DOMAIN,
        policy: [{ userAgent: '*', disallow: ['/'] }]
      }
    },
    {
      resolve: `gatsby-iubenda-bearer`,
      options: {
        policy: '65368465',
        cookieSolutionConfig: {
          consentOnScroll: false,
          lang: 'en',
          siteId: 1413491,
          cookiePolicyId: 65368465,
          banner: {
            applyStyles: true,
            textColor: '#FFF',
            backgroundColor: '#030d36',
            fontSize: '0.8rem',
            content:
              'Bearer uses browser cookies to give you the best possible experience. To make Bearer work, we log user data and share it with processors. By closing this banner, you agree to our Privacy Policy, including cookie policy.',
            slideDown: false
          }
        }
      }
    },
    'gatsby-plugin-react-helmet'
  ]
}
