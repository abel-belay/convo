import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../store/userContext";
import { Card } from "./loginPageElements";
import UserForm from "../../UI/UserForm";
import PageWrapper from "../../UI/PageWrapper";
import axios from "axios";
import Cookies from "js-cookie";

const LoginPage = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/users/login", {
      username: e.target.username.value,
      password: e.target.password.value,
    }, {withCredentials: true});

    if (res.status === 200) {
      Cookies.set("jwt", res.data.jwt);
      userContext.setUser(res.data.user);
      navigate("/convos");
    } else {
      console.log("Login failed!");
    }
  };

  return (
    <PageWrapper>
      <h1>Login Page</h1>
      <Card>
        <UserForm onSubmit={formSubmitHandler} />
      </Card>
    </PageWrapper>
  );
};

export default LoginPage;
