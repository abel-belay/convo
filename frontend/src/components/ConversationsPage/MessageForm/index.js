import axios from "axios";
import { useContext } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import UserContext from "../../../store/userContext";
import { MessageFormWrapper } from "./MessageFormElements";

const MessageForm = () => {
  const selectedConversationContext = useContext(SelectedConversationContext);
  const userContext = useContext(UserContext);

  const inputChangeHandler = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 350)}px`;
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const conversationId = selectedConversationContext.selectedConversation._id;
    const userId = userContext.user._id;
    const res = await axios.post(
      `http://localhost:8000/users/${userId}/conversations/${conversationId}/messages`,
      { message: e.target.message.value },
      { withCredentials: true }
    );
    console.log(res.data);
  };

  return (
    <MessageFormWrapper>
      <form onSubmit={formSubmitHandler}>
        <textarea
          name="message"
          id=""
          rows="1"
          placeholder="Send a message."
          onChange={inputChangeHandler}
        ></textarea>
        <button>&#8593;</button>
      </form>
    </MessageFormWrapper>
  );
};

export default MessageForm;
