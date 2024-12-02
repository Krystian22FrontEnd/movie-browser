import { ReactComponent as Spinner } from "./icon-spinner.svg";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Text = styled.header`
  font-size: 36px;
  font-weight: 600;
  margin: 56px 16px 20px 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    text-align: center;
    font-size: 26px;
    margin: 56px 16px 20px 20px;
  }
`;

export const Loader = styled(Spinner)`
  align-self: center;
  margin-top: 100px;

  animation: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
