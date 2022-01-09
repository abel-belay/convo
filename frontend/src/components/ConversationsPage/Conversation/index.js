import { ConversationWrapper } from "./ConversationElements";

const Conversation = () => {
  const test = Array.from(Array(500)).map((element, i) => <p key={i}>Conversation Message.</p>)
  return (
    <ConversationWrapper>
      <p>First message.</p>
      {test}
      <p>Last message.</p>
    </ConversationWrapper>
  );
};

export default Conversation;
