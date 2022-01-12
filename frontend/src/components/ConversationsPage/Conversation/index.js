import { useContext, useEffect, useRef } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import UserContext from "../../../store/userContext";
import {
  ConversationWrapper,
  ContentWrapper,
  MessageLeft,
  MessageRight,
} from "./ConversationElements";

// WILL BE SCROLLED INTO VIEW WHENEVER PARENT COMPONENT IS RE-RENDERED.
// WE'RE PUTTING THIS AT THE BOTTOM OF THE COVNERSATION COMPONENT.
const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const Conversation = () => {
  const selectedConversationContext = useContext(SelectedConversationContext);
  const { selectedConversation } = selectedConversationContext;

  const userContext = useContext(UserContext);

  const formatConversation = (conversation) => {
    const messageComponents = conversation.messages.map((message, i) => {
      // MAKE BOOLEAN TO REMOVE MARGIN BETWEEN SUBSEQUENT MESSAGES FROM THE SAME USER.
      let topMargin = false;
      if (
        i > 0 &&
        message.user._id !== selectedConversation.messages[i - 1].user._id
      ) {
        topMargin = true;
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

    return messageComponents;
  };

  let conversationBody;
  if (selectedConversation) {
    conversationBody = formatConversation(selectedConversation);
  } else {
    conversationBody = "Please select a conversation.";
  }

  return (
    <ConversationWrapper>
      <ContentWrapper scrollBehavior={selectedConversationContext.selectedConversation && selectedConversationContext.selectedConversation.scrollBehavior}>
        {conversationBody}
        <AlwaysScrollToBottom />
      </ContentWrapper>
    </ConversationWrapper>
  );
};

export default Conversation;
