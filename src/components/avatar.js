/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from '@theme-ui/components';
import EmmenkoSvg from './svg/emmenko';

const Avatar = () => (
  <Box
    sx={{
      border: '1px solid',
      borderColor: 'text',
      borderRadius: '50%',
      display: 'block',
      width: '200px',
      height: '200px',
      overflow: 'hidden',
      '> svg.scale:not(:root)': {
        width: '100%',
        height: 'auto',
      },
    }}
  >
    <EmmenkoSvg width="200" height="200" />
  </Box>
);
Avatar.displayName = 'Avatar';

export default Avatar;
