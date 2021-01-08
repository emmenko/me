import { Box, Link } from '@theme-ui/components';
import Layout from '../components/layout';

const PageNotFound = () => (
  <Layout alignContent="center" pageContext={{ breadcrumbs: [] }}>
    <Box as="h1" sx={{ fontFamily: 'heading' }}>
      {'Page not found'}
    </Box>
    <Box sx={{ fontSize: 8 }}>
      <span role="img" aria-label="Emoji hand halt open eyes">
        🖐 👀
      </span>
    </Box>
    <Box as="p">
      {'Back to the '}
      <Link href="/" title="Homepage">
        {'Homepage'}
      </Link>
      {'.'}
    </Box>
  </Layout>
);
PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
