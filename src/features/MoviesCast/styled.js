import styled from "styled-components";

export const StyledMoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 8px;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 22px;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const MovieRole = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 24px 16px;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
