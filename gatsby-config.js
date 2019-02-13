'use strict'

module.exports = {
  siteMetadata: {
    title: 'Bearer Hub',
    description: 'Bearer Hub',
    author: {
      name: '@bearersh'
    },
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
          { to: '#', label: 'Login' },
          { to: '/explore', label: 'Explore' },
          { to: '/pricing', label: 'Pricing' },
          { to: '/security', label: 'security' }
        ]
      },
      {
        title: 'Help',
        links: [
          { to: '/', label: 'How it works' },
          { to: '#', label: 'Documentation' },
          { to: '#', label: 'FAQ' },
          { to: '#', label: 'Integration Requests' },
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
    {
      resolve: `gatsby-iubenda-bearer`,
      options: {
        policy: '65368465'
      }
    }
  ]
}
