export const onClientEntry = async (
  _, // eslint-disable-line
  pluginOptions
) => {
  // Enable ReadMo Chrome Extension: https://readmo.app
  const ReadMo = await import('@readmo/sdk');

  ReadMo.embed({
    selector: 'a[data-readmoapp]',
    partner: {
      name: 'Nicola Molinari',
      url: 'https://emmenko.org',
      image: 'https://emmenko.org/icons/icon-1024x1024.png',
      roundedImage: true,
    },
    theme: {
      light: {
        highlightTextColor: '#414141',
        highlightGradient: 'linear-gradient(-5deg, #f5f5f5, #f5f5f5)',
      },
      dark: {
        highlightTextColor: '#c9d1d9',
        highlightGradient: 'linear-gradient(-10deg, #0d1117, #0d1117)',
      },
    },
  });
};

// https://github.com/gatsbyjs/gatsby/pull/9087
// https://www.gatsbyjs.org/docs/browser-apis/#onServiceWorkerUpdateReady
export const onServiceWorkerUpdateReady = () => window.location.reload();
