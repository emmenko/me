/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box, Link as HTMLLink } from '@theme-ui/components';
import GatsbyImage from 'gatsby-image';

const FeatureImage = (props) => (
  <Box sx={{ mb: [3, 4] }}>
    <GatsbyImage fluid={props.image.childImageSharp.fluid} />
    <Box
      sx={{
        p: { m: 0, color: 'secondary', fontSize: 1, textAlign: 'center' },
      }}
    >
      <Styled.p>
        {'Photo by '}
        <HTMLLink href={props.authorUrl}>{props.author}</HTMLLink>
      </Styled.p>
    </Box>
  </Box>
);

export default FeatureImage;
