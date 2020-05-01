import { graphql } from 'gatsby';
import StoryPage from '../components/story-page';

export default StoryPage;

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    storyPage(slug: { eq: $slug }) {
      slug
      title
      releaseDate(formatString: $formatString)
      # tags {
      #   name
      #   slug
      # }
      description
      body
      timeToRead
      banner {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
