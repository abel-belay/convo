import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    color: #10c500;
    font-family: "Pacifico", cursive;
    font-size: 5rem;
  }

  & > h2 {
    margin-top: 1rem;
    color: #686868;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
  }
`;
