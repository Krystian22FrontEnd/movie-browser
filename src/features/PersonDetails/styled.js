import styled from "styled-components";

export const StyledMovieDetailsTile = styled.div`
  box-shadow: 4px 4px 10px #bac7d580;
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-gap: 40px;
  align-content: start;
  grid-template-columns: 348px 1fr;
  grid-template-rows: 0fr 2fr;
  margin-top: 64px;
  row-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    grid-template-columns: 270px 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 135px 1fr;
    grid-template-rows: 1fr;
    grid-gap: 16px;
    margin-top: 23px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  border-radius: 5px;
  padding: 40px 0px 40px 40px;
  background-color: ${({ theme }) => theme.color.white};
  grid-row: 1 / span 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    grid-row: 1;
    padding: 40px 0 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px 0 0 16px;
  }
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    width: 230px;
    height: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 116px;
    height: 163px;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  padding-top: 40px;
  padding-right: 17px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 16px;
    padding: 16px 16px 0 0;
  }
`;

export const Header = styled.header`
  font-size: 36px;
  line-height: 43px;
  font-weight: 600;
  padding: 8px 0 0 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
  }
`;

export const DetailInfo = styled.div`
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    line-height: 14.4px;
  }
`;
export const DetailInfoElement = styled.p`
  margin: 0;
  padding-bottom: 8px;
`;
export const DetailInfoElementType = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
`;

export const MovieDescription = styled.div`
  grid-column: 2;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  padding-bottom: 16px;
  padding-right: 40px;
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    grid-row: 2;
    grid-column: 1 / span 2;
    padding: 0 40px 16px 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 22.4px;
    padding: 0 16px 16px;
  }
`;