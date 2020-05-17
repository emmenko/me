/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Flex, Box, Text } from '@theme-ui/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';
import SEO from './seo';
import FeatureImage from './feature-image';

const NotePage = (props) => (
  <Layout pageContext={props.pageContext}>
    <SEO
      title={props.data.notePage.title}
      templateTitle="Note by Nicola Molinari"
      description={props.data.notePage.description}
      pathname={props.path}
      image={
        props.data.notePage.featureImage
          ? props.data.notePage.featureImage.image.childImageSharp.fluid.src
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
    <FeatureImage {...props.data.notePage.featureImage} />
    <Box as="section">
      <MDXRenderer>{props.data.notePage.body}</MDXRenderer>
    </Box>
  </Layout>
);

export default NotePage;
