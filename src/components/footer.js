/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import CookieConsent from './cookie-consent';

const Footer = () => {
  return (
    <React.Fragment>
      <Flex
        as="footer"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 1,
          color: 'secondary',
          mt: 5,
          paddingY: [2, 3],
          paddingX: [3, 4, 0],
        }}
      >
        &copy; {new Date().getFullYear()}
      </Flex>
      <CookieConsent />
    </React.Fragment>
  );
};

export default Footer;
