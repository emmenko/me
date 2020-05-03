/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box, Flex, Text, Link as HTMLLink } from '@theme-ui/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import GatsbyImage from 'gatsby-image';
import Layout from './layout';
import SEO from './seo';

const StoryPage = (props) => {
  return (
    <Layout pageContext={props.pageContext}>
      <SEO
        title={props.data.storyPage.title}
        templateTitle="A short story by Nicola Molinari"
        description={props.data.storyPage.description}
        pathname={props.path}
        image={props.data.storyPage.banner.childImageSharp.fluid.src}
      />
      <Box sx={{ mb: 2 }}>
        <Styled.h1 sx={{ textAlign: 'center' }}>
          {props.data.storyPage.title}
        </Styled.h1>
        <Flex
          sx={{
            justifyContent: 'space-between',
            color: 'secondary',
            fontSize: 1,
          }}
        >
          <Text as="p">{`Released on: ${props.data.storyPage.releaseDate}`}</Text>
          <Text as="p">{`Avg. read: ${props.data.storyPage.timeToRead}min`}</Text>
        </Flex>
      </Box>
      <Box sx={{ mb: [3, 4] }}>
        <GatsbyImage
          fluid={props.data.storyPage.banner.childImageSharp.fluid}
        />
      </Box>
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
};

export default StoryPage;
