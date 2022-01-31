import { Wrapper, SignUpLink } from "./SignUpPromptElements";

const SignUpPrompt = () => {
  return (
    <Wrapper>
      <span>Don't have an account? </span>
      <span>
        <SignUpLink to='/signup'>Sign Up</SignUpLink>
      </span>
    </Wrapper>
  );
};

export default SignUpPrompt;
