module.exports = {
  siteMetadata: {
    title: "Nicola Molinari (emmenko) - Personal Website",
    description: "Personal Website",
    siteUrl: "https://emmenko.org"
  },
  plugins: [
    // TODO:
    // - gatsby-plugin-manifest
    // - gatsby-plugin-offline
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-52556892-1",
        anonymize: true
      }
    }
  ]
};
