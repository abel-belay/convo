import styled from "styled-components";

export const Wrapper = styled.button`
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  text-align: left;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
  & > img {
    margin-left: 0.6rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-left: 0.5rem;
  padding: 1rem 0.6rem 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

export const TextWrapper = styled.div`
  display: block;

  & > h4 {
    color: #2E2E2E;
    font-size: 1.1rem;
    font-weight: 600;
  }

  & > p {
    margin-top: 0.4rem;
    color: #555555;
    font-size: 0.9rem;
  }
`;

export const Time = styled.p`
  align-self: flex-start;
`;
