import styled from 'styled-components';

export const Search = styled.div`
  margin-bottom: 43px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  column-gap: 60px;
`;

export const LogoWrapper = styled.div`
  z-index: 2;
`;

export const SearchBlock = styled.div`
  display: flex;
  column-gap: 10px;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  border-radius: ${({ isSearch, seachValue }) =>
    isSearch && seachValue && '6px 6px 0 0'};
`;

export const FoundAdvsWrapper = styled.div`
  position: absolute;
  top: 47px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 2;
  background-color: #fff;
  padding: 5px 10px;

  border-radius: ${({ isSearch }) => isSearch && '0 0 6px 6px'};
`;

export const ShowAllAdvs = styled.span`
  color: #009ee4;
  cursor: pointer;

  :hover {
    color: #0080c1;
  }
`;

export const ButtonWrapper = styled.div`
  z-index: 2;
`;
