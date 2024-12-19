import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../icons/Search.svg";
import { ReactComponent as VideoIcon } from "../../icons/Video.svg";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 94px;
  background-color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    font-size: 13px;
    flex-direction: column;
    height: 142px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 16px;
  max-width: 1368px;
  width: 100%;
  list-style: none;
  word-break: keep-all;

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    flex-direction: column;
    align-items: unset;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    margin: 32px 0 24px 0;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iPhoneSE}) {
    justify-content: space-around;
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  width: 40px;
  height: 40px;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 17px;
    height: 17px;
  }
`;

export const NavigationTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationTitle = styled.li`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.white};
  margin-right: 56px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    margin-right: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
    margin-right: unset;
  }
`;

export const NavigationItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  margin: 0 24px;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    margin: 0 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iPhoneSE}) {
    margin: unset;
  }
`;

export const SearchIconWrapper = styled.input`
  font-size: 16px;
  border: 0;
  border-radius: 33px;
  line-height: 24px;
  padding: 4px 24px;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16;
    height: 16px;
  }
`;

export const NavigationInput = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 33px;
  padding-left: 18px;
  height: 48px;
  max-width: 432px;
  width: 100%;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.iPadPro}) {
    height: 48px;
    max-width: 476px;
    margin-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 44px;
    max-width: 288px;
    margin-bottom: 16px;
  }
`;

const activeclassname = "active";

export const StyledNavLinkIcon = styled(NavLink).attrs(() => ({
  activeclassname,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};

  &.${activeclassname} {
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.white};
    text-decoration: none;
    margin: 0 16px;
    padding: 8px 24px;
    background-color: ${({ theme }) => theme.color.black};
    cursor: pointer;
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px !important;
    border-radius: 29px !important;
    margin: unset !important;
  }
`;
