/* eslint-disable no-unused-expressions */
import styled, { css } from 'styled-components';

export const Main = styled.div`
  padding-bottom: 37px;
`;

export const AdvList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px 26px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  column-gap: 26px;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  margin-bottom: 0;
`;

export const SortNewBtn = styled.button`
  border: ${({ isSorting }) =>
    `1px solid${isSorting ? ' #009EE4' : ' #d9d9d9'}`};
  border-radius: 6px;
  background-color: ${({ isSorting }) => (isSorting ? '#009EE4' : 'white')};
  color: ${({ isSorting }) => (isSorting ? 'white' : 'black')};
  padding: 10px;
  cursor: pointer;
  transition: border 0.3s ease-out, color 0.3s ease-out,
    background-color 0.3s ease-out;

  :hover {
    color: #009ee4;
    border: 1px solid #009ee4;
    ${({ isSorting }) => isSorting && 'background-color: white;'}
  }
`;
