import { PageWrapper } from "./loginPageElements";
import Header from "../Header";
import AvatarsGraphic from "../AvatarsGraphic";
import LoginForm from "../Form";
import SignUpPrompt from "../SignUpPrompt";

const LoginPage = () => {
  return (
    <PageWrapper>
      <Header />
      <AvatarsGraphic />
      <LoginForm />
      <SignUpPrompt />
    </PageWrapper>
  );
};

export default LoginPage;
