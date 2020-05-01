/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex } from '@theme-ui/components';
import Avatar from '../components/avatar';
import Layout from '../components/layout';
import Link from '../components/link';

const IndexPage = () => {
  return (
    <Layout alignContent="center" pageContext={{ breadcrumbs: [] }}>
      <Flex
        sx={{
          fontSize: 3,
          width: '100%',
          justifyContent: ['center', 'flex-start', 'flex-start'],
        }}
      >
        <Box>
          <Link to="/stories" variant="links.navigation">
            {'Stories'}
          </Link>
        </Box>
      </Flex>
      <Box
        sx={{
          marginY: [4, 5],
          fontFamily: 'home',
          border: '1px solid',
          borderColor: 'primary',
          backgroundColor: 'background',
          letterSpacing: '0.2rem',
          paddingY: 1,
          paddingX: 2,
          width: 'auto',
          alignItems: 'center',
        }}
      >
        {'Nicola Molinari'}
      </Box>
      <Flex sx={{ justifyContent: 'center', mb: [4, 5] }}>
        <Avatar />
      </Flex>
      <Box
        sx={{
          fontSize: [4, 5],
          fontFamily: 'home',
          lineHeight: 'heading',
          mb: [1, 2],
          textAlign: 'center',
        }}
      >
        {'Software Engineer'}
      </Box>
      <Box
        sx={{
          fontSize: [2, 3],
          fontFamily: 'home',
          lineHeight: 'heading',
          textAlign: 'center',
          color: 'secondary',
        }}
      >
        {'Technology enthusiast. I ❤️️ building things.'}
      </Box>
    </Layout>
  );
};

export default IndexPage;
