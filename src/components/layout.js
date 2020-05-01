/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Container, Flex } from '@theme-ui/components';
import SEO from './seo';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <SEO />
      <Container
        sx={{
          display: 'grid',
          width: '100vw',
          height: '100vh',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'auto 10fr 1fr',
          gridTemplateAreas: `'header' 'content' 'footer'`,
        }}
      >
        <Header pageContext={props.pageContext} />
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: props.alignContent || 'left',
          }}
        >
          {props.children}
        </Flex>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Layout;
