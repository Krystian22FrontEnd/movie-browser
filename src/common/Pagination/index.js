import { useNavigate } from "react-router";
import {
  ButtonsContainer,
  ButtonText,
  ButtonTile,
  Counter,
  CounterNumber,
  CounterText,
  PointerLeft,
  PointerRight,
  Wrapper,
} from "./styled";
import { useLocation } from "react-router";
import { useQueryParameter } from "../components/Search/useQueryParameter";
import { useFetchSearchResult } from "../components/Search/useFetchSearchResult";
import { usePopularMovies } from "../../features/hooks/usePopularMovies";
import { usePopularActors } from "../../features/hooks/usePopularActors";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

export const Pagination = (isMoviesPage) => {
  const isMobile = useMediaQuery({ maxWidth: 560 });
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQueryParameter("query");
  const { searchResults } = useFetchSearchResult();
  const totalSearchPages = +searchResults.data.total_pages;
  const { totalPagesMovies } = usePopularMovies();
  const { totalPagesActor } = usePopularActors();

  const generateURL = useCallback(
        
    (page, query) => {
          const queryParam = query ? `&query=${query}` : "";
          return `${location.pathname}?page=${page}${queryParam}`;
        },
       
    [location.pathname]
    
  );

  const totalPages = query
    ? totalSearchPages
    : isMoviesPage
    ? totalPagesMovies || 1
    : totalPagesActor || 1;

  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const [previousQuery, setPreviousQuery] = useState(query);

  useEffect(() => {
    if (query !== previousQuery) {
      navigate(generateURL(1, query), { replace: true });
      setPreviousQuery(query);
    } else if (!location.pathname.includes("search") && currentPage === 1) {
      navigate(location.pathname, { replace: true });
    }
  }, [
    query,
    previousQuery,
    currentPage,
    navigate,
    location.pathname,
    generateURL,
  ]);

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(generateURL(newPage, query));
    }
  };

  const renderButton = (onClick, disabled, iconLeft, iconRight, text) => (
    <ButtonTile onClick={onClick} disabled={disabled}>
      {isMobile ? (
        <>
          {iconLeft}
          {iconRight}
        </>
      ) : (
        <>
          {(text === "First" || text === "Previous") && iconLeft}
          {(text === "Last" || text === "Next") && iconRight}
        </>
      )}
      {!isMobile && <ButtonText>{text}</ButtonText>}
    </ButtonTile>
  );

  return (
    <Wrapper>
      <ButtonsContainer>
        {renderButton(
                    
          () => changePage(1),
                   
          currentPage === 1,
                   
          <PointerLeft />,
                   
          <PointerLeft />,
                   
          "First"
                
        )}
        {renderButton(
                    
          () => changePage(currentPage - 1),
                   
          currentPage === 1,
                   
          <PointerLeft />,
                   
          null,
                   
          "Previous"
                
        )}
      </ButtonsContainer>
      <Counter>
        <CounterText>Page</CounterText>
        <CounterNumber>{currentPage}</CounterNumber>
        <CounterText>of</CounterText>
        <CounterNumber>{totalPages}</CounterNumber>
      </Counter>
      <ButtonsContainer>
        {renderButton(
                    
          () => changePage(currentPage + 1),
                   
          currentPage === totalPages,
                   
          null,
                   
          <PointerRight />,
                   
          "Next"
                
        )}
        {renderButton(
                    
          () => changePage(totalPages),
                   
          currentPage === totalPages,
                   
          <PointerRight />,
                   
          <PointerRight />,
                   
          "Last"
                
        )}
      </ButtonsContainer>
    </Wrapper>
  );
};

