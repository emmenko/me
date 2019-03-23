import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New';
`;
const EmojiBig = styled.div`
  font-size: 3rem;
`;

const PageNotFound = () => (
  <Container>
    <h1>{'Page not found'}</h1>
    <EmojiBig role="img" aria-label="Emoji hand halt open eyes">
      🖐 👀
    </EmojiBig>
    <p>
      {'Go back to the '}
      <a href="/" title="Homepage">
        {'Homepage'}
      </a>
      {'.'}
    </p>
  </Container>
);
PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
