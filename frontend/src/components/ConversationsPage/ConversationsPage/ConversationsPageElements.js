import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #e6e6e6;
  font-family: "Inter", sans-serif;
  overflow-y: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const SidebarWrapper = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
  }
`;

export const MainWrapper = styled.div`
  height: 100%;
  width: 67%;
  display: flex;
  flex-direction: column;
  background-color: #E6E6E6;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
