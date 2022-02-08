import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;

  & #back-button {
    margin-right: 1rem;
    cursor: pointer;

    @media (min-width: 769px) {
      display: none;
    }
  }
`