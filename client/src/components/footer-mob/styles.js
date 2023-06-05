import styled from 'styled-components';
import { device } from '../../utils/consts';

export const FooterMobBlock = styled.footer`
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 6px 0;
  z-index: 1;

  @media ${device.tablet} {
    display: none;
  }
`;

export const FooterIconBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`;
