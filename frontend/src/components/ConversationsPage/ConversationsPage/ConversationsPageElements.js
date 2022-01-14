import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e6e6e6;
  font-family: "Inter", sans-serif;
  overflow-y: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const SidebarWrapper = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainWrapper = styled.div`
  height: 100%;
  width: 67%;
  display: flex;
  flex-direction: column;
  background-color: #E6E6E6;
`;
