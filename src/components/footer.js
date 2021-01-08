import { Flex } from '@theme-ui/components';
import CookieConsent from './cookie-consent';

const Footer = () => {
  const isClient = typeof window !== 'undefined';
  return (
    <>
      <Flex
        as="footer"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 1,
          color: 'secondary',
          paddingY: [2, 3],
          paddingX: [3, 4, 0],
        }}
      >
        &copy; {new Date().getFullYear()}
      </Flex>
      {isClient && <CookieConsent />}
    </>
  );
};

export default Footer;
