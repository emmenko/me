import { graphql } from 'gatsby';
import NotePage from '../components/note-page';

export default NotePage;

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    notePage(slug: { eq: $slug }) {
      isDraft
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
      featureImage {
        image {
          childImageSharp {
            gatsbyImageData(width: 768, layout: CONSTRAINED)
          }
        }
        author
        authorUrl
      }
      editUrl
    }
  }
`;
