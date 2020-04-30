/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { Flex, Grid, Link } from '@theme-ui/components';
import ColorModeToggle from './colormode-toggle';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (event) => {
    event.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Grid
      as="header"
      columns={[2]}
      sx={{ paddingY: [2, 3], paddingX: [3, 4, 0] }}
    >
      <Flex sx={{ alignItems: `center`, justifyContent: `flex-start` }}>
        <Link to="/" aria-label="To homepage">
          {'/'}
        </Link>
      </Flex>
      <Flex sx={{ alignItems: `center`, justifyContent: `flex-end` }}>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
    </Grid>
  );
};

export default Header;
