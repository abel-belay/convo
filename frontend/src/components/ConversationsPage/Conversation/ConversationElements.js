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