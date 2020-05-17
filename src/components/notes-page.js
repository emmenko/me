/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Flex, Box } from '@theme-ui/components';
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
    <Styled.h1>Notes</Styled.h1>
    <section sx={{ mb: [5, 6, 7] }}>
      {props.data.allNotePage.nodes.map((notePage) => (
        <Box mb={4}>
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              justifyContent: 'space-between',
              alignItems: ['flex-start', 'center'],
            }}
          >
            <Link to={notePage.slug}>{notePage.title}</Link>
            <Box
              as="time"
              sx={{
                color: 'secondary',
                fontSize: 1,
                minWidth: ['auto', '108px'],
                textAlign: ['left', 'right'],
              }}
            >
              {notePage.date}
            </Box>
          </Flex>
          <Box as="p">{notePage.excerpt}</Box>
          <Box
            sx={{
              color: `secondary`,
              mt: 3,
              a: { color: `secondary` },
              fontSize: [1, 1, 2],
            }}
          >
            {notePage.tags && (
              <Box sx={{ '> * + *': { ml: 3 } }}>
                {notePage.tags.map((tag) => (
                  <Link key={tag.name} to={tag.slug}>
                    {tag.name}
                  </Link>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </section>
    <Flex sx={{ justifyContent: 'center' }}>
      <Link to="/notes/tags">View all tags</Link>
    </Flex>
  </Layout>
);

export default NotesPage;
