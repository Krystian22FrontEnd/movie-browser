import { useEffect, useState } from "react";
import {
  StyledMovieDetailsTileList,
  IconContainerList,
  MobileDetailsList,
  HeaderList,
  YearList,
  TagsList,
  TagList,
  RateList,
  StyledStarIcon,
  RateGradeList,
  RateVotesList,
  ImageList,
  FlexCont,
  Text,
} from "./styled";

const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";
export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error(`Error fetching popular movies: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    return null;
  }
};

export const MovieList = ({ movieId }) => {
  const [movies, setMovies] = useState({ results: [] });
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedData = await getPopularMovies();
      if (fetchedData) {
        setMovies(fetchedData);
      } else {
        setError(true);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <FlexCont>
        <Text>Popular movies</Text>
        <StyledMovieDetailsTileList>
          {movies.results.map((list) => (
            <IconContainerList key={list.id}>
              <ImageList
                src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`}
                alt={`${list.title} poster`}
              />
              <MobileDetailsList>
                <HeaderList>{list.title}</HeaderList>
                <YearList>{new Date(list.release_date).getFullYear()}</YearList>
                <TagsList>
                  {list.genres?.map((genre) => (
                    <TagList key={genre.id}>{genre.name}</TagList>
                  ))}
                </TagsList>
                <RateList>
                  <StyledStarIcon />
                  <RateGradeList>{list.vote_average}</RateGradeList>
                  <RateVotesList>{list.vote_count} votes</RateVotesList>
                </RateList>
              </MobileDetailsList>
            </IconContainerList>
          ))}
        </StyledMovieDetailsTileList>
      </FlexCont>
    </>
  );
};

{
  /* <FlexContainer>
<Text>Popular people</Text>
<StyledPersonWrapper>
  <WrapperItem>
    <ImageWrapper src={posterExample} alt="pic" />
    <WrapperActorName>Liu Yifei</WrapperActorName>
  </WrapperItem>
  </StyledPersonWrapper>
  </FlexContainer> */
}
