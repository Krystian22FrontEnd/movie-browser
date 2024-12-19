import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as StarIcon } from "../../icons/star.svg";

const sharedStyles = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    line-height: 12px;
  }
`;
export const StyledHeader = styled.header`
  display: flex;
  align-items: end;
  position: relative;
  min-height: 770px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        189.44deg,
        rgba(0, 0, 0, 0) 58.48%,
        rgba(0, 0, 0, 0.106473) 63.17%,
        rgba(0, 0, 0, 0.235359) 68.85%,
        rgba(0, 0, 0, 0.492821) 78.08%,
        rgba(0, 0, 0, 0.740286) 85.86%,
        #000000 92.87%
      ),
      linear-gradient(
        180deg,
        #000000 0%,
        rgba(0, 0, 0, 0.689555) 4.66%,
        rgba(0, 0, 0, 0.439033) 9.34%,
        rgba(0, 0, 0, 0.20628) 15.16%,
        rgba(0, 0, 0, 0) 24.22%
      ),
      linear-gradient(
        90deg,
        #000000 13.6%,
        rgba(0, 0, 0, 0.984059) 14.58%,
        rgba(0, 0, 0, 0.967732) 15.44%,
        rgba(0, 0, 0, 0.865569) 16.3%,
        rgba(0, 0, 0, 0.230315) 22.87%,
        rgba(0, 0, 0, 0) 26.64%
      ),
      linear-gradient(
        270deg,
        #000000 14.11%,
        rgba(0, 0, 0, 0.873268) 15.08%,
        rgba(0, 0, 0, 0.720529) 16.51%,
        rgba(0, 0, 0, 0.294577) 19.99%,
        rgba(0, 0, 0, 0.159921) 21.88%,
        rgba(0, 0, 0, 0) 25.68%
      );

    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 148px;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 2;
  margin-left: 276px;

  @media (max-width: ${({ theme }) => theme.breakpoints.nextHubMax}) {
    margin-left: 150px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    margin-left: 75px;
  }

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  margin-left: 16px;
}
`;

export const MovieName = styled.header`
  font-size: 64px;
  font-weight: 500;
  line-height: 76.8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-wrap: nowrap;
      margin-top: 4px;
  }
`;

export const StyledStar = styled(StarIcon)`
  width: 40px;
  height: 38.12px;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 15.25px;
    margin-right: 4px;
  }
`;

export const MovieRating = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  line-height: 39px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    line-height: 18.2px;
  }
`;
export const RatingOutOf = styled.p`
  ${sharedStyles}
  padding-top: 12px;
  margin-left: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 2px;
    padding-top: 3px;
  }
`;

export const MovieVotes = styled.p`
  ${sharedStyles}
  margin: 16px 0 56px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 8px;
    margin-bottom: 8px;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`