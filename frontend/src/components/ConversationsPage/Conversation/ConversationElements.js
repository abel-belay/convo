import styled from "styled-components";

export const ConversationWrapper = styled.div`
  width: 100%;
  height: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 98%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: ${props => props.scrollBehavior === "auto" ? "auto" : "smooth"};
`;

const Message = styled.div`
  margin-top: ${(props) => (props.topMargin ? "2.5rem" : "0.2rem")};
  max-width: 60%;
  padding: 0.5rem;
  display: inline-block;
  border-radius: 0.8rem;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
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
