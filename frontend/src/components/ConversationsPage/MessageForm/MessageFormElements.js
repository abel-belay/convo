import styled from "styled-components";

export const MessageFormWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background-color: #f8f8f8;

  & > form {
    width: 90%;
    margin: 1rem 0;
    display: flex;
    align-items: flex-end;

    & > textarea {
      flex-grow: 1;
      padding: 0.5rem 1.5rem;
      display: flex;
      align-items: center;
      border-radius: 1rem;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      line-height: 1.3rem;
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
        background-color: #43cc47;
      }
    }
  }
`;
