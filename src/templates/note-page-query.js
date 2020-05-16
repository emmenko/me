import { graphql } from 'gatsby';
import NotePage from '../components/note-page';

export default NotePage;

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    notePage(slug: { eq: $slug }) {
      slug
      title
      date(formatString: $formatString)
      tags {
        name
        slug
      }
      description
      body
      excerpt
      timeToRead
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`;
