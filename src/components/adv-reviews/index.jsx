import React from 'react';
import * as S from './styles';
import MainButton from '../main-button';
import testImg from '../../assets/static/adv-test.jpg';
import CloseFormButton from '../close-form-button';

function AdvReviews({ closeForm }) {
  return (
    <S.ReviewsBlock>
      <S.ReviewBlockInner>
        <S.ReviewTitle>Отзывы о товаре</S.ReviewTitle>
        <S.OverflowBlock>
          <S.Subtitle>Добавить отзыв</S.Subtitle>
          <S.ReviewSendForm>
            <S.ReviewSendFormInput type="text" placeholder="Введите отзыв" />
            <div>
              <MainButton active={false} type="submit">
                Опубликовать
              </MainButton>
            </div>
          </S.ReviewSendForm>
          <S.ReviewsList>
            {Array.from({ length: 5 }, (_v, k) => (
              <S.Review key={k}>
                <S.ReviewerAvatar src={testImg} alt="user avatar" />
                <div>
                  <S.ReviewerInfo>
                    <S.ReviewerName>Олег</S.ReviewerName>
                    <S.ReviewDateRelease>14 августа</S.ReviewDateRelease>
                  </S.ReviewerInfo>
                  <S.ReviewerCommentBlock>
                    <S.ReviewerCommentTitle>Комментарий</S.ReviewerCommentTitle>
                    <S.ReviewCommentText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewCommentText>
                  </S.ReviewerCommentBlock>
                </div>
              </S.Review>
            ))}
          </S.ReviewsList>
          <CloseFormButton topPos={28} onClick={closeForm} />
        </S.OverflowBlock>
      </S.ReviewBlockInner>
    </S.ReviewsBlock>
  );
}

export default AdvReviews;
