/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex } from '@theme-ui/components';
import Avatar from '../components/avatar';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          mb: [4, 5],
          fontFamily: 'heading',
          border: '1px solid',
          borderColor: 'primary',
          backgroundColor: 'background',
          letterSpacing: '0.2rem',
          paddingY: 1,
          paddingX: 2,
          width: 'auto',
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
          fontFamily: 'heading',
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
          fontFamily: 'heading',
          lineHeight: 'heading',
          textAlign: 'center',
        }}
      >
        {'Technology enthusiast. I ❤️️ building things.'}
      </Box>
    </Layout>
  );
};

export default IndexPage;
