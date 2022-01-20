import { useContext } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import ShowConversationContext from "../../../store/showConversationContext";
import {
  Wrapper,
  ContentWrapper,
  InnerWrapper,
  TextWrapper,
} from "./UserPreviewElements";

const UserPreview = (props) => {
  const showConversationContext = useContext(ShowConversationContext);
  const selectedConversationContext = useContext(SelectedConversationContext);

  const { user } = props;

  const previewClickHandler = () => {
    showConversationContext.setShowConversation(true);
    selectedConversationContext.setSelectedConversation({
      name: user.username,
      messages: [],
      scrollBehavior: "smooth",
    });
  };

  return (
    <Wrapper onClick={previewClickHandler}>
      <ContentWrapper>
        <img
          src={
            "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
          }
          alt="User's profile."
        />
        <InnerWrapper>
          <TextWrapper>
            <h4>{"@" + user.username}</h4>
            <p>Start a conversation!</p>
          </TextWrapper>
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default UserPreview;
