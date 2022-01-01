import { Card } from "./loginPageElements";
import UserForm from "../../UI/UserForm";
import PageWrapper from "../../UI/PageWrapper";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    };
    const res = await fetch("http://localhost:8000/users/login", requestOptions);
    if (res.status === 200) {
      const result = await res.json();
      navigate("/convos");
    }
    else {
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
