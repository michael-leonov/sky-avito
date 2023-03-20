import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  padding-bottom: 117px;
`;

export const AdvInfo = styled.div`
  display: flex;
  column-gap: 60px;
  margin-bottom: 60px;
`;

export const AdvImagesBlock = styled.div`
  min-width: 480px;
`;

export const CurrentAdvImageWrapper = styled.div`
  width: 480px;
  height: 480px;
  margin-bottom: 30px;
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
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 700;
  font-family: 'NotoSans';
`;

export const AdvDataRelease = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
  color: #5f5f5f;
`;

export const AdvLocation = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
  color: #5f5f5f;
`;

export const AdvReviews = styled.span`
  font-size: 16px;
  margin-bottom: 34px;
  color: #009ee4;
  cursor: pointer;
  font-weight: 400;
  font-family: 'NotoSans';
`;

export const AdvPrice = styled.p`
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: 'NotoSans';
`;

export const AdvSettingsButtons = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 34px;
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
  font-size: 20px;
  line-height: 26px;
  color: #009ee4;
  font-weight: 600;
  font-family: 'NotoSans';
`;

export const SellerActivity = styled.p`
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  font-family: 'NotoSans';
  color: #5f5f5f;
`;

export const AdvDescription = styled.p`
  width: 70%;
`;
