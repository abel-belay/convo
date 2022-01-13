import dayjs from "dayjs";
import { useContext } from "react";
import UserContext from "../../../store/userContext";
import {
  Wrapper,
  TextWrapper,
  Time,
  ContentWrapper,
} from "./ConversationPreviewElements";
import SelectedConversationContext from "../../../store/selectedConversationContext";

const ConversationPreview = (props) => {
  const userContext = useContext(UserContext);
  const user = userContext.user;
  const conversation = props.conversation;
  const selectedConversationContext = useContext(SelectedConversationContext);

  const latestMessage = conversation.messages[conversation.messages.length - 1];
  latestMessage.time = dayjs(latestMessage.timestamp).format("h:mm");

  // MAKE THIS RETURN EITHER 12HR TIME, "YESTERDAY", OR "X WEEKS AGO"
  const compareTimes = (timestamp) => {
    return "yesterday";
  };

  const previewClickHandler = () => {
    selectedConversationContext.setSelectedConversation({
      ...props.conversation,
      scrollBehavior: "auto",
    });
  };

  const findRightPic = (messages) => {
    for (let i = messages.length - 1; i >= 0; --i) {
      if (messages[i].user._id !== user._id) {
        return messages[i].user.image;
      }
    }
  };

  return (
    <Wrapper onClick={previewClickHandler}>
      <img src={findRightPic(conversation.messages)} alt="User's profile." />
      <ContentWrapper>
        <TextWrapper>
          <h4>{conversation.name}</h4>
          <p>
            {latestMessage.user._id === user._id
              ? "Sent"
              : latestMessage.user.username + ": " + latestMessage.message}
          </p>
        </TextWrapper>
        <Time>{latestMessage.time}</Time>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ConversationPreview;
