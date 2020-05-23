/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box } from '@theme-ui/components';
import Code from '../components/code';

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
  h1: Styled.h2,
  h2: Styled.h3,
  h3: Styled.h4,
  h4: Styled.h5,
  h5: Styled.h6,
  StoryChapter,
  pre: (props) => props.children,
  code: Code,
  inlineCode: InlineCode,
};
