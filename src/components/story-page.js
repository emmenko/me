import { Box, Flex, Text, Link as HTMLLink } from '@theme-ui/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { getSrc } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';
import PageHeading from './page-heading';
import FeatureImage from './feature-image';
import BackToTop from './back-to-top';

const StoryPage = (props) => (
  <Layout pageContext={props.pageContext}>
    <SEO
      title={props.data.storyPage.title}
      templateTitle="A short story by Nicola Molinari"
      description={props.data.storyPage.description}
      pathname={props.path}
      image={getSrc(props.data.storyPage.featureImage.image)}
    />
    <PageHeading
      isDraft={props.data.storyPage.isDraft}
      title={props.data.storyPage.title}
      slug={props.data.storyPage.slug}
      listenToLabel="Listen to this story"
    >
      <Text as="time">{`Published on ${props.data.storyPage.releaseDate}`}</Text>
      <Text as="p">{`About ${props.data.storyPage.timeToRead} min read`}</Text>
    </PageHeading>
    {props.data.storyPage.epub || props.data.storyPage.pdf ? (
      <Box
        as="p"
        sx={{
          mb: [4],
        }}
      >
        {'You can also download the story as '}
        {props.data.storyPage.epub && (
          <HTMLLink href={props.data.storyPage.epub.publicURL}>
            &#x2913; EPUB
          </HTMLLink>
        )}
        {props.data.storyPage.pdf && (
          <>
            {props.data.storyPage.epub ? ' and ' : null}
            <HTMLLink href={props.data.storyPage.pdf.publicURL}>
              &#x2913; PDF
            </HTMLLink>
          </>
        )}
      </Box>
    ) : null}
    <FeatureImage {...props.data.storyPage.featureImage} />
    <Box as="section" variant="typography.story">
      <MDXRenderer>{props.data.storyPage.body}</MDXRenderer>
    </Box>
    <Flex sx={{ justifyContent: 'flex-end' }}>
      <BackToTop />
    </Flex>
  </Layout>
);

export default StoryPage;
