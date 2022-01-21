import { useContext } from "react";
import SelectedConversationContext from "../../../store/selectedConversationContext";
import ShowConversationContext from "../../../store/showConversationContext";
import UserContext from "../../../store/userContext";
import {
  Wrapper,
  ContentWrapper,
  InnerWrapper,
  TextWrapper,
} from "./UserPreviewElements";

const UserPreview = (props) => {
  const showConversationContext = useContext(ShowConversationContext);
  const selectedConversationContext = useContext(SelectedConversationContext);
  const userContext = useContext(UserContext);

  const previewClickHandler = () => {
    showConversationContext.setShowConversation(true);
    selectedConversationContext.setSelectedConversation({
      name: props.user.username,
      users: [props.user, userContext.user],
      messages: [],
      scrollBehavior: "smooth",
    });
  };

  return (
    <Wrapper onClick={previewClickHandler}>
      <ContentWrapper>
        <img
          src={props.user.image}
          alt="User's profile."
        />
        <InnerWrapper>
          <TextWrapper>
            <h4>{"@" + props.user.username}</h4>
            <p>Start a conversation!</p>
          </TextWrapper>
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default UserPreview;
