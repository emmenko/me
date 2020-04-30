import React from 'react';
import Helmet from 'react-helmet';
import '../styles/global';
import config from '../site-config';

const Template = (props) => (
  <main>
    <Helmet>
      <html lang="en" amp />
      <title>{config.siteTitle}</title>
      <meta name="description" content={config.siteDescription} />
      <meta name="image" content={config.siteLogo} />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:image" content={config.siteLogo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.usernameTwitter} />
      <meta name="twitter:title" content={config.siteTitle} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={config.siteDescription} />
      <meta name="twitter:image" content={config.siteLogo} />
    </Helmet>
    {props.children()}
  </main>
);

export default Template;
