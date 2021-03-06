import axios from "axios";
import { useContext, useRef } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import UserContext from "../../../store/userContext";
import { MessageFormWrapper } from "./MessageFormElements";

const MessageForm = () => {
  const selectedConversationContext = useContext(SelectedConversationContext);
  const userContext = useContext(UserContext);
  const textareaRef = useRef();

  const inputChangeHandler = () => {
    textareaRef.current.style.height = "inherit";
    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight + 2,
      350
    )}px`;
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const userId = userContext.user._id;

    let conversationId =
      selectedConversationContext.selectedConversation._id || null;
    if (
      selectedConversationContext.selectedConversation.messages.length === 0
    ) {
      const res = await axios.post(
        `/api/users/${userId}/conversations/new`,
        {
          name: "test",
          users: selectedConversationContext.selectedConversation.users,
        },
        { withCredentials: true }
      );
      conversationId = res.data.conversation._id;
    }

    const res = await axios.post(
      `/api/users/${userId}/conversations/${conversationId}/messages`,
      { message: textareaRef.current.value },
      { withCredentials: true }
    );

    // ADD RETURNED MESSAGE (INCLUDES USER AND TIMESTAMP) TO SELECTED CONVERSATION CONTEXT (IF MESSAGE WAS SUCCESSFULLY ADD TO THE DATABASE);
    if (res.status !== 500) {
      // CLEAR TEXTAREA INPUT AND RESIZE TEXTAREA.
      textareaRef.current.value = "";
      inputChangeHandler();
      if (
        selectedConversationContext.selectedConversation.messages.length === 0
      ) {
        const res = await axios.get(
          `/api/users/${userId}/conversations/${conversationId}`,
          { withCredentials: true }
        );
        selectedConversationContext.setSelectedConversation(res.data.conversation);
      }
    }
  };

  return (
    <MessageFormWrapper>
      <form onSubmit={formSubmitHandler}>
        <textarea
          name="message"
          rows="1"
          placeholder="Send a message."
          ref={textareaRef}
          onChange={inputChangeHandler}
        ></textarea>
        <button>&#8593;</button>
      </form>
    </MessageFormWrapper>
  );
};

export default MessageForm;
