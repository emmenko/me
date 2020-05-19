/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from '@theme-ui/components';
import kebabCase from 'lodash.kebabcase';
import Layout from './layout';
import SEO from './seo';
import Link from './link';
import PageListHeading from './page-list-heading';

const NotesTagsPage = (props) => (
  <Layout pageContext={props.pageContext}>
    <SEO
      title={`All tags | Notes by Nicola Molinari`}
      description="All tags for the notes"
      pathname={props.path}
    />
    <PageListHeading
      title="Tags"
      sideElement={<Link to="/notes">View all notes</Link>}
    />
    <section sx={{ mb: [5, 6, 7] }}>
      <Box as="ul" mb={2}>
        {props.data.allNotePage.group.map((group) => (
          <Box as="li" key={group.fieldValue}>
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
        ))}
      </Box>
    </section>
  </Layout>
);

export default NotesTagsPage;
