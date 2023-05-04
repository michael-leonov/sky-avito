import styled from 'styled-components';
import { device } from '../../utils/consts';

export const BackHomeBlock = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    margin-bottom: 43px;
  }
`;

export const ReturnHomeWrapper = styled.div`
  display: flex;
  column-gap: 60px;
`;
