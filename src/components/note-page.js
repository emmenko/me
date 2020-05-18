/** @jsx jsx */
import React from 'react';
import { jsx, Styled } from 'theme-ui';
import { Box, Text } from '@theme-ui/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';
import SEO from './seo';
import Link from './link';
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
      <Box
        sx={{
          fontSize: 1,
          fontStyle: 'italic',
          color: `secondary`,
          a: { color: `secondary` },
          mb: 3,
        }}
      >
        <time>{props.data.notePage.date}</time>
        <span>{' in '}</span>
        {props.data.notePage.tags.map((tag, index) => {
          const isLast = index === props.data.notePage.tags.length - 1;
          const separator = <Box as="span">{', '}</Box>;
          const linkTag = (
            <Link key={tag.name} to={tag.slug}>
              {tag.name}
            </Link>
          );

          if (isLast) {
            return linkTag;
          }
          return (
            <React.Fragment>
              {linkTag}
              {separator}
            </React.Fragment>
          );
        })}
        <Text as="span">
          {' '}
          &mdash; {` About ${props.data.notePage.timeToRead} min read`}
        </Text>
      </Box>
    </Box>
    <FeatureImage {...props.data.notePage.featureImage} />
    <Box as="section">
      <MDXRenderer>{props.data.notePage.body}</MDXRenderer>
    </Box>
  </Layout>
);

export default NotePage;
