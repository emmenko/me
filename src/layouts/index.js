import React from "react";
import Helmet from "react-helmet";
import "../styles/global";
import config from "../site-config";

const Template = props => (
  <main>
    <Helmet>
      <html lang="en" amp />
      <title>{config.siteTitle}</title>
    </Helmet>
    {props.children()}
  </main>
);

export default Template;
