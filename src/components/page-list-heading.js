/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box } from '@theme-ui/components';

const PageListHeading = (props) => (
  <Box
    sx={{
      display: ['block', 'flex'],
      justifyContent: 'space-between',
      alignItems: 'baseline',
      mb: 4,
    }}
  >
    <Styled.h1>{props.title}</Styled.h1>
    <Box sx={{ fontSize: 2 }}>{props.sideElement}</Box>
  </Box>
);

export default PageListHeading;
