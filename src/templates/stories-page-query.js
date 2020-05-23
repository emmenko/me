import { graphql } from 'gatsby';
import StoriesPage from '../components/stories-page';

export default StoriesPage;

export const query = graphql`
  query($formatString: String!) {
    allStoryPage(sort: { fields: releaseDate, order: DESC }) {
      nodes {
        isDraft
        slug
        title
        description
        releaseDate(formatString: $formatString)
        timeToRead
        featureImage {
          image {
            childImageSharp {
              fluid(maxWidth: 376, maxHeight: 376) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author
          authorUrl
        }
      }
    }
  }
`;
