import { Container } from "./common/Container";
import {Image } from "./common/Header/styled.js";
import Header from "./common/Header/index.js";
import Error from "./Error";
import poster3 from "./image/poster3.jpg"

function App() {
  return (
    <Container>
      <Header 
      title = {"Nazwa filmu"}
      rating = {"Ocena"}
      views = {"Wyświetlenia"}
      >
        <Image src={poster3} alt="" />
      </Header>
      <Error />
    </Container>
  );
}

export default App;
