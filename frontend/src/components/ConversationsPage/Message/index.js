import { MessageWrapper, UserImage, TextBubble } from "./MessageElements";

const Message = (props) => {
  const { message, isOtherUser, isMarginTop } = props;

  return (
    <MessageWrapper isOtherUser={isOtherUser} isMarginTop={isMarginTop}>
      {isOtherUser ? (
        <UserImage
          src={
            message.user.image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="User profile."
        />
      ) : null}
      <TextBubble>
        <p>{message.message}</p>
      </TextBubble>
    </MessageWrapper>
  );
};

export default Message;
