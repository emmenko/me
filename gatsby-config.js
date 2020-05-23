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
        name: 'notes',
        path: `${__dirname}/src/notes`,
      },
    },
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
        theme_color: '#d84136', // theme.colors.primary
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
        // https://www.gatsbyjs.org/packages/gatsby-plugin-offline/#using-with-gatsby-plugin-manifest
        cache_busting_mode: 'none',
        // Avoid adding the `theme-color` meta tag since we're using a theme.
        // https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/#remove-theme-color-meta-tag
        theme_color_in_head: false
      },
    },
    {
      // https://www.gatsbyjs.org/packages/gatsby-plugin-offline/#using-with-gatsby-plugin-manifest
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-tracking',
      options: {
        debug: false,
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
