import { Wrapper, Text, Loader } from "./styled";

const Loading = () => {
  return (
    <Wrapper>
      <Text>Search results for popular people</Text>
      <Loader />
    </Wrapper>
  );
};

export default Loading;
