"use client";

import styled from "styled-components";

const StyledText = styled.p`
  font-family: var(--font-jakarta);
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -1px;
  word-spacing: 3px;
`;

const Text = ({ children, className }) => {
  return <StyledText className={className}>{children}</StyledText>;
};

export default Text;
