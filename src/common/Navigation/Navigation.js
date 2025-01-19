import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useMovieSearch} from "../../features/hooks/useMovieSearch";
import {usePeopleSearch} from "../../features/hooks/usePeopleSearch"; // Importowanie nowego hooka
import {
  MobileContainer,
  NavigationInput,
  NavigationItem,
  NavigationList,
  NavigationTitle,
  NavigationTitleContainer,
  NavigationWrapper,
  SearchIconWrapper,
  StyledSearchIcon,
  StyledVideoIcon,
} from "./styled";
import {StyledNavLink, StyledNavLinkIcon} from "./StyledNavLink/styled";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");


  const { searchResults: movieResults } = useMovieSearch(searchQuery);
  const { searchResults: peopleResults } = usePeopleSearch(searchQuery); // Dodane wyszukiwanie osób


  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    try {
      if (value.trim()) {

        navigate(`/search?query=${encodeURIComponent(value)}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };


  const currentPlaceholder =
    location.pathname === "/person"
      ? "Search for people..."
      : "Search for movies...";


  const handlePersonClick = (personId) => {
    navigate(`/person/${personId}`); // Przejście do szczegółów osoby
  };

  return (
    <NavigationWrapper>
      <NavigationList>
        <MobileContainer>
          <NavigationTitleContainer>
            <StyledNavLinkIcon to="/">
              <StyledVideoIcon />
            </StyledNavLinkIcon>
            <NavigationTitle>Movies Browser</NavigationTitle>
          </NavigationTitleContainer>
          <NavigationItem>
            <StyledNavLink to="/movies">MOVIES</StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to="/person">PEOPLE</StyledNavLink>
          </NavigationItem>
        </MobileContainer>
        <NavigationInput>
          <StyledSearchIcon />
          <SearchIconWrapper
            type="text"
            placeholder={currentPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </NavigationInput>
      </NavigationList>

      {location.pathname === "/person" && peopleResults && Array.isArray(peopleResults) && (
        <ul>
          {peopleResults.map((person) => (
            <li key={person.id} onClick={() => handlePersonClick(person.id)}>
              {person.name}
            </li>
          ))}
        </ul>
      )}


      {location.pathname === "/movies" && movieResults && Array.isArray(movieResults) && (
        <ul>
          {movieResults.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}

    </NavigationWrapper>
  );
};