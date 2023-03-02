import styled from 'styled-components';

export const ReviewsBlock = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 800px;
  max-height: 900px;
  border-radius: 12px;
  z-index: 1;
  background-color: #fff;
`;

export const ReviewBlockInner = styled.div`
  position: relative;
`;

export const ReviewTitle = styled.h2`
  padding: 20px 50px 0;
`;

export const OverflowBlock = styled.div`
  max-height: 720px;
  overflow-y: scroll;
  padding: 0 50px 70px 50px;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  margin-bottom: 14px;
`;

export const ReviewSendForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ReviewSendFormInput = styled.input`
  padding: 10px 20px 66px 20px;
  margin-bottom: 14px;
  outline: 1px solid rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 6px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
  }

  :focus {
    outline: 1px solid #009ee4;
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
  font-family: 'Roboto-Medium';
`;

export const ReviewDateRelease = styled.p`
  color: #5f5f5f;
`;

export const ReviewerCommentBlock = styled.div``;

export const ReviewerCommentTitle = styled.p`
  font-family: 'Roboto-Medium';
`;

export const ReviewCommentText = styled.p``;
