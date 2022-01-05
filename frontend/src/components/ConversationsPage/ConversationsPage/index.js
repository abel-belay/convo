import { useContext } from "react";
import UserContext from "../../../store/userContext";

const ConversationsPage = () => {
  const userContext = useContext(UserContext);
  const user = userContext.user;
  
  const messageElements = user.conversations.map((conversation) => (<li>{conversation.message}</li>));

  return (
    <div>
      <h1>Conversations Page</h1>
      <h2>Your Username is {userContext.user.username}</h2>
      <ul>
        {messageElements}
      </ul>
      {JSON.stringify(user)}
    </div>
  );
};

export default ConversationsPage;
