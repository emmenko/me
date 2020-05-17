/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Flex, Box, Text } from '@theme-ui/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import GatsbyImage from 'gatsby-image';
import Layout from './layout';
import SEO from './seo';

const NotePage = (props) => (console.log(props),
  <Layout pageContext={props.pageContext}>
    <SEO
      title={props.data.notePage.title}
      templateTitle="Note by Nicola Molinari"
      description={props.data.notePage.description}
      pathname={props.path}
      image={
        props.data.notePage.featuredImage
          ? props.data.notePage.featuredImage.childImageSharp.fluid.src
          : undefined
      }
    />
    <Box sx={{ mb: 2 }}>
      <Styled.h1>{props.data.notePage.title}</Styled.h1>
      <Flex
        sx={{
          justifyContent: 'space-between',
          color: 'secondary',
          fontSize: 1,
        }}
      >
        <Text as="p">{`Published on ${props.data.notePage.date}`}</Text>
        <Text as="p">{`${props.data.notePage.timeToRead} min read`}</Text>
      </Flex>
    </Box>
    {props.data.notePage.featuredImage && (
      <Box sx={{ mb: [3, 4] }}>
        <GatsbyImage fluid={props.data.notePage.featuredImage.childImageSharp.fluid} />
      </Box>
    )}
    <Box as="section">
      <MDXRenderer>{props.data.notePage.body}</MDXRenderer>
    </Box>
  </Layout>
);

export default NotePage;
