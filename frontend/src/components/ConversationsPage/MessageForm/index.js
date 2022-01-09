import { MessageFormWrapper } from "./MessageFormElements";

const MessageForm = () => {
  const keyDownHandler = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 350)}px`;
  };

  return (
    <MessageFormWrapper>
      <form action="">
        <textarea
          name=""
          id=""
          rows="1"
          placeholder="Send a message."
          onChange={keyDownHandler}
        ></textarea>
      </form>
    </MessageFormWrapper>
  );
};

export default MessageForm;
