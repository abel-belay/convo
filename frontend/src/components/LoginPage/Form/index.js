import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../store/userContext";

import {
  Form,
  SubmitButton,
  HR,
  DemoButtonsWrapper,
} from "./loginFormElements";

const LoginForm = (props) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "/api/users/login",
      {
        username: e.target.username.value,
        password: e.target.password.value,
      },
      { withCredentials: true }
    );

    if (res.status === 200) {
      Cookies.set("jwt", res.data.jwt);
      userContext.setUser(res.data.user);
      navigate("/convos");
    } else {
      console.log("Login failed!");
    }
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <SubmitButton>Sign In</SubmitButton>
      <HR />
      <DemoButtonsWrapper>
        <button>Demo 1</button>
        <button>Demo 2</button>
      </DemoButtonsWrapper>
    </Form>
  );
};

export default LoginForm;
