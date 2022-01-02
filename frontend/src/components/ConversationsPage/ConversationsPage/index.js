import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../store/userContext";

const ConversationsPage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const user = userContext.user;

  if (user === undefined) {
    console.log("hello");
    navigate("/login");
  }
  console.log(userContext);
  const messageElements = user.conversations.map((conversation) => (<li>{conversation.message}</li>));

  return (
    <div>
      <h1>Conversations Page</h1>
      <h2>Your Username is {userContext.user.username}</h2>
      <ul>
        <li>first message</li>
        {messageElements}
      </ul>
    </div>
  );
};

export default ConversationsPage;
