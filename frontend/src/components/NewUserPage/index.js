import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../store/userContext";
import { Card } from "./newUserPageElements";
import UserForm from "../UI/UserForm";
import PageWrapper from "../UI/PageWrapper";
import Cookies from "js-cookie";

const NewUserPage = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post("http://localhost:8000/users", {
        username: e.target.username.value,
        password: e.target.password.value,
        image: e.target.image.value,
      }, {withCredentials: true});
      Cookies.set("jwt", res.data.token);
      userContext.setUser(res.data.user);
      navigate("/convos");
    } catch (err) {
      console.log("User registration error occured", err);
    }
  };

  return (
    <PageWrapper>
      <h1>New User Page</h1>
      <Card>
        <UserForm onSubmit={formSubmitHandler} />
      </Card>
    </PageWrapper>
  );
};

export default NewUserPage;
