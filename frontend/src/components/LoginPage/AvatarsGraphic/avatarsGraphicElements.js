import styled from "styled-components";

export const GraphicWrapper = styled.div`
  max-width: 430px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  & > img {
    width: 9.35rem;
    border: 3px solid #3dcf30;
    border-radius: 50%;

    &:nth-of-type(1) {
      margin-right: 3rem;
    }

    &:nth-of-type(2) {
      position: absolute;
      top: -15%;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 450px) {
      width: 7rem;
    }
  }
`;
