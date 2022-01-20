import axios from "axios";
import { useContext, useRef, useEffect } from "react";
import { SearchWrapper } from "./ConversationSearchElements";
import SearchResultsContext from "../../../store/searchResultsContext";
import UserContext from "../../../store/userContext";

const ConversationSearch = () => {
  const searchResultsContext = useContext(SearchResultsContext);
  const userContext = useContext(UserContext);
  const timeout = useRef();

  useEffect(() => {
    const getConversations = async () => {
      const res = await axios.get(`/api/users/${userContext.user._id}/conversations`);
      searchResultsContext.setConversations(res.data);
    };

    getConversations();
  }, [userContext.user._id]);

  const inputChangeHandler = (e) => {
    // CLEAR THE PREVIOUS TIMEOUT.
    clearTimeout(timeout.current);

    // WAIT BEFORE MAKING API CALL, IF NOT CLEARED BY INPUT CHANGE IN X SECONDS, THEN CALL IS MADE.
    // IF EMPTY, GET ALL USER'S CONVERSATIONS.
    timeout.current = setTimeout(async () => {
      if (e.target.value.trim()) {
        const config = { params: { searchQuery: e.target.value } };
        const res = await axios.get("/api/search", config);
        searchResultsContext.setConversations(res.data.conversations);
        searchResultsContext.setUsers(res.data.users);
      } else {
        const res = await axios.get(
          `/api/users/${userContext.user._id}/conversations`
        );
        searchResultsContext.setConversations(res.data);
        searchResultsContext.setUsers(null);
      }
    }, 400);
  };

  return (
    <SearchWrapper>
      <form action="">
        <input
          onChange={inputChangeHandler}
          type="text"
          placeholder="Search or start new chat"
        />
      </form>
    </SearchWrapper>
  );
};

export default ConversationSearch;
