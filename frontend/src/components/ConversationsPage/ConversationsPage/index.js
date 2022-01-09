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
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ConversationsPage;
