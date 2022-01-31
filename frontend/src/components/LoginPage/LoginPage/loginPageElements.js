import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfcfb;

  @media (min-width: 500px) {
    padding-top: 0;
    justify-content: center;
  }
`;