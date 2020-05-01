import { graphql } from 'gatsby';
import StoriesPage from '../components/stories-page';

export default StoriesPage;

export const query = graphql`
  query($formatString: String!) {
    allStoryPage(sort: { fields: releaseDate, order: DESC }) {
      nodes {
        slug
        title
        releaseDate(formatString: $formatString)
        timeToRead
        description
        # tags {
        #   name
        #   slug
        # }
        banner {
          childImageSharp {
            fluid(maxWidth: 376, maxHeight: 376) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
