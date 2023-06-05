import styled from 'styled-components';
import { device } from '../../utils/consts';

export const ReviewsBlock = styled.div`
  border-radius: 12px;
  width: 95%;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  z-index: 3;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    position: relative;
    width: 800px;
    max-height: 900px;
    border-radius: 12px;
    z-index: 1;
    background-color: #fff;
    padding: 0 12px 12px 0;
  }
`;

export const ReviewTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    padding: 20px 50px 0;
  }
`;

export const OverflowBlock = styled.div`
  overflow-y: scroll;
  max-height: 390px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    max-height: 720px;
    overflow-y: scroll;
    padding: 0 80px 70px 50px;

    ::-webkit-scrollbar {
      width: 6px;
      padding: 10px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #d9d9d9;
      border-radius: 10px;
    }
  }
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  margin-bottom: 14px;
  font-weight: 600;
  font-family: 'NotoSans';
`;

export const ReviewSendForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
`;

export const ReviewSendFormTextarea = styled.textarea`
  padding: 10px 20px 66px 20px;
  margin-bottom: 14px;
`;

export const ErrorSubmitText = styled.span`
  color: lightcoral;
`;

export const TextUnauth = styled.p`
  margin-bottom: 30px;
`;

export const SignUpButton = styled.button`
  margin-bottom: 30px;
  border: none;
  background: none;
  font-size: 16px;
  color: #009ee4;
  transition: color 0.2s ease-in;
  cursor: pointer;

  :hover {
    color: #0080c1;
  }
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const Review = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const ReviewerAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 12px;
`;

export const ReviewerName = styled.p`
  font-weight: 600;
  font-family: 'NotoSans';
`;

export const ReviewDateRelease = styled.p`
  color: #5f5f5f;
  font-weight: 400;
  font-family: 'NotoSans';
`;

export const ReviewerCommentBlock = styled.div``;

export const ReviewerCommentTitle = styled.p`
  font-weight: 600;
  font-family: 'NotoSans';
`;

export const ReviewCommentText = styled.p``;
