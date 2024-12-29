import styled from "styled-components";

import { ReactComponent as PictureIcon } from "../../icons/Picture.svg";

export const ImageListBlank = styled(PictureIcon)`
  border-radius: 5px;
  height: 66%;
  width: auto;
  background-color: ${({ theme }) => theme.color.silver};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
    margin-right: 16px;
    padding-bottom: unset;
  }
`;
