/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Text } from '@theme-ui/components';

const DraftBadge = () => (
  <Flex>
    <Text as="span" variant="badges.draft">
      {'This is a draft'}
    </Text>
  </Flex>
);

export default DraftBadge;
