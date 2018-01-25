import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import EmmenkoSvg from "../svg/emmenko";

const RoundedImage = styled.div`
  border: 1px solid #4f4f4f;
  border-radius: 50%;
  display: block;
  width: 200px;
  height: 200px;
  overflow: hidden;

  > svg.scale:not(:root) {
    width: 100%;
    height: auto;
  }
`;

const Avatar = () => (
  <RoundedImage>
    <EmmenkoSvg width="200" height="200" />
  </RoundedImage>
);
Avatar.displayName = "Avatar";

export default Avatar;
