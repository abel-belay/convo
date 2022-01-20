import { useContext } from "react";
import { Wrapper } from "./ConversationsListElements";
import ConversationPreview from "../ConversationPreview";
import ConversationsContext from "../../../store/conversationsContext.js";

const ConversationsList = () => {
  const conversationsContext = useContext(ConversationsContext);

  const loadConverationPreviewComponents = () => {
    return conversationsContext.conversations.map((conversation) => (
      <li key={conversation._id}>
        <ConversationPreview conversation={conversation} />
      </li>
    ));
  };

  return (
    <Wrapper>
      {conversationsContext.conversations ? (
        <ul>{loadConverationPreviewComponents()}</ul>
      ) : (
        "Loading"
      )}
    </Wrapper>
  );
};

export default ConversationsList;
