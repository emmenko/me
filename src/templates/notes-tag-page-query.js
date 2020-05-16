import { graphql } from 'gatsby';
import NotesTagPage from '../components/notes-tag-page';

export default NotesTagPage;

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    allNotePage(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
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
