"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Page = styled.div`
  max-width: var(--max-width);
  box-sizing: border-box;
  padding: 0 30px;
  width: 100%;
`;

function PageWrapper({ children }) {
  return (
    <Wrapper>
      <Page>{children}</Page>
    </Wrapper>
  );
}

export default PageWrapper;
