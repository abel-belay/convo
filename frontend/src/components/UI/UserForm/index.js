import { LoginForm } from "./UserFormElements";

const UserForm = (props) => {
  return (
    <LoginForm onSubmit={props.onSubmit}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button>Log In</button>
    </LoginForm>
  );
};

export default UserForm;
