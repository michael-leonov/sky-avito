import styled from 'styled-components';

export const Main = styled.div`
  padding-bottom: 80px;
`;

export const AdvList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px 26px;
`;

export const SellerInfoBlock = styled.div`
  display: flex;
  column-gap: 50px;
`;

export const SellerName = styled.p`
  font-weight: 600;
  font-family: 'NotoSans';
  font-size: 20px;
`;

export const SellerLocation = styled.p`
  font-weight: 400;
  font-family: 'NotoSans';
  color: #5f5f5f;
`;

export const SellerActivity = styled.p`
  font-weight: 400;
  font-family: 'NotoSans';
  color: #5f5f5f;
  margin-bottom: 30px;
`;
