import React, { useState, useEffect } from "react";
import { getMovieCredits } from "../movieDetailsAPI";

import { ReactComponent as ProfileIcon } from "../../icons/Picture.svg";
import {
  Text,
  StyledPersonWrapper,
  WrapperItem,
  ImageWrapper,
  WrapperActorName,
  WrapperRole,
  StyledPlaceholder,
} from "./styled";

export const CastAndCrew = ({ movieId }) => {
  // const dispatch = useDispatch();

  // const movies = useSelector(selectMovies);
  // const status = useSelector(selectStatus);

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  const [credits, setCredits] = useState({ cast: [], crew: [] });

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const fetchedCredits = await getMovieCredits(movieId);
        if (fetchedCredits) {
          setCredits(fetchedCredits);
        }
      } catch (error) {
        console.error("Error details:", error);
      }
    };
    fetchMovieCredits();
  }, [movieId]); // teraz efekt będzie wykonywany tylko przy zmianie movieId

  return (
    <>
      <Text>Cast</Text>
      <StyledPersonWrapper>
        {credits.cast.length > 0 ? (
          credits.cast.map((member) => (
            <WrapperItem key={`${member.id}-${member.credit_id}`}>
              <ImageWrapper>
                {member.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                    alt={member.name}
                  />
                ) : (
                  <ProfileIcon />
                )}
              </ImageWrapper>
              <WrapperActorName>{member.name}</WrapperActorName>
              <WrapperRole>Role: {member.character}</WrapperRole>
            </WrapperItem>
          ))
        ) : (
          <Text>No cast available</Text>
        )}
      </StyledPersonWrapper>
      <Text>Crew</Text>
      <StyledPersonWrapper>
        {credits.crew.length > 0 ? (
          credits.crew.map((member, index) => (
            <WrapperItem key={`${member.id}-${member.credit_id}`}>
              <ImageWrapper>
                {member.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                    alt={member.name}
                  />
                ) : (
                  <ProfileIcon />
                )}
              </ImageWrapper>
              <WrapperActorName>{member.name}</WrapperActorName>
              <WrapperRole>Job: {member.job}</WrapperRole>
            </WrapperItem>
          ))
        ) : (
          <Text>No crew available</Text>
        )}
      </StyledPersonWrapper>
    </>
  );
};
