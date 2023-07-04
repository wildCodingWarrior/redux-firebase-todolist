import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  return (
    <PageLayout>
      <GlobalStyle />
      <ContentLayout>{children}</ContentLayout>
    </PageLayout>
  );
};

export default Layout;

const PageLayout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1200px;
  min-width: 800px;
`;
