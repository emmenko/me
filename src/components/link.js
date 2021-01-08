import { Link as GatsbyLink } from 'gatsby';
import { Link as HTMLLink } from '@theme-ui/components';

const Link = (props) => <HTMLLink as={GatsbyLink} {...props} />;

export default Link;
