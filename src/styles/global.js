import { injectGlobal } from "styled-components";
import colors from './colors'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    color: ${colors.text};
    background-color: ${colors.bkg};
  }
`;
