import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useContext } from "react";
import UserContext from "../../../store/userContext";
import {
  Wrapper,
  TextWrapper,
  Time,
  ContentWrapper,
  InnerWrapper,
} from "./ConversationPreviewElements";
import SelectedConversationContext from "../../../store/selectedConversationContext";

// ENABLES DAYJS TO USE RELATIVE TIMES (E.G. "TWO DAYS AGO").
dayjs.extend(relativeTime);

// GETS THE IMAGE OF THE USER WHO SENT THE MOST RECENT MESSAGE THAT IS NOT THE CLIENT.
const conversationPreviewPic = (messages, user) => {
  for (let i = messages.length - 1; i >= 0; --i) {
    if (messages[i].user._id !== user._id) {
      return messages[i].user.image;
    }
  }
};

const ConversationPreview = (props) => {
  const userContext = useContext(UserContext);
  const user = userContext.user;
  const conversation = props.conversation;
  const selectedConversationContext = useContext(SelectedConversationContext);

  const latestMessage = conversation.messages[conversation.messages.length - 1];
  latestMessage.time = dayjs().to(dayjs(latestMessage.timestamp));

  const previewClickHandler = () => {
    selectedConversationContext.setSelectedConversation({
      ...props.conversation,
      scrollBehavior: "auto",
    });
  };

  return (
    <Wrapper
      onClick={previewClickHandler}
      isSelected={
        selectedConversationContext.selectedConversation &&
        selectedConversationContext.selectedConversation._id ===
          conversation._id
      }
    >
      <ContentWrapper>
        <img
          src={conversationPreviewPic(conversation.messages, user)}
          alt="User's profile."
        />
        <InnerWrapper>
          <TextWrapper>
            <h4>{conversation.name}</h4>
            <p>
              {latestMessage.user._id === user._id
                ? "Sent"
                : latestMessage.user.username + ": " + latestMessage.message}
            </p>
          </TextWrapper>
          <Time>{latestMessage.time}</Time>
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ConversationPreview;
