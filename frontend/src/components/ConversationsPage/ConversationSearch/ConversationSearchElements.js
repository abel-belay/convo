import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;

  & > form {
    width: 93%;
    margin: 1rem 0;

    & > input {
      width: 100%;
      height: 2rem;
      padding-left: 2rem;
      border: 1px solid #767676;
      border-radius: 1rem;
      font-size: 1rem;
    }
  }
`;
