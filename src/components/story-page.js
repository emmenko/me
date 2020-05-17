/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box, Flex, Text, Link as HTMLLink } from '@theme-ui/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';
import SEO from './seo';
import FeatureImage from './feature-image';

const StoryPage = (props) => (
  <Layout pageContext={props.pageContext}>
    <SEO
      title={props.data.storyPage.title}
      templateTitle="A short story by Nicola Molinari"
      description={props.data.storyPage.description}
      pathname={props.path}
      image={props.data.storyPage.featureImage.image.childImageSharp.fluid.src}
    />
    <Box sx={{ mb: 2 }}>
      <Styled.h1>{props.data.storyPage.title}</Styled.h1>
      {props.data.storyPage.epub || props.data.storyPage.pdf ? (
        <Flex
          sx={{
            justifyContent: 'space-around',
            mb: [3],
          }}
        >
          {props.data.storyPage.epub && (
            <HTMLLink href={props.data.storyPage.epub.publicURL}>
              &#x2913; EPUB
            </HTMLLink>
          )}
          {props.data.storyPage.pdf && (
            <HTMLLink href={props.data.storyPage.pdf.publicURL}>
              &#x2913; PDF
            </HTMLLink>
          )}
        </Flex>
      ) : null}
      <Flex
        sx={{
          justifyContent: 'space-between',
          color: 'secondary',
          fontSize: 1,
        }}
      >
        <Text as="p">{`Published on ${props.data.storyPage.releaseDate}`}</Text>
        <Text as="p">{`${props.data.storyPage.timeToRead} min read`}</Text>
      </Flex>
    </Box>
    <FeatureImage {...props.data.storyPage.featureImage} />
    <Box as="section" variant="typography.story">
      <MDXRenderer>{props.data.storyPage.body}</MDXRenderer>
    </Box>
    <Flex sx={{ justifyContent: 'flex-end' }}>
      <HTMLLink href="#anchor-header" variant="links.navigation">
        &#8682; {'Back to top'}
      </HTMLLink>
    </Flex>
  </Layout>
);

export default StoryPage;
