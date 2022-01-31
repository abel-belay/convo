import { useEffect } from "react";
import { PageWrapper } from "./loginPageElements";
import Header from "../Header";
import AvatarsGraphic from "../AvatarsGraphic";
import LoginForm from "../Form";
import SignUpPrompt from "../SignUpPrompt";

const LoginPage = () => {
  useEffect(() => {
    document.body.style.overflow = "inherit";
    document.body.style.position = "inherit";
  });

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
