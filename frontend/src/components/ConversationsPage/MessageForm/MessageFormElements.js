import styled from "styled-components";

export const MessageFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;

  & > form {
    width: 90%;
    margin: 1rem 0;
    display: flex;
    align-items: flex-end;

    & > textarea {
      flex-grow: 1;
      padding: 0.5rem 0 0.5rem 2rem;
      display: flex;
      align-items: center;
      border-radius: 1rem;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      resize: none;
    }

    & > button {
      width: 2.4rem;
      height: 2.4rem;
      margin-left: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1982fc;
      border: none;
      border-radius: 1rem;
      color: white;
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        background-color: #43CC47;
      }
    }
  }
`;
