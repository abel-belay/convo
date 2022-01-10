import { useContext } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import { ConversationWrapper } from "./ConversationElements";

const Conversation = () => {
  const selectedConversationContext = useContext(SelectedConversationContext);
  const { selectedConversation } = selectedConversationContext;

  let conversationBody;
  if (selectedConversation) {
    conversationBody = selectedConversation.messages.map((message, i) => (
      <p key={i}>{message.user.username + ": " + message.message}</p>
    ));
  } else {
    conversationBody = "Please select a conversation.";
  }

  return (
    <ConversationWrapper>
      {conversationBody}
    </ConversationWrapper>
  );
};

export default Conversation;
