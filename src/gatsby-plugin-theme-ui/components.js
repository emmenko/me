/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box, Heading } from '@theme-ui/components';
import Code from '../components/code';

const H1asH2 = (props) => <Heading {...props} as="h2" />;
const H2asH3 = (props) => <Heading {...props} as="h3" />;
const H3asH4 = (props) => <Heading {...props} as="h4" />;
const H4asH5 = (props) => <Heading {...props} as="h5" />;
const H5asH6 = (props) => <Heading {...props} as="h6" />;
const StoryChapter = (props) => (
  <Box {...props} variant="typography.story.chapterTitle" />
);
const InlineCode = (props) => (
  <Styled.code
    sx={{
      backgroundColor: 'muted',
      borderRadius: '2px',
      color: 'code',
      fontFamily: 'monospace',
      fontSize: 1,
      paddingY: '2px',
      paddingX: 1,
    }}
  >
    {props.children}
  </Styled.code>
);

export default {
  h1: H1asH2,
  h2: H2asH3,
  h3: H3asH4,
  h4: H4asH5,
  h5: H5asH6,
  StoryChapter,
  pre: (props) => props.children,
  code: Code,
  inlineCode: InlineCode,
};
