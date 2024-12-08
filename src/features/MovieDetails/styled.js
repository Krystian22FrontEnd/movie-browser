import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../icons/star.svg";

export const StyledMovieDetailsTile = styled.div`
  max-width: 1368px;
  box-shadow: 4px 4px 10px #bac7d580;
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-gap: 40px;
  align-content: start;
  grid-template-columns: 352px 3fr;
  grid-template-rows: auto auto;
  margin: 64px 56px 56px 56px;
  row-gap: 24px;

  @media(max-width: 1080px) {
    grid-template-columns: auto auto;
    grid-gap: 20px;
    padding: 30px;
    margin: 40px 50px 40px 50px;
  }

  @media(max-width: 700px) {
    grid-template-columns: auto auto;
    grid-gap: 18px;
    padding: 18px;
    margin: 30px 30px 30px 30px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 114px;
    grid-gap: 16px;
    padding: 16px;
    margin: 16px 16px 21px 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  border-radius: 5px;
  padding: 40px 0px 40px 40px;
  background-color: ${({ theme }) => theme.color.white};
  grid-row: 1 / span2;
  
  @media(max-width: 1080px){
    grid-row: 1;
    padding: 0;
    height: auto;
    width: auto;
  }  
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
  margin:0;
`;

export const Details = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  padding-top: 40px;
  margin: 0;

  @media (max-width: 1080px) {
    grid-gap: 16px;
    padding-top: 0px;
  }

  @media (max-width: 700px) {
    grid-gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 8px;
  }
`;

export const Header = styled.header`
  font-size: 36px;
  line-height:43px;
  font-weight: 600;
  padding: 8px 0 0 0;
  margin: 0;

  @media (max-width: 700px) {
    font-size: 23px;
    line-height: 29px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    line-height: 21px;
    padding: 0px;
  }
`;

export const Year = styled.p`
  font-size: 22px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const DetailInfo = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: start;
  grid-gap: 8px;
  margin: 0;
  font-size:18px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    line-height: 16px;
  }

`;
export const DetailInfoElement = styled.p`
  margin: 0;

  `;
export const DetailInfoElementType = styled.span`
  margin: 0;
  color: ${({ theme }) => theme.color.stormGray};
  font-size:18px;
  line-height: 22px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  display: none;
  }
  `;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: -8px;
`;

export const Tag = styled.li`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.mystic};
  font-weight: 400;
  font-size: 18px;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 10px;
  margin: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalS}) {
    font-size: 16px;
    line-height: 18px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    line-height: 11px;
  }
`;

export const Rate = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 22px;
  color: black;
  line-height: 28.6px;
  margin: 0;
  align-items: baseline;

  @media (max-width: 560px) {
  flex-wrap: wrap;
  align-items: flex-end;
  }
`;

export const RateGrade = styled.p`
  font-size: 22px;
  padding-left: 8px;
  line-height: 29px;
  margin: 0;

  @media (max-width: 560px) {
  font-size: 13px;
  line-height: 17px;
  margin: 0;
  padding-left: 8px;
  }
`;

export const RateElement = styled.p`
  font-size: 14px;
  color: black;
  line-height: 17px;
  margin: 0;
  justify-content: end;
  padding-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  display: none;
  }
`;

export const RateVotes = styled.p`
  font-size: 14px;
  color: black;
  line-height: 17px;
  margin: 0;
  padding-left: 12px;

  @media (max-width: 560px) {
  font-size: 13px;
  line-height: 17px;
  color: ${({ theme }) => theme.color.waterloo};
  padding-left: 7px;
  }
`;

export const MovieDescription = styled.div`
  grid-column: 2;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  padding-right: 25px;

  @media(max-width: 1080px){
    grid-row: 2;
    grid-column: 1/ span 2;
    padding:0;
  }

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 23px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  vertical-align: baseline;
  align-self: center;
  @media (max-width: 560px) {
  width: 16px;
  }
`;