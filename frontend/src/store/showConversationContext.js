import React, { useState } from "react";

const ShowConversationContext = React.createContext({
  showConversation: null,
  setShowConversation: null,
});

export const ShowConversationContextProvider = (props) => {
  const [showConversation, setShowConversation] = useState(undefined);

  return (
    <ShowConversationContext.Provider
      value={{ showConversation, setShowConversation }}
    >
      {props.children}
    </ShowConversationContext.Provider>
  );
};

export default ShowConversationContext;
