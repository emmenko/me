import { Box, Text } from '@theme-ui/components';
import Layout from './layout';
import SEO from './seo';
import Link from './link';
import DraftBadge from './draft-badge';
import PageListHeading from './page-list-heading';

const NotesTagPage = (props) => (
  <Layout pageContext={props.pageContext}>
    <SEO
      title={`${props.pageContext.name} | Notes by Nicola Molinari`}
      description={`All notes for the tag ${props.pageContext.name}`}
      pathname={props.path}
    />
    <PageListHeading
      title={`Notes: ${props.pageContext.name}`}
      sideElement={<Link to="/notes/tags">View all tags</Link>}
    />
    <section sx={{ mb: [5, 6, 7] }}>
      {props.data.allNotePage.nodes.map((notePage) => (
        <Box mb={4} key={notePage.slug}>
          {notePage.isDraft && <DraftBadge />}
          <Box>
            <Link to={notePage.slug} variant="links.navigation">
              <Text
                as="h2"
                sx={{
                  fontSize: 5,
                  fontWeight: 'semibold',
                  lineHeight: 'heading',
                  mb: [1, 2],
                }}
              >
                {notePage.title}
              </Text>
            </Link>
          </Box>
          <Box sx={{ color: 'secondary', fontStyle: 1 }}>
            <time>{notePage.date}</time>
          </Box>
          <Box as="p" sx={{ mt: 3 }}>
            {notePage.excerpt}
          </Box>
        </Box>
      ))}
    </section>
  </Layout>
);

export default NotesTagPage;
