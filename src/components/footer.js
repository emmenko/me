/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex, Button, Grid } from '@theme-ui/components';
import GithubSvg from '../components/svg/github';
import TwitterSvg from '../components/svg/twitter';

const Footer = () => {
  const handleDisableTracking = () => {
    const shouldDisable = window.confirm(
      'This website uses technical cookies in order to improve the experience. The IP address is also anonymized.\n\nWould you still like to disable tracking?'
    );
    if (shouldDisable) window.gaOptout();
  };
  return (
    <Grid as="footer" columns={[3]} sx={{ paddingX: [3, 4, 0] }}>
      <Flex
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Button
          variant="flat"
          onClick={handleDisableTracking}
          title="Disable Google Analytics Tracking"
          sx={{ mr: [1] }}
        >
          {'Tracking'}
        </Button>
        <span role="img" aria-label="Emoji hand waving">
          👋
        </span>
      </Flex>
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex
          as="a"
          variant="links.icons"
          title="Github account (emmenko)"
          href="https://github.com/emmenko"
          rel="noopener noreferrer"
          target="blank"
          sx={{ mr: [1] }}
        >
          <GithubSvg width="25" height="25" />
        </Flex>
        <Flex
          as="a"
          variant="links.icons"
          title="Twitter account (emmenko)"
          href="https://twitter.com/emmenko"
          rel="noopener noreferrer"
          target="blank"
        >
          <TwitterSvg width="25" height="25" />
        </Flex>
      </Flex>
      <Flex
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        &copy; {new Date().getFullYear()}
      </Flex>
    </Grid>
  );
};

export default Footer;
