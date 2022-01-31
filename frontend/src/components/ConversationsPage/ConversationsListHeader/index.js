import { useContext } from "react";
import UserContext from "../../../store/userContext";
import Header from "../Header";
import { Avatar, Logo, LogoutLink } from "./ConversationsListHeaderElements";
import Cookies from "js-cookie";

const ConversationsListHeader = () => {
  const userContext = useContext(UserContext);

  const logoutClickHandler = () => {
    Cookies.remove("jwt");
    userContext.setUser(null);
  }

  return (
    <Header>
      <Avatar src={userContext.user.image}></Avatar>
      <Logo>Convo</Logo>
      <LogoutLink to='/login' onClick={logoutClickHandler}>Sign Out</LogoutLink>
    </Header>
  );
};

export default ConversationsListHeader;
