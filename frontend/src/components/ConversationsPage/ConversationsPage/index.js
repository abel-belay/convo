import { SelectedConversationContextProvider } from "../../../store/selectedConversationContext";
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
  return (
    <PageWrapper>
      <ContentWrapper>
        <SelectedConversationContextProvider>
          <SidebarWrapper>
            <ConversationsListHeader />
            <ConversationSearch />
            <ConversationsList />
          </SidebarWrapper>
          <MainWrapper>
            <ConversationHeader />
            <Conversation />
            <MessageForm />
          </MainWrapper>
        </SelectedConversationContextProvider>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ConversationsPage;
