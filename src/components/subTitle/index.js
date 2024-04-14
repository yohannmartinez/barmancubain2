"use client";

import styled from "styled-components";

const Container = styled.div`
  background-color: var(--colors-secondary);
  width: fit-content;
  color: var(--colors-primary);
  font-weight: 400;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 50px;
  letter-spacing: -0.5px;
`;

const SubTitle = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SubTitle;
