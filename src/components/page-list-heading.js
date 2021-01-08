import { Box, Heading } from '@theme-ui/components';

const PageListHeading = (props) => (
  <Box
    sx={{
      display: ['block', 'flex'],
      justifyContent: 'space-between',
      alignItems: 'baseline',
      mb: 4,
    }}
  >
    <Heading as="h1" variant="headings.page">
      {props.title}
    </Heading>
    <Box sx={{ fontSize: 2 }}>{props.sideElement}</Box>
  </Box>
);

export default PageListHeading;
