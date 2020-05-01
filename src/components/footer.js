/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Button, Grid } from '@theme-ui/components';

const Footer = () => {
  const handleDisableTracking = () => {
    const shouldDisable = window.confirm(
      'This website uses technical cookies in order to improve the experience. The IP address is also anonymized.\n\nWould you still like to disable tracking?'
    );
    if (shouldDisable) window.gaOptout();
  };
  return (
    <Grid
      as="footer"
      columns={[2]}
      sx={{ mt: 5, paddingY: [2, 3], paddingX: [3, 4, 0] }}
    >
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
          justifyContent: 'flex-end',
          alignItems: 'center',
          fontSize: 1,
          color: 'secondary',
        }}
      >
        &copy; {new Date().getFullYear()}
      </Flex>
    </Grid>
  );
};

export default Footer;
