import {
  DetailInfo,
  DetailInfoElement,
  DetailInfoElementType,
  Details,
  Header,
  IconContainer,
  Image,
  MovieDescription,
  FlexContainer,
  StyledMovieDetailsTile,
  Year,
  Tags,
  Tag,
  Rate,
  RateElement,
  RateGrade,
  RateVotes,
  StyledStarIcon,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectStatus } from "../movieBrowserSlice";
import { useEffect, useState } from "react";
import { getMovieOverview } from "../movieDetailsAPI";
import { CastAndCrew } from "../CastAndCrew";
import MainHeader from "../../common/MainHeader";

const MovieDetails = () => {
  const dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  console.log(status);
  console.log(movies);
  const [overview, setOverview] = useState(null); // dodaj stan na dane przeglądu
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [votes, setVotes] = useState(null);
  const [vote_average, setVote_average] = useState(null);
  const [poster, setPoster] = useState(null);
  const [error, setError] = useState(false); // dodaj stan na błąd

  const movieId = 550; // może być przekazany jako parametr jeśli komponent ma dynamiczne ID

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const fetchedData = await getMovieOverview(movieId);
        if (fetchedData) {
          setOverview(fetchedData.overview);
          setTitle(fetchedData.title);
          setDate(fetchedData.date);
          setVotes(fetchedData.votes);
          setVote_average(fetchedData.vote_average);
          setPoster(fetchedData.poster);
        }
      } catch (err) {
        console.error("Błąd podczas pobierania szczegółów filmu:", err);
        setError(true);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
    <MainHeader/>
    <FlexContainer>
      <StyledMovieDetailsTile>
        <IconContainer>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${
              poster ? poster : "nie ma plakatu"
            }`}
            alt="Movie poster"
          />
        </IconContainer>
        <Details>
          <Header>Movie Title: {title ? title : "Ładowanie tytułu..."}</Header>

          <Year></Year>
          <DetailInfo>
            <DetailInfoElement>
              <DetailInfoElementType>Production:&nbsp;</DetailInfoElementType>
              USA
            </DetailInfoElement>
            <DetailInfoElement>
              <DetailInfoElementType>Release date:&nbsp;</DetailInfoElementType>
              {date ? date : "release date unknown"}
            </DetailInfoElement>
          </DetailInfo>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Drama</Tag>
          </Tags>
          <Rate>
            <StyledStarIcon />
            <RateGrade>
              {vote_average ? vote_average : "Ładuję ocenę filmu"}
            </RateGrade>
            <RateElement>/ 10</RateElement>
            <RateVotes>{votes ? votes : "Liczba głosów"} votes</RateVotes>
          </Rate>
        </Details>
        <MovieDescription>
          {overview ? overview : "nie ma opisu filmu i uj"}
        </MovieDescription>
      </StyledMovieDetailsTile>
      <CastAndCrew movieId={movieId} />
    </FlexContainer>
    </>
  );
};

export default MovieDetails;