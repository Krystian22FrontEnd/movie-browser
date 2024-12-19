import {
  StyledPersonWrapper,
  FlexContainer,
  WrapperItem,
  ImageWrapper,
  Text,
  WrapperActorName,
} from "./styled";
import posterExample from "../../image/posterExample.png";
import { getPopularPersons } from "../usePopularPeopleListAPI"; // Adjust the import path as necessary
import { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import NotFound from "../../common/NotFound";

export const Person = () => {
  // Poprawiona inicjalizacja stanu
  const [persons, setPersons] = useState({ peoples: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await getPopularPersons();
        if (fetchedData && fetchedData.peoples) {
          setPersons(fetchedData);
        } else {
          setPersons({ peoples: [] });
        }
      } catch (error) {
        console.error("Error fetching people:", error);
        setPersons({ peoples: [] });
      } finally {
        setIsLoading(false);
      }
    };
    fetchPeople();
  }, []);

  return (
    <FlexContainer>
      <Text>Popular people</Text>
      <StyledPersonWrapper>
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : persons?.peoples?.length > 0 ? (
          persons.peoples.map((person) => (
            <WrapperItem key={person.id}>
              <ImageWrapper
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                    : posterExample
                }
                alt={person.name}
              />
              <WrapperActorName>{person.name}</WrapperActorName>
            </WrapperItem>
          ))
        ) : (
          <div>
            <NotFound />
          </div>
        )}
      </StyledPersonWrapper>
    </FlexContainer>
  );
};
