import { Container } from "./common/Container";
import Header from "./common/Header/index.js";
import { Navigation } from "./common/Navigation";
import MovieDetails from "./features/MovieDetails/index.js";
import { PersonCredits } from "./features/PersonCredits/index.js";

function App() {
  const personId = 287;

  return (
    <Container>
      <Navigation />
      <Header />
      <MovieDetails />
      <PersonCredits personId={personId} />
    </Container>
  );
}

export default App;
