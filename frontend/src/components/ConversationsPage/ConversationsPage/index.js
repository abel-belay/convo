import { useContext, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ShowConversationContext from "../../../store/showConversationContext";
import {
  PageWrapper,
  ContentWrapper,
  SidebarWrapper,
  MainWrapper,
} from "./ConversationsPageElements";
import ConversationHeader from "../ConversationHeader";
import Conversation from "../Conversation";
import MessageForm from "../MessageForm";
import ConversationsListHeader from "../ConversationsListHeader";
import ConversationsList from "../ConversationsList";
import ConversationSearch from "../ConversationSearch";

const ConversationsPage = () => {
  const showConversationContext = useContext(ShowConversationContext);
  const sidebarRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
  });

  return (
    <PageWrapper>
      <ContentWrapper>
        <CSSTransition
          in={!showConversationContext.showConversation}
          timeout={200}
          nodeRef={sidebarRef}
          classNames="conversationsList"
        >
          <SidebarWrapper ref={sidebarRef}>
            <ConversationsListHeader />
            <ConversationSearch />
            <ConversationsList />
          </SidebarWrapper>
        </CSSTransition>
        <MainWrapper>
          <ConversationHeader />
          <Conversation />
          <MessageForm />
        </MainWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ConversationsPage;
