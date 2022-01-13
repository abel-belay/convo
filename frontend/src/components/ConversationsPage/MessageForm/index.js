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
    const conversationId = selectedConversationContext.selectedConversation._id;
    const userId = userContext.user._id;
    const res = await axios.post(
      `http://localhost:8000/users/${userId}/conversations/${conversationId}/messages`,
      { message: textareaRef.current.value },
      { withCredentials: true }
    );

    // ADD RETURNED MESSAGE (INCLUDES USER AND TIMESTAMP) TO SELECTED CONVERSATION CONTEXT (IF MESSAGE WAS SUCCESSFULLY ADD TO THE DATABASE);
    if (res.status !== 500) {
      selectedConversationContext.setSelectedConversation((prevState) => {
        return {
          ...prevState,
          messages: prevState.messages.concat([res.data.message]),
          scrollBehavior: "smooth",
        };
      });

      // CLEAR TEXTAREA INPUT AND RESIZE TEXTAREA.
      textareaRef.current.value = "";
      inputChangeHandler();
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
