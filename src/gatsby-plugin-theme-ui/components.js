import React from 'react';
import { Heading } from '@theme-ui/components';

const H1asH2 = (props) => <Heading {...props} as="h2" />;
const H2asH3 = (props) => <Heading {...props} as="h3" />;
const H3asH4 = (props) => <Heading {...props} as="h4" />;
const H4asH5 = (props) => <Heading {...props} as="h5" />;
const H5asH6 = (props) => <Heading {...props} as="h6" />;

export default {
  h1: H1asH2,
  h2: H2asH3,
  h3: H3asH4,
  h4: H4asH5,
  h5: H5asH6,
};
