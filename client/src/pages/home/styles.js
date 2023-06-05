import styled from 'styled-components';
import { device } from '../../utils/consts';

export const Main = styled.div`
  padding: 30px 0 67px 0;
`;

export const SearcBarWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    display: block;
    margin-bottom: 43px;
  }
`;

export const AdvList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  @media ${device.laptop} {
    gap: 30px;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 40px 26px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 20px;

  @media ${device.desktop} {
    column-gap: 26px;
    margin-bottom: 40px;
  }
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
