/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box } from '@theme-ui/components';
import DraftBadge from './draft-badge';

const PageHeading = (props) => (
  <Box sx={{ mb: 4 }}>
    {props.isDraft && <DraftBadge />}
    <Styled.h1>{props.title}</Styled.h1>
    <Box
      sx={{
        fontSize: 1,
        fontStyle: 'italic',
        color: `secondary`,
        a: { color: `secondary` },
        mb: 3,
      }}
    >
      {props.children}
    </Box>
  </Box>
);

export default PageHeading;
