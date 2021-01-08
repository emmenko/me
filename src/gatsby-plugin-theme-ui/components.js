import { Themed } from 'theme-ui';
import { Box } from '@theme-ui/components';
import Code from '../components/code';

const StoryChapter = (props) => (
  <Box {...props} variant="typography.story.chapterTitle" />
);
const InlineCode = (props) => (
  <Themed.code
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
  </Themed.code>
);

export default {
  h1: Themed.h2,
  h2: Themed.h3,
  h3: Themed.h4,
  h4: Themed.h5,
  h5: Themed.h6,
  StoryChapter,
  pre: (props) => props.children,
  code: Code,
  inlineCode: InlineCode,
};
