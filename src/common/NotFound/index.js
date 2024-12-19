import { Wrapper, Text, ImageWrapper } from "./styled";
import Picture from "../../image/Picture.png";

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <Text>Sorry, there are no results for popular people</Text>
        <ImageWrapper>
          <img src={Picture} alt="" />
        </ImageWrapper>
      </Wrapper>
    </>
  );
};

export default NotFound;
