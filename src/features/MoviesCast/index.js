import { useState, useEffect } from "react";
import { getPersonMovieCredits } from "../useApiKey";
import {
  StyledMovieDetailsTileList,
  HeaderList,
  MovieTitle,
  MovieRole,
  SectionTitle,
  Text,
  FlexCont,
  IconContainerList
} from "./styled";
import {
  Rate,
  RateElement,
  RateGrade,
  RateVotes,
  StyledStarIcon,
} from "../MovieDetails/styled";

export const MoviesCast = ({ personId }) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getPersonMovieCredits(personId);
        if (credits && credits.cast) {
          setMovieCredits(credits.cast);
        }
      } catch (error) {
        console.error("Błąd podczas pobierania filmografii:", error);
      }
    };

    fetchMovieCredits();
  }, [personId]);

  return (
    <>
      <Text>Movies - cast</Text>
      <StyledMovieDetailsTileList>
        {movieCredits.length > 0 ? (
          movieCredits.map((movie) => (
            <IconContainerList key={`${movie.id}-${movie.credit_id}`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "ścieżka/do/placeholder/image"
                }
                alt={`${movie.title} poster`}
              />
              <HeaderList>{movie.title}</HeaderList>
              <MovieRole>{movie.character}</MovieRole>
              <Rate>
                <StyledStarIcon />
                <RateGrade>
                  {movie.vote_average
                    ? movie.vote_average.toFixed(2)
                    : "Ładuję ocenę filmu"}
                </RateGrade>
                <RateElement> / 10</RateElement>
                <RateVotes>
                  {movie.vote_count ? movie.vote_count : "Liczba głosów"} votes
                </RateVotes>
              </Rate>
            </IconContainerList>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </StyledMovieDetailsTileList>
    </>
  );
};
