import { useColorMode } from 'theme-ui';
import { Box, Flex } from '@theme-ui/components';
import GithubSvg from './svg/github';
import TwitterSvg from './svg/twitter';
import ColorModeToggle from './colormode-toggle';
import Breadcrumbs from './breadcrumbs';

const Header = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (event) => {
    event.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box id="top" as="header" sx={{ paddingY: 3, paddingX: [3, 4, 0] }}>
      <Flex
        sx={{
          flexDirection: ['column-reverse', 'row'],
          justifyContent: ['center', 'space-between'],
          alignItems: ['center'],
        }}
      >
        <Breadcrumbs crumbs={props.pageContext.breadcrumbs} />
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            mb: [3, 0, 0],
            '> * + *': {
              ml: [2],
            },
          }}
        >
          <div>
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
          </div>
          <div>
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
          </div>
          <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
