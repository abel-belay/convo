import { MessageWrapper, UserImage, TextBubble } from "./MessageElements";

const Message = (props) => {
  const {message, isOtherUser, isMarginTop} = props;

  return (
    <MessageWrapper isOtherUser={isOtherUser} isMarginTop={isMarginTop}>
      {isOtherUser ? <UserImage src={message.user.image} alt="User profile." /> : null}
      <TextBubble>
        <p>{message.message}</p>
      </TextBubble>
    </MessageWrapper>
  )
}

export default Message;