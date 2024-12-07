import {
  Wrapper,
  ContainerWrapper,
  WrapperItem,
  ImageWrapper,
  Text,
  WrapperText,
} from "./styled";
import posterExample from "../../image/posterExample.png";

export const Person = () => {
  return (
    <ContainerWrapper>
      <Text>Popular people</Text>
      <Wrapper>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperText>Liu Yifei</WrapperText>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperText>Liu Yifei</WrapperText>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperText>Liu Yifei</WrapperText>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperText>Liu Yifei</WrapperText>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperText>Liu Yifei</WrapperText>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperText>Liu Yifei</WrapperText>
        </WrapperItem>
        
      </Wrapper>
    </ContainerWrapper>
  );
};
