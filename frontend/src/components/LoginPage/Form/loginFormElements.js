import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  max-width: 450px;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  & > input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    display: block;
    background-color: #fbfcfb;
    border: 2px solid #bebebe;
    border-radius: 0.75rem;
    font-size: 1.1rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  background-color: #10c500;
  border: none;
  border-radius: 0.75rem;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.1rem;
`;

export const HR = styled.hr`
  width: 100%;
  margin: 0;
  border-top: 1px solid #bebebe;
`;

export const DemoButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  & > button {
    width: 47.5%;
    padding: 0.8rem;
    background-color: #2389e8;
    border: none;
    border-radius: 0.75rem;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;
