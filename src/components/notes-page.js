/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Flex, Box, Text } from '@theme-ui/components';
import Layout from './layout';
import Link from './link';
import SEO from './seo';

const NotesPage = (props) => (
  <Layout pageContext={props.pageContext}>
    <SEO
      title="Notes by Nicola Molinari"
      description="A collections of notes, mostly about technical topics."
      pathname={props.path}
    />
    <Styled.h1>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Text>Notes</Text>
        <Box sx={{ fontSize: 2 }}>
          <Link to="/notes/tags">View all tags</Link>
        </Box>
      </Flex>
    </Styled.h1>
    <section sx={{ mb: [5, 6, 7] }}>
      {props.data.allNotePage.nodes.map((notePage) => (
        <Box mb={4}>
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

export default NotesPage;
