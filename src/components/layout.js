import { Container, Flex } from '@theme-ui/components';
import SEO from './seo';
import Header from './header';
import Footer from './footer';

const Layout = (props) => (
  <>
    <SEO />
    <Container
      sx={{
        display: 'grid',
        width: '100vw',
        height: '100vh',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateAreas: `'header' 'content' 'footer'`,
      }}
    >
      <Header pageContext={props.pageContext} />
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: props.alignContent || 'left',
          paddingX: [3, 4, 0],
          mb: [4, 5],
        }}
      >
        {props.children}
      </Flex>
      <Footer />
    </Container>
  </>
);

export default Layout;
