import styled from "styled-components";

export const MessageFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;

  & > form {
    width: 90%;
    margin: 1rem 0;

    & > textarea {
      width: 100%;
      /* height: 2rem; */
      padding: 0.5rem 0 0.5rem 2rem;
      display: flex;
      align-items: center;
      border-radius: 1rem;
      font-family: "Open Sans", sans-serif;
      font-size: 1rem;
      resize: none;
    }
  }
`

