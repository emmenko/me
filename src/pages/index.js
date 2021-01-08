import { Box, Flex } from '@theme-ui/components';
import Avatar from '../components/avatar';
import Layout from '../components/layout';
import Link from '../components/link';

const IndexPage = () => {
  return (
    <Layout alignContent="center" pageContext={{ breadcrumbs: [] }}>
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
        {'Technology enthusiast. I '}
        <Box
          as="span"
          sx={{
            color: 'primary',
            cursor: 'default',
            ':hover': { color: 'accent' },
          }}
        >
          &#10084;
        </Box>
        {' building things.'}
      </Box>
      <Flex
        sx={{
          flexDirection: 'column',
          fontSize: 3,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          mt: [4, 5],
        }}
      >
        <Box>
          {'In my '}
          <Link to="/notes" variant="links.navigation">
            {'Notes'}
          </Link>
          {' I write about tech stuff.'}
        </Box>
        <Box>
          {'I also write short '}
          <Link to="/stories" variant="links.navigation">
            {'Stories'}
          </Link>
          {'.'}
        </Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
