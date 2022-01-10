import { SelectedConversationContextProvider } from "../../../store/selectedConversationContext";
import {
  PageWrapper,
  ContentWrapper,
  SidebarWrapper,
  MainWrapper,
} from "./ConversationsPageElements";
import ConversationsList from "../ConversationsList";
import Header from "../Header";
import ConversationSearch from "../ConversationSearch";
import Conversation from "../Conversation";
import MessageForm from "../MessageForm";

const ConversationsPage = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <SelectedConversationContextProvider>
          <SidebarWrapper>
            <Header />
            <ConversationSearch />
            <ConversationsList />
          </SidebarWrapper>
          <MainWrapper>
            <Header />
            <Conversation />
            <MessageForm />
          </MainWrapper>
        </SelectedConversationContextProvider>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ConversationsPage;
