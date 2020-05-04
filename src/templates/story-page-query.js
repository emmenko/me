import { graphql } from 'gatsby';
import StoryPage from '../components/story-page';

export default StoryPage;

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    storyPage(slug: { eq: $slug }) {
      slug
      title
      description
      releaseDate(formatString: $formatString)
      body
      timeToRead
      cover {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coverCredits {
        childMdx {
          body
        }
      }
      epub {
        publicURL
      }
      pdf {
        publicURL
      }
    }
  }
`;
