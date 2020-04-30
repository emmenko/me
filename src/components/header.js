/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { Flex, Box, Link } from '@theme-ui/components';
import ColorModeToggle from './colormode-toggle';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (event) => {
    event.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box as="header" sx={{ paddingX: [3, 4, 0], paddingY: [2] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Link to="/" aria-label="To homepage">
          {'/'}
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
    </Box>
  );
};

export default Header;
