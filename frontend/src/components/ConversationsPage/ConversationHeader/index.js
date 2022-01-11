import { useContext } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import Header from "../Header";
import { ContentWrapper } from "./ConversationHeaderElements";

const ConversationHeader = () => {
  const selectedConversationContext = useContext(SelectedConversationContext);

  const body =
    (selectedConversationContext.selectedConversation &&
      selectedConversationContext.selectedConversation.name) ||
    "";

  return (
    <Header>
      <ContentWrapper>
        <p>{body}</p>
      </ContentWrapper>
    </Header>
  );
};

export default ConversationHeader;
