/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex } from '@theme-ui/components';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = (props) => {
  return (
    <Container
      sx={{
        display: 'grid',
        width: '100vw',
        height: '100vh',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 10fr 1fr',
        gridTemplateAreas: `'header' 'content' 'footer'`,
      }}
    >
      <Header />
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: [3, 4, 5],
          paddingX: [3, 4, 0],
        }}
      >
        {props.children}
      </Flex>
      <Footer />
    </Container>
  );
};

export default Layout;
