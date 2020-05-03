const siteMetadata = {
  siteTitle: 'Nicola Molinari (@emmenko) - Software Engineer',
  siteTitleAlt: 'Nicola Molinari (@emmenko) - Software Engineer',
  siteHeadline: 'Nicola Molinari (@emmenko) - Software Engineer',
  siteDescription: 'Nicola Molinari (@emmenko) - Software Engineer',
  siteUrl: 'https://emmenko.org',
  siteLanguage: 'en',
  siteImage: '/icons/icon-1024x1024.png',
  author: '@emmenko',
};

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'stories',
        path: `${__dirname}/src/stories`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        // List of rehype plugins, that transform the HTML AST.
        rehypePlugins: [
          require('rehype-slug'),
          require('./src/plugins/rehype-mdx-section'),
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    {
      // Define before `gatsby-plugin-offline`
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteTitle,
        short_name: 'emmenko',
        start_url: '/?utm_source=homescreen',
        background_color: '#fff', // theme.colors.background
        theme_color: '#e06961', // theme.colors.primary
        display: 'standalone',
        orientation: 'landscape',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/icon-1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-gdpr-tracking',
      options: {
        debug: true,
        environments: ['production', 'development'],
        googleAnalytics: {
          trackingId: 'UA-52556892-1',
          autoStart: false,
          anonymize: true,
          controlCookieName: 'gdpr-analytics-enabled',
        },
      },
    },
    'gatsby-plugin-netlify-cache',
  ],
};
