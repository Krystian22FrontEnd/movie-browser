import { Wrapper, Button, Header2 } from "./styled";
import danger from "../image/danger.png";

const Error = () => {
  return (
    <>
      <Wrapper>
        <img src={danger} alt="" />
        <Header2>Ooops! Something went wrong...</Header2>
        <p>Please check your network connection and try again</p>
        <Button>Back to homepage</Button>
      </Wrapper>
    </>
  );
};

export default Error;
