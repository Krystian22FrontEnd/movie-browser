import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  height: 400px;
  display: flex;
  justify-content: left;
  align-items: end;

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
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const AdditionalInfo = styled.div`
  color: ${({ theme }) => theme.color.white};
  z-index: 2;
  text-align: left;
  padding-left: 150px;
`;

export const MovieName = styled(AdditionalInfo)`
font-size: 64px;
font-weight: 600;
`

export const MovieRating = styled(AdditionalInfo)`
font-size: 30px;
font-weight: 500;
`

export const MovieViews = styled(AdditionalInfo)`
font-size: 16px;
font-weight: 400;
`