import React, { useState } from "react";

const SelectedConversationContext = React.createContext({
  selectedConversation: null,
  setSelectedConversation: null,
  scrollBehavior: null,
});

export const SelectedConversationContextProvider = (props) => {
  const [selectedConversation, setSelectedConversation] = useState(undefined);

  return (
    <SelectedConversationContext.Provider
      value={{ selectedConversation, setSelectedConversation}}
    >
      {props.children}
    </SelectedConversationContext.Provider>
  );
};

export default SelectedConversationContext;
