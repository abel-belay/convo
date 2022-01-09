import { SearchWrapper } from "./ConversationSearchElements";

const ConversationSearch = () => {
  return (
    <SearchWrapper>
      <form action="">
        <input type="text" placeholder="Search or start new chat" />
      </form>
    </SearchWrapper>
  );
};

export default ConversationSearch;
