import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../store/userContext.js";
import { Wrapper } from "./ConversationsListElements";
import ConversationPreview from "../ConversationPreview";

const ConversationsList = () => {
  const userContext = useContext(UserContext);
  const user = userContext.user;

  const [conversations, setConversations] = useState(null);

  useEffect(() => {
    const getConversations = async () => {
      const res = await axios.get(
        `/api/users/${user._id}/conversations`
      );
      setConversations(res.data);
    };

    getConversations();
  }, [user._id]);

  const loadConverationPreviewComponents = () => {
    return conversations.map((conversation) => (
      <li key={conversation._id}>
        <ConversationPreview conversation={conversation} />
      </li>
    ));
  };

  return (
    <Wrapper>
      {conversations ? (
        <ul>{loadConverationPreviewComponents()}</ul>
      ) : (
        "Loading"
      )}
    </Wrapper>
  );
};

export default ConversationsList;
