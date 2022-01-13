import { useContext } from "react";
import UserContext from "../../../store/userContext";
import Header from "../Header";
import { Avatar } from "./ConversationsListHeaderElements";

const ConversationsListHeader = () => {
  const userContext = useContext(UserContext);

  return (
    <Header>
      <Avatar src={userContext.user.image}></Avatar>
    </Header>
  );
};

export default ConversationsListHeader;
