/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box, Text } from '@theme-ui/components';
import kebabCase from 'lodash.kebabcase';
import Layout from './layout';
import SEO from './seo';
import Link from './link';

const NotesTagsPage = (props) => (
  <Layout pageContext={props.pageContext}>
    <SEO
      title={`All tags | Notes by Nicola Molinari`}
      description="All tags for the notes"
      pathname={props.path}
    />
    <Styled.h1>
      <Box
        sx={{
          display: ['block', 'flex'],
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <Text>Tags</Text>
        <Box sx={{ fontSize: 2 }}>
          <Link to="/notes">View all notes</Link>
        </Box>
      </Box>
    </Styled.h1>
    <section sx={{ mb: [5, 6, 7] }}>
      {props.data.allNotePage.group.map((group) => (
        <Box as="ul" mb={2}>
          <Box as="li">
            <Link
              to={`/notes/tags/${kebabCase(group.fieldValue)}`}
              variant="links.navigation"
            >
              {group.fieldValue}
            </Link>
            <Box as="span" sx={{ color: 'secondary', fontStyle: 1, ml: 2 }}>
              {`(${group.totalCount})`}
            </Box>
          </Box>
        </Box>
      ))}
    </section>
  </Layout>
);

export default NotesTagsPage;
