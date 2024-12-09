import {
  StyledMovieDetailsTile,
  ImageContainer,
  Image,
  Details,
  Header,
  MovieDescription,
  DetailInfo,
  DetailInfoElementType,
  DetailInfoElement,
} from "./styled";
import personDetails from "../../image/personDetails.png";
import { ContainerExtra } from "../../common/Container";

export const PersonDetails = () => {
  return (
    <ContainerExtra>
      <StyledMovieDetailsTile>
        <ImageContainer>
          <Image src={personDetails} alt="Actor poster" />
        </ImageContainer>
        <Details>
          <Header>Liu Yifei</Header>
          <DetailInfo>
            <DetailInfoElement>
              <DetailInfoElementType>Date of birth: </DetailInfoElementType>{" "}
              25.08.1987&nbsp;
            </DetailInfoElement>
            <DetailInfoElement>
              <DetailInfoElementType>Place of birth: </DetailInfoElementType>{" "}
              Wuhan, Hubei, China
            </DetailInfoElement>
          </DetailInfo>
        </Details>
        <MovieDescription>
          Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th,
          1987. She began modeling at the age of 8 and was trained in singing,
          dancing and the piano. Moving to the United States at 10 with her
          mother, Liu lived there for four years.
        </MovieDescription>
      </StyledMovieDetailsTile>
    </ContainerExtra>
  );
};
