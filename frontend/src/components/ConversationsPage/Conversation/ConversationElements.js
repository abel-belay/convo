import styled from "styled-components";

export const ConversationWrapper = styled.div`
  width: 100%;
  height: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Message = styled.div`
  margin-top: ${(props) => (props.topMargin ? "2.5rem" : "0.2rem")};
  max-width: 60%;
  padding: 0.5rem;
  display: inline-block;
  border-radius: 0.8rem;
  color: white;

  & > p {
    width: 100%;
  }
`;

export const MessageLeft = styled(Message)`
  align-self: flex-start;
  background-color: #1982fc;
`;

export const MessageRight = styled(Message)`
  align-self: flex-end;
  background-color: #1982fc;
`;
