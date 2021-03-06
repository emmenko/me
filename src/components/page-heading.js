import { Box, Heading, Flex, Text } from '@theme-ui/components';
import DraftBadge from './draft-badge';
import AudioSvg from './svg/audio';

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
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'flex-start',
        }}
      >
        <Box>{props.children}</Box>
        <Box>
          <Flex
            as="a"
            variant="links.icons"
            href={props.slug}
            rel="noopener noreferrer"
            target="blank"
            data-readmoapp
          >
            <AudioSvg width={24} height={24} />
            <Text
              as="span"
              variant="links.primary"
              sx={{ ml: 1, fontStyle: 'normal', fontWeight: 'normal' }}
            >
              {props.listenToLabel}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default PageHeading;
