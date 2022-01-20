import React, { useState } from "react";

const ConversationsContext = React.createContext({
  conversations: null,
  setConversations: null,
});

export const ConversationsContextProvider = (props) => {
  const [conversations, setConversations] = useState(undefined);

  return (
    <ConversationsContext.Provider value={{ conversations, setConversations }}>
      {props.children}
    </ConversationsContext.Provider>
  );
};

export default ConversationsContext;
