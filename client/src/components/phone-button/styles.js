import styled from 'styled-components';
import { device } from '../../utils/consts';

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    margin-bottom: 34px;
  }
`;

export const ShowPhoneText = styled.span`
  font-weight: 500;
  font-size: 14px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const LinkPhone = styled.a`
  color: white;

  :hover {
    color: white;
  }
`;
