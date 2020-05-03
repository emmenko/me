/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Flex, Box, Grid, Text } from '@theme-ui/components';
import GatsbyImage from 'gatsby-image';
import Layout from './layout';
import Link from './link';
import SEO from './seo';

const StoriesPage = (props) => {
  return (
    <Layout pageContext={props.pageContext}>
      <SEO
        title="Short stories by Nicola Molinari"
        description="A collections of short stories"
        pathname={props.path}
      />
      <Styled.h1>Stories</Styled.h1>
      <Grid as="section" gap={[5]} columns={[1]}>
        {props.data.allStoryPage.nodes.map((story) => (
          <Grid gap={[3]} columns={[1, 2]} key={story.slug}>
            <Box sx={{ padding: [null, 2, 4] }}>
              <GatsbyImage fluid={story.banner.childImageSharp.fluid} />
            </Box>
            <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Link to={story.slug} variant="links.navigation">
                <Text
                  as="h2"
                  sx={{
                    fontSize: 5,
                    fontWeight: 'semibold',
                    lineHeight: 'heading',
                    mb: [2],
                  }}
                >
                  {story.title}
                </Text>
              </Link>
              <Text
                as="p"
                sx={{
                  color: 'secondary',
                  fontSize: 1,
                }}
              >{`Published on: ${story.releaseDate}`}</Text>
              <Text
                as="p"
                sx={{ fontSize: 3, fontStyle: 'italic', mt: [3, 4] }}
              >
                {story.description}
              </Text>
            </Flex>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default StoriesPage;