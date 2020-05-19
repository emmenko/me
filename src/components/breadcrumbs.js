/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Text, Flex } from '@theme-ui/components';
import Link from './link';

const toWord = (str) => str.replace(/-/g, ' ');

const Breadcrumbs = (props) => {
  return (
    <Flex
      as="nav"
      sx={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        '> * + *': { ml: [2, 3] },
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        {props.crumbs.length > 0 ? (
          <Link to="/" aria-label="To homepage" variant="links.navigation">
            {'/ me'}
          </Link>
        ) : (
          <Text as="span">{'/ me'}</Text>
        )}
      </Box>
      {props.crumbs.map((crumb, index) => {
        const label = toWord(crumb);
        const isFirst = index === 0;
        const isLast = index === props.crumbs.length - 1;
        const separator = (
          <Box as="span" sx={{ mr: 1, ml: [1, 2], color: 'secondary' }}>
            {'/'}
          </Box>
        );
        if (isLast) {
          return (
            <Flex key={crumb}>
              {separator}
              <Text as="span" sx={{ fontStyle: 'italic' }}>
                {label}
              </Text>
            </Flex>
          );
        }
        const partialSlug = props.crumbs.filter((_, i) => i <= index).join('/');
        return (
          <Flex key={crumb} sx={{ flexShrink: isFirst ? 0 : undefined }}>
            {separator}
            <Box>
              <Link
                to={`/${partialSlug}`}
                aria-label={label}
                variant="links.navigation"
              >
                {label}
              </Link>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Breadcrumbs;
