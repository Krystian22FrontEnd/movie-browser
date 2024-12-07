import styled from "styled-components";

export const Text = styled.header`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  margin: 56px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
    line-height: 24px;
    margin: 24px 0 16px 0px;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 276px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 5px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  background-color: ${({ theme }) => theme.color.whisper};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  grid-template-rows: repeat(4, minmax(339px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-rows: repeat(3, minmax(136px, 1fr));
    gap: 16px;
  }
`;

export const WrapperItem = styled.div`
  padding: 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
    border-radius: 5px;
  }
`;


export const ImageWrapper = styled.img`
  width: 177px;
  height: 264px;
  /* top: -6px;
  position: relative; */
  object-fit: cover;
  border-radius: 5px;
  /* padding: 10px 15px 12px 16px; */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 178px;
  }
`;

export const WrapperText = styled.p`
  text-align: center;
  padding-bottom: 35px;
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18.2px;
    padding-bottom: 33px;
  }
`;
