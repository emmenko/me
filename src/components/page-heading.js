import { Box, Heading, Flex, Text } from '@theme-ui/components';
import { isBrowserSupported } from '@readmo/sdk';
import DraftBadge from './draft-badge';
import EditOnGithub from './edit-on-github';
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
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: ['block', 'flex'],
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'flex-start',
        }}
      >
        <Box sx={{ color: `secondary`, a: { color: `secondary` }, mb: [2, 0] }}>
          {props.children}
        </Box>
        <Box
          sx={{
            display: ['block', 'flex'],
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          {isBrowserSupported() && (
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
          )}
          <Box>
            <EditOnGithub url={props.editUrl} />
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default PageHeading;
