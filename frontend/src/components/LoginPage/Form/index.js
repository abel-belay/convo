import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useRef } from "react";
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
  const formRef = useRef();

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

  const demo1ClickHandler = () => {
    formRef.current.elements.username.value = "demo1";
    formRef.current.elements.password.value = "test1";
  };
  const demo2ClickHandler = () => {
    formRef.current.elements.username.value = "demo2";
    formRef.current.elements.password.value = "test2";
  };

  return (
    <Form ref={formRef} onSubmit={formSubmitHandler}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <SubmitButton>Sign In</SubmitButton>
      <HR />
      <DemoButtonsWrapper>
        <button type="submit" onClick={demo1ClickHandler}>
          Demo 1
        </button>
        <button type="submit" onClick={demo2ClickHandler}>
          Demo 2
        </button>
      </DemoButtonsWrapper>
    </Form>
  );
};

export default LoginForm;
