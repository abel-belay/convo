import React, { useState } from "react";

const SearchResultsContext = React.createContext({
  conversations: null,
  setConversations: null,
  users: null,
  setUsers: null,
});

export const SearchResultsContextProvider = (props) => {
  const [conversations, setConversations] = useState(undefined);
  const [users, setUsers] = useState(undefined);

  return (
    <SearchResultsContext.Provider
      value={{ conversations, setConversations, users, setUsers }}
    >
      {props.children}
    </SearchResultsContext.Provider>
  );
};

export default SearchResultsContext;
