import { graphql } from 'gatsby';
import NotesTagsPage from '../components/notes-tags-page';

export default NotesTagsPage;

export const query = graphql`
  query {
    allNotePage(sort: { fields: tags___name, order: DESC }) {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
  }
`;
