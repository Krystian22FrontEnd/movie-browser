import { StyledHeader, AdditionalInfo, MovieName, MovieRating, MovieVotes } from "./styled";

const Header = ({title, rating, votes, children}) => {
  return (
    <StyledHeader>
      {children}
      <AdditionalInfo>
        <MovieName>{title}</MovieName>
        <MovieRating>{rating}</MovieRating>
        <MovieVotes>{votes}</MovieVotes>
      </AdditionalInfo>
    </StyledHeader>
  );
};

export default Header;