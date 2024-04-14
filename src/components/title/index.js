"use client";

import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
  letter-spacing: -2px;
  text-align: center;
  margin: 20px 0;
  line-height: 51px;
`;

const Title = ({ children, className }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default Title;
