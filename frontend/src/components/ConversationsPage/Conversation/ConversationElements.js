import styled from "styled-components";

export const ConversationWrapper = styled.div`
  width: inherit;
  height: calc(100% - 4rem - 4.5rem);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 4rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: ${props => props.scrollBehavior === "auto" ? "auto" : "smooth"};
`;