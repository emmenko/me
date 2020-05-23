import React from 'react';
import { Helmet } from 'react-helmet';
import { useThemeUI } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';

const defaultProps = {
  title: ``,
  description: false,
  pathname: false,
  image: false,
  children: null,
};

const SEO = ({
  title,
  templateTitle,
  description,
  pathname,
  image,
  children,
}) => {
  const site = useSiteMetadata();
  const themeContext = useThemeUI();

  const {
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  };

  return (
    <Helmet titleTemplate={['%s', templateTitle].filter(Boolean).join(' | ')}>
      <title>{seo.title}</title>
      <html lang={siteLanguage} />
      <meta name="theme-color" content={themeContext.theme.colors.primary} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href="/icons/icon-1024x1024.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/icon-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />
      {children}
    </Helmet>
  );
};

export default SEO;

SEO.defaultProps = defaultProps;
