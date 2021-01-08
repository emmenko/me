import { Box, Heading } from '@theme-ui/components';
import DraftBadge from './draft-badge';

const PageHeading = (props) => (
  <Box sx={{ mb: 4 }}>
    {props.isDraft && <DraftBadge />}
    <Heading as="h1" variant="headings.page">
      {props.title}
    </Heading>
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
