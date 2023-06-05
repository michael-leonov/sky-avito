import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../utils/consts';

export const Main = styled.div`
  padding-bottom: 88px;

  @media ${device.desktop} {
    padding-bottom: 117px;
  }
`;

export const AdvInfo = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 60px;
  margin-bottom: 30px;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.desktop} {
    margin-bottom: 60px;
  }
`;

export const MobAdvImagesBlock = styled.div`
  margin-bottom: 20px;
  position: relative;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ArrowBackBtn = styled.button`
  position: absolute;
  top: 20px;
  left: 26px;
  z-index: ${({ isFormVisible }) => (isFormVisible ? '0' : '2')};
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const AdvSlideImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #dcdcdc;
`;

export const AdvSlideImg = styled.img`
  width: 320px;
  height: 320px;
`;

export const AdvImagesBlock = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  @media ${device.desktop} {
    min-width: 480px;
  }
`;

export const CurrentAdvImageWrapper = styled.div`
  @media ${device.desktop} {
    width: 480px;
    height: 480px;
    margin-bottom: 30px;
  }
`;

export const CurrentAdvImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AdvImagesList = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const AdvImageWrapper = styled.div`
  width: 88px;
  height: 88px;
  cursor: pointer;

  border: ${({ active }) => active && '2px solid #009ee4'};
`;

export const AdvImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AdvTitle = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 700;
  font-family: 'NotoSans';

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    font-size: 32px;
  }
`;

export const AdvDataRelease = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
  color: #5f5f5f;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const AdvLocation = styled(AdvDataRelease)``;

export const AdvReviews = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #009ee4;
  cursor: pointer;
  font-weight: 400;
  font-family: 'NotoSans';

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    font-size: 16px;
    margin-bottom: 34px;
  }
`;

export const AdvPrice = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: 'NotoSans';

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    font-size: 28px;
  }
`;

export const AdvSettingsButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 34px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    flex-direction: row;
    column-gap: 10px;
  }
`;

export const PhoneButton = styled.button`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  align-items: center;
  margin-bottom: 34px;
  background-color: #009ee4;
  padding: 13px 37px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  color: white;
  transition: background-color 0.2s ease-in;
  font-family: 'Roboto';
  font-weight: 400;

  :hover {
    background-color: #0080c1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 34px;
`;

export const SellerInfo = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const SellerAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const SellerName = styled(Link)`
  font-size: 18px;
  line-height: 26px;
  color: #009ee4;
  font-weight: 600;
  font-family: 'NotoSans';

  @media ${device.desktop} {
    font-size: 20px;
  }
`;

export const SellerActivity = styled.p`
  font-size: 14px;
  line-height: 32px;
  font-weight: 400;
  font-family: 'NotoSans';
  color: #5f5f5f;

  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const AdvDescription = styled.p`
  width: 70%;
`;
