import styled from 'styled-components';
import { device } from '../../utils/consts';

export const Header = styled.header`
  background-color: #009ee4;
  padding: 20px 0;
  margin-bottom: 30px;

  @media ${device.tablet} {
    margin-bottom: 43px;
  }
`;

export const HeaderMobileLogo = styled.img`
  @media ${device.tablet} {
    display: none;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: end;

  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const HeaderAuthButtons = styled.div`
  display: flex;
  column-gap: 8px;
`;
