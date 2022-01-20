import { useContext } from "react";
import { Wrapper } from "./ConversationsListElements";
import ConversationPreview from "../ConversationPreview";
import SearchResultsContext from "../../../store/searchResultsContext.js";
import UserPreview from "../UserPreview";

const ConversationsList = () => {
  const searchResultsContext = useContext(SearchResultsContext);

  // THIS IS A FUNCTION BECAUSE SOME OF THE OBJECT PROPERTIES MAY BE UNREADABLE,
  // SO WE ONLY TRY TO READ IT WHEN WE KNOW IT HAS A VALUE BY CALLING THIS AS A FUNCTION.
  const loadConversationPreviewElements = () => {
    return searchResultsContext.conversations.map((conversation) => (
      <li key={conversation._id}>
        <ConversationPreview conversation={conversation} />
      </li>
    ));
  };

  // THIS IS A FUNCTION BECAUSE SOME OF THE OBJECT PROPERTIES MAY BE UNREADABLE,
  // SO WE ONLY TRY TO READ IT WHEN WE KNOW IT HAS A VALUE BY CALLING THIS AS A FUNCTION.ƒ
  const loadUserPreviewElements = () => {
    return searchResultsContext.users.map((user) => (
      <li key={user._id}>
        <UserPreview user={user} />
      </li>
    ));
  };

  return (
    <Wrapper>
      {searchResultsContext.conversations ? (
        <ul>{loadConversationPreviewElements()}</ul>
      ) : (
        "Loading"
      )}
      {searchResultsContext.users ? <ul>{loadUserPreviewElements()}</ul> : null}
    </Wrapper>
  );
};

export default ConversationsList;
