import { Wrapper } from "./PageWrapperElements";

const PageWrapper = (props) => {
  return <Wrapper>
    {props.children}
  </Wrapper>;
};

export default PageWrapper;
