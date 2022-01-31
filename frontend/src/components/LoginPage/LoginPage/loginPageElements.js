import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfcfb;

  @media (min-width: 500px) {
    padding-top: 0;
    justify-content: center;
  }
`;