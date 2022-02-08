import { useContext } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import ShowConversationContext from "../../../store/showConversationContext";
import Header from "../Header";
import { ContentWrapper } from "./ConversationHeaderElements";

const ConversationHeader = () => {
  const selectedConversationContext = useContext(SelectedConversationContext);
  const showConversationContext = useContext(ShowConversationContext);

  const body =
    (selectedConversationContext.selectedConversation &&
      selectedConversationContext.selectedConversation.name) ||
    "";

  const clickHandler = () => {
    showConversationContext.setShowConversation(false);
  }

  return (
    <Header>
      <ContentWrapper>
        <span id="back-button" onClick={clickHandler}>{"<"}</span>
        <span>{body}</span>
      </ContentWrapper>
    </Header>
  );
};

export default ConversationHeader;
