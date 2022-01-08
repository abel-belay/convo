import { useContext } from "react";
import UserContext from "../../../store/userContext";
import ConversationsList from "../ConversationsList";

const ConversationsPage = () => {
  const userContext = useContext(UserContext);

  return (
    <div style={{backgroundColor: "gainsboro", width: "100vw", height: "100vh", margin: "0", padding: "0"}}>
      <h1 style={{margin: "0"}}>Conversations Page</h1>
      <h2>Your Username is {userContext.user.username}</h2>
      <ConversationsList />
    </div>
  );
};

export default ConversationsPage;
