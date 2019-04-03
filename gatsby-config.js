'use strict'

const queries = require('./gatsby/algolia')

module.exports = {
  siteMetadata: {
    title: 'Bearer',
    siteUrl: process.env.GATSBY_BASE_DOMAIN,
    description: 'Bearer Hub',
    twitter: '@BearerSH',
    footer: [
      {
        title: 'Product',
        links: [
          { to: '/product/framework', label: 'Product' },
          { to: '/integrations', label: 'Templates' },
          { to: '/pricing', label: 'Pricing' }
        ]
      },
      {
        title: 'Company',
        links: [{ to: '/about', label: 'About us' }, { to: '/jobs', label: 'Jobs' }, { to: '/press', label: 'Press' }]
      },
      {
        title: 'Docs & Help',
        links: [
          { to: 'https://docs.bearer.sh', label: 'Documentation', trackLink: true },
          { to: 'https://support.bearer.sh/', label: 'FAQ' },
          { to: 'https://status.bearer.sh/', label: 'Service Status' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { to: '/terms', label: 'Terms' },
          { to: '/privacy-policy', label: 'Privacy' },
          { to: '/cookie-policy', label: 'Cookie Policy' }
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '',
        short_name: '',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#da532c',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          }
        ]
      }
    },
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
      resolve: 'gatsby-iubenda-bearer',
      options: {
        policy: '65368465',
        consentSolutionConfig: {
          api_key: 'tTYnrQygfLPUkWY1UGBBA3JkHHQUKxDp'
        },
        cookieSolutionConfig: {
          consentOnScroll: false,
          lang: 'en',
          siteId: 1413491,
          cookiePolicyId: 65368465,
          enableRemoteConsent: true,
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
    {
      resolve: 'gatsby-bugsnag-bearer',
      options: {
        apiKey: process.env.BUGSNAG_API_KEY
      }
    },
    'gatsby-plugin-react-helmet'
  ]
}
