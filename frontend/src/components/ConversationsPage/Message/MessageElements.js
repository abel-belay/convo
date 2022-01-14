import styled from "styled-components";

export const MessageWrapper = styled.div`
  max-width: 60%;
  margin-top: ${(props) => (props.isMarginTop ? "2.5rem" : "0.3rem")};
  align-self: ${(props) => (props.isOtherUser ? "flex-start" : "flex-end")};
  display: flex;
  align-items: flex-end;
`;

export const UserImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.4rem;
  border-radius: 50%;
`

export const TextBubble = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: inline-block;
  background-color: #1982fc;
  border-radius: 0.8rem;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
  color: white;

  & > p {
    width: 100%;
    overflow-wrap: break-word;
  }
`;
