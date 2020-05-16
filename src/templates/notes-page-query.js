import { graphql } from 'gatsby';
import NotesPage from '../components/notes-page';

export default NotesPage;

export const query = graphql`
  query($formatString: String!) {
    allNotePage(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`;
