import styled from 'styled-components';
import { device } from '../../utils/consts';

export const Main = styled.div`
  padding: 30px 0 80px;
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

export const SellerInfoBlock = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
    column-gap: 30px;
  }

  @media ${device.desktop} {
    column-gap: 50px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
`;

export const SellerName = styled.p`
  font-weight: 600;
  font-family: 'NotoSans';
  font-size: 20px;
  margin-bottom: 6px;
`;

export const SellerLocation = styled.p`
  font-weight: 400;
  font-family: 'NotoSans';
  color: #5f5f5f;
  margin-bottom: 6px;
`;

export const SellerActivity = styled.p`
  font-weight: 400;
  font-family: 'NotoSans';
  color: #5f5f5f;
  margin-bottom: 30px;
`;

export const PhoneButtonMobWrapper = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

export const PhoneButtonDesktopWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
