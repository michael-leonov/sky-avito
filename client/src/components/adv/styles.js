import styled from 'styled-components';
import { device } from '../../utils/consts';

export const Adv = styled.div`
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  @media ${device.desktop} {
    box-shadow: none;
    border-radius: none;
  }
`;

export const AdvImage = styled.img`
  height: 41.25vw;
  margin-bottom: 10px;
  border-radius: 6px 6px 0 0;
  width: 100%;

  @media ${device.tablet} {
    height: 27vw;
  }

  @media ${device.laptop} {
    height: 23vw;
  }

  @media ${device.desktop} {
    width: 270px;
    height: 270px;
    margin-bottom: 20px;
    border-radius: none;
  }
`;

export const AdvInfo = styled.div`
  padding: 0 10px 20px 10px;

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const AdvTitle = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  color: #009ee4;
  font-weight: 500;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
    font-size: 22px;
  }
`;

export const AdvPrice = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #000;
  font-weight: 500;

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
    font-size: 22px;
  }
`;

export const AdvLocation = styled.p`
  font-size: 12px;
  margin-bottom: 4px;
  color: #5f5f5f;

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const AdvDataRelease = styled.p`
  font-size: 12px;
  margin-bottom: 4px;
  color: #5f5f5f;

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
    font-size: 16px;
  }
`;
