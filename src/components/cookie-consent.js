/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Cookies from 'js-cookie';
import {
  Box,
  Flex,
  Button,
  Message,
  Text,
  Close,
  Heading,
} from '@theme-ui/components';

const CookieConsent = () => {
  const [cookieConsentStatus, setCookieConsentStatus] = React.useState(
    Cookies.get('gdpr-analytics-enabled')
  );
  // Show the cookie consent only if there is no cookie status set
  const hasConfirmedCookieConsent =
    cookieConsentStatus === 'true' || cookieConsentStatus === 'false';
  const enableTracking = () => {
    Cookies.set('gdpr-analytics-enabled', 'true', {
      expires: 365, // expire after 1 year
    });
    window.trackGoogleAnalytics();
    setCookieConsentStatus('true');
  };
  const closeCookieConsent = () => {
    Cookies.set('gdpr-analytics-enabled', 'false');
    setCookieConsentStatus('false');
  };

  if (hasConfirmedCookieConsent) return null;
  return (
    <Message
      variant="cookieConsent"
      sx={{
        '@media only percy': {
          display: 'none',
        },
        '@keyframes slide-up': {
          from: {
            transform: 'translate(0, 100px)',
          },
          to: {
            transform: 'translate(0, 0)',
          },
        },
        bottom: [2, 3],
        left: [3, 4, 'auto'],
        right: [3, 'auto', 'auto'],
        position: 'fixed',
        maxWidth: ['100%', 'calc(768px / 2)'],
        animation: '0.5s slide-up',
      }}
    >
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading as="h3">{'GDPR Cookie Consent'}</Heading>
        <Close onClick={closeCookieConsent} />
      </Flex>
      <Box>
        <Text as="p" sx={{ fontSize: 1, lineHeight: 'heading' }}>
          {
            'Allow using technical cookies to help improve the website experience. The IP address is anonymized.'
          }
        </Text>
        <Button
          variant="flat"
          onClick={enableTracking}
          title="Consent to Google Analytics Tracking"
          sx={{ mr: [1] }}
        >
          {'Allow cookie'}
        </Button>
      </Box>
    </Message>
  );
};

export default CookieConsent;
