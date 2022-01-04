import { Card } from "./newUserPageElements";
import UserForm from "../UI/UserForm";
import PageWrapper from "../UI/PageWrapper";
import Cookies from "js-cookie";

const NewUserPage = () => {
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
    try {
      const res = await fetch("http://localhost:8000/users", requestOptions);
      const token = await res.json();
      Cookies.set("jwt", token.token);
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
