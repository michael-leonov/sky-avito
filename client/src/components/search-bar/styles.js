import styled, { css } from 'styled-components';
import { device } from '../../utils/consts';

export const Search = styled.div``;

export const SearchWrapper = styled.div`
  display: flex;
  column-gap: 10px;

  @media ${device.tablet} {
  }

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    column-gap: 60px;
  }
`;

export const LogoWrapper = styled.div`
  z-index: ${({ isFormVisible }) => (isFormVisible ? '0' : '2')};
`;

export const MobileLogo = styled.img`
  @media ${device.tablet} {
    display: none;
  }
`;

export const Logo = styled.img`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const SearchBlock = styled.div`
  display: flex;
  column-gap: 10px;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: ${({ isFormVisible }) => (isFormVisible ? '0' : '2')};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 17px;
  border-radius: 30px;

  border-radius: ${({ isSearch, searchValue }) =>
    isSearch && searchValue ? '15px 15px 0px 0px' : '30px'};

  @media ${device.tablet} {
    padding: 0 20px;

    border-radius: ${({ isSearch, searchValue }) =>
      isSearch && searchValue !== '' ? '6px 6px 0px 0px' : '6px'};
  }

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const FoundAdvsWrapper = styled.div`
  position: absolute;
  top: 33px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: ${({ isFormVisible }) => (isFormVisible ? '0' : '2')};
  background-color: #fff;
  padding: 5px 10px;

  border-radius: ${({ isSearch }) => isSearch && '0 0 6px 6px'};

  @media ${device.desktop} {
    top: 42px;
  }
`;

export const ShowAllAdvs = styled.span`
  color: #009ee4;
  cursor: pointer;

  :hover {
    color: #0080c1;
  }
`;

export const ButtonWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    z-index: ${({ isFormVisible }) => (isFormVisible ? '0' : '2')};
  }
`;
