import { Box } from '@theme-ui/components';
import EmmenkoSvg from './svg/emmenko';

const Avatar = ({ size = 200 }) => (
  <Box
    sx={{
      border: '1px solid',
      borderColor: 'text',
      borderRadius: '50%',
      display: 'block',
      width: `${size}px`,
      height: `${size}px`,
      overflow: 'hidden',
      '> svg.scale:not(:root)': {
        width: '100%',
        height: 'auto',
      },
    }}
  >
    <EmmenkoSvg width={size} height={size} />
  </Box>
);

export default Avatar;
