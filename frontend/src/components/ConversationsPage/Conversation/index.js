import { useContext, useEffect, useRef } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import UserContext from "../../../store/userContext";
import { ConversationWrapper, ContentWrapper } from "./ConversationElements";
import Message from "../Message";

// WILL BE SCROLLED INTO VIEW WHENEVER PARENT COMPONENT IS RE-RENDERED.
// WE'RE PUTTING THIS AT THE BOTTOM OF THE COVNERSATION COMPONENT.
const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const formatConversation = (conversation, userContext) => {
  return conversation.messages.map((message, i) => (
    <Message
      key={message._id}
      message={message}
      isOtherUser={message.user._id !== userContext.user._id}
      isMarginTop={i > 0 && message.user._id !== conversation.messages[i - 1].user._id}
    />
  ));
};

const Conversation = () => {
  const userContext = useContext(UserContext);
  const selectedConversationContext = useContext(SelectedConversationContext);
  const { selectedConversation } = selectedConversationContext;

  let conversationBody;
  if (selectedConversation) {
    conversationBody = formatConversation(selectedConversation, userContext);
  } else {
    conversationBody = "Please select a conversation.";
  }

  return (
    <ConversationWrapper>
      <ContentWrapper
        scrollBehavior={
          selectedConversationContext.selectedConversation &&
          selectedConversationContext.selectedConversation.scrollBehavior
        }
      >
        {conversationBody}
        <AlwaysScrollToBottom />
      </ContentWrapper>
    </ConversationWrapper>
  );
};

export default Conversation;
