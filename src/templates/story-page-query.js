import { graphql } from 'gatsby';
import StoryPage from '../components/story-page';

export default StoryPage;

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    storyPage(slug: { eq: $slug }) {
      isDraft
      slug
      title
      description
      releaseDate(formatString: $formatString)
      body
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
      epub {
        publicURL
      }
      pdf {
        publicURL
      }
      editUrl
    }
  }
`;
