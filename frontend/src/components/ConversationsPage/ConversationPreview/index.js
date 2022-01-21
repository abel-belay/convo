import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import socket from "../../../loaders/socket";
import { useContext, useState } from "react";
import ShowConversationContext from "../../../store/showConversationContext";
import UserContext from "../../../store/userContext";
import {
  Wrapper,
  TextWrapper,
  Time,
  ContentWrapper,
  InnerWrapper,
} from "./ConversationPreviewElements";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import { useEffect } from "react";

// ENABLES DAYJS TO USE RELATIVE TIMES (E.G. "TWO DAYS AGO").
dayjs.extend(relativeTime);

// GETS THE IMAGE OF THE USER WHO SENT THE MOST RECENT MESSAGE THAT IS NOT THE CLIENT.
const conversationPreviewPic = (messages, user, conversation) => {
  if (messages.length > 0) {
    for (let i = messages.length - 1; i >= 0; --i) {
      if (messages[i].user._id !== user._id) {
        return messages[i].user.image;
      }
    }
    return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  } else {
    return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  }
};

const ConversationPreview = (props) => {
  const userContext = useContext(UserContext);
  const user = userContext.user;
  const selectedConversationContext = useContext(SelectedConversationContext);
  const showConversationContext = useContext(ShowConversationContext);
  const [conversation, setConversation] = useState(props.conversation);

  const isConversationSelected =
    selectedConversationContext.selectedConversation &&
    selectedConversationContext.selectedConversation._id === conversation._id;

  let latestMessage = null;
  if (conversation.messages.length > 0) {
    latestMessage =
      conversation.messages[conversation.messages.length - 1];
    latestMessage.time = dayjs().to(dayjs(latestMessage.timestamp));
  }

  useEffect(() => {
    socket.emit("join", conversation._id);
  }, [conversation._id]);

  // OFF IS RUN FIRST TO ENSURE ONLY ONE EVENT LISTENER FOR THE EVENT EXISTS AT A TIME.
  // BECAUSE WHEN THE CODE IS RUN MORE THAN ONCE (RE-RENDER), IT ADDS AN ADDITIONAL EVENT LISTENER.
  socket
    .off(`new-message-${conversation._id}`)
    .on(`new-message-${conversation._id}`, (data) => {
      setConversation((prevState) => {
        return {
          ...prevState,
          messages: prevState.messages.concat([data.message]),
          scrollBehavior: "smooth",
        };
      });

      if (isConversationSelected) {
        selectedConversationContext.setSelectedConversation((prevState) => {
          return {
            ...prevState,
            messages: prevState.messages.concat([data.message]),
            scrollBehavior: "smooth",
          };
        });
      }
    });

  const previewClickHandler = () => {
    showConversationContext.setShowConversation(true);
    selectedConversationContext.setSelectedConversation({
      ...conversation,
      scrollBehavior: "auto",
    });
  };

  return (
    <Wrapper onClick={previewClickHandler} isSelected={isConversationSelected}>
      <ContentWrapper>
        <img
          src={conversationPreviewPic(conversation.messages, user, conversation)}
          alt="User's profile."
        />
        <InnerWrapper>
          {latestMessage ? (
            <>
              <TextWrapper>
                <h4>{conversation.name}</h4>
                <p>
                  {latestMessage.user._id === user._id
                    ? "Sent"
                    : latestMessage.user.username +
                      ": " +
                      latestMessage.message}
                </p>
              </TextWrapper>
              <Time>{latestMessage.time}</Time>
            </>
          ) : (
            <>
              <TextWrapper>
                <h4>{conversation.name}</h4>
                <p>No Messages Sent</p>
              </TextWrapper>
            </>
          )}
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ConversationPreview;
