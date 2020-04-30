const theme = require('./gatsby-plugin-theme-ui');

module.exports = {
  pathPrefix: '/',
  siteTitle: 'Nicola Molinari (emmenko)',
  siteLongTitle: 'Nicola Molinari (emmenko) - Personal Website',
  siteUrl: 'https://emmenko.org',
  siteLanguage: 'en',
  siteLogo: '/icons/icon-1024x1024.png',
  siteDescription: 'Personal Website',
  usernameTwitter: 'emmenko',
  // manifest.json
  manifestName: 'Nicola Molinari (emmenko)',
  manifestShortName: 'emmenko',
  manifestStartUrl: '/?utm_source=homescreen',
  manifestBackgroundColor: theme.colors.background,
  manifestThemeColor: theme.colors.primary,
  manifestDisplay: 'standalone',
  manifestOrientation: 'landscape',
  // analytics
  analyticsTrackingId: 'UA-52556892-1',
};
