import { useContext } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import UserContext from "../../../store/userContext";
import {
  ConversationWrapper,
  ContentWrapper,
  MessageLeft,
  MessageRight,
} from "./ConversationElements";

const Conversation = () => {
  const selectedConversationContext = useContext(SelectedConversationContext);
  const { selectedConversation } = selectedConversationContext;

  const userContext = useContext(UserContext);

  let conversationBody;
  if (selectedConversation) {
    conversationBody = selectedConversation.messages.map((message, i) => {
      // MAKE BOOLEAN TO REMOVE MARGIN BETWEEN SUBSEQUENT MESSAGES FROM THE SAME USER.
      let topMargin = true;
      if (i > 0 && message.user._id === selectedConversation.messages[i - 1].user._id) {
        topMargin = false;
      }

      // RENDER MESSAGES FROM USER ON RIGHT, MESSAGES FROM OTHERS ON LEFT.
      if (message.user._id === userContext.user._id) {
        return (
          <MessageRight topMargin={topMargin} key={i}>
            <p>{message.user.username + ": " + message.message}</p>
          </MessageRight>
        );
      } else {
        return (
          <MessageLeft topMargin={topMargin} key={i}>
            <p>{message.user.username + ": " + message.message}</p>
          </MessageLeft>
        );
      }
    });
  } else {
    conversationBody = "Please select a conversation.";
  }

  return (
    <ConversationWrapper>
      <ContentWrapper>{conversationBody}</ContentWrapper>
    </ConversationWrapper>
  );
};

export default Conversation;
