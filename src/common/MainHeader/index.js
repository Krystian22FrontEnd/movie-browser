import {
  StyledHeader,
  Image,
  AdditionalInfo,
  MovieName,
  StyledStar,
  MovieRating,
  RatingOutOf,
  RatingContainer,
  MovieVotes,
  MobileWrapper,
} from "./styled.js";
import poster3 from "../../image/poster3.jpg";

const MainHeader = ({children}) => {
  return (
    <StyledHeader>
     <Image src={poster3} alt="" />
      {children}
      <AdditionalInfo>
        <MovieName>Nazwa Filmu</MovieName>
        <MobileWrapper>
        <RatingContainer>
        <StyledStar/>
        <MovieRating>8</MovieRating>
        <RatingOutOf>/ 10</RatingOutOf>
        </RatingContainer>
        <MovieVotes>335 votes</MovieVotes>
        </MobileWrapper>
      </AdditionalInfo>
    </StyledHeader>
  );
};

export default MainHeader;
