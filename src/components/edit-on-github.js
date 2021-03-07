import { Link as HTMLLink } from '@theme-ui/components';

const EditOnGithub = (props) => (
  <HTMLLink
    href={props.url}
    rel="noopener noreferrer"
    target="blank"
    variant="links.navigation"
  >
    &#9998; {'Edit on GitHub'}
  </HTMLLink>
);

export default EditOnGithub;
