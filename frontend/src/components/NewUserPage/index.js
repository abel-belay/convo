import { Card } from "./newUserPageElements";
import UserForm from "../UI/UserForm";
import PageWrapper from "../UI/PageWrapper";

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
    await fetch("http://localhost:8000/users/new", requestOptions);
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
