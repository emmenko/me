/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Text, Link as HTMLLink } from '@theme-ui/components';
import Layout from './layout';
import SEO from './seo';
import Link from './link';
import PageListHeading from './page-list-heading';
import DraftBadge from './draft-badge';

const NotesPage = (props) => (
  <Layout pageContext={props.pageContext}>
    <SEO
      title="Notes by Nicola Molinari"
      description="A collections of notes, mostly about technical topics."
      pathname={props.path}
    />
    <PageListHeading
      title="Notes"
      sideElement={<Link to="/notes/tags">View all tags</Link>}
    />
    <Box as="p" sx={{ mb: [5] }}>
      <Text as="span">{'You can find other of my articles on '}</Text>
      <HTMLLink href="https://medium.com/@emmenko">Medium</HTMLLink>
    </Box>
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
            {notePage.description}
          </Box>
        </Box>
      ))}
    </section>
  </Layout>
);

export default NotesPage;
