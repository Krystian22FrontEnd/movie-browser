import { StyledHeader, AdditionalInfo, MovieName, MovieRating, MovieViews } from "./styled.js";

const Header = ({title, rating, views, children}) => {
return(
<StyledHeader>
{children}
    <AdditionalInfo>
        <MovieName>{title}</MovieName>
        <MovieRating>{rating}</MovieRating>
        <MovieViews>{views}</MovieViews>
    </AdditionalInfo>
</StyledHeader>

)
}

export default Header;