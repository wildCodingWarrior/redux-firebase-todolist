import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { styled } from "styled-components";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = ({ children }) => {
  return (
    <PageLayout>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ContentLayout>{children}</ContentLayout>
      </QueryClientProvider>
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
