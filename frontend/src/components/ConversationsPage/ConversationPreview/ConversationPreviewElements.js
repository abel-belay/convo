import styled from "styled-components";

export const Wrapper = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSelected ? "rgba(0, 0, 0, 0.04)" : "transparent"};
  border: none;
  border-bottom: 1px solid #e5e5e5;
  text-align: left;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.div`
  width: 93%;
  display: flex;
  align-items: center;

  & > img {
    height: 3.5rem;
    border-radius: 50%;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  margin-left: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TextWrapper = styled.div`
  & > h4 {
    color: #2e2e2e;
    font-size: 1.1rem;
    font-weight: 600;
  }

  & > p {
    margin-top: 0.4rem;
    color: #555555;
    font-size: 0.9rem;
  }
`;

export const Time = styled.p``;
