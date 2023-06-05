import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as S from './styles';
import MainButton from '../main-button';
import CloseFormButton from '../close-form-button';
import { useAddCommentToAdvMutation } from '../../redux/services/advs';
import formateAdvDate from '../../utils/formateAdvDate';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import SubmitingForm from '../submiting-form';
import { StyledContainer } from '../../global-styles';

function AdvReviews({ closeForm, advId, getCommentsByAdvId }) {
  const { userToken } = useSelector((state) => state.user);

  const { data, isLoading, isError } = getCommentsByAdvId;

  const isEmptyList = !isLoading && !data?.length;

  const [addCommentToAdv] = useAddCommentToAdvMutation();

  const [isPrepareSubmit, setIsPrepareSubmit] = useState(false);

  const reviewsRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const navigateHandle = () => {
    navigate('/signup');
  };

  const changeHandler = (e) => {
    if (e.target.value === '') {
      setIsPrepareSubmit(false);
    } else {
      setIsPrepareSubmit(true);
    }
  };

  const onSubmit = (_data) => {
    setIsPrepareSubmit(false);
    addCommentToAdv({ advId, payload: _data })
      .unwrap()
      .then(() => {
        setIsPrepareSubmit(true);
      });
  };

  useOnClickOutside(reviewsRef, () => {
    closeForm();
  });

  if (isError) {
    return (
      <StyledContainer>
        <p>Упс, что-то пошло не так...</p>
      </StyledContainer>
    );
  }

  return (
    <S.ReviewsBlock ref={reviewsRef}>
      <S.ReviewTitleWrapper>
        <h2>Отзывы о товаре</h2>
        <CloseFormButton onClick={closeForm} />
      </S.ReviewTitleWrapper>
      <S.OverflowBlock>
        {userToken ? (
          <>
            <S.Subtitle>Добавить отзыв</S.Subtitle>
            <S.ReviewSendForm onSubmit={handleSubmit(onSubmit)}>
              <S.ReviewSendFormTextarea
                placeholder="Введите отзыв"
                {...register('review', {
                  minLength: {
                    value: 10,
                    message: 'Комментарий должен содержать минимум 10 символов',
                  },
                  maxLength: {
                    value: 280,
                    message:
                      'Но не переусердствуйте, 280 символов должно быть более чем достаточно!',
                  },
                })}
                onChange={changeHandler}
              />
              {errors.review && (
                <S.ErrorSubmitText>{errors.review.message}</S.ErrorSubmitText>
              )}
              <div>
                <MainButton active={isPrepareSubmit} type="submit">
                  Опубликовать
                </MainButton>
              </div>
              <SubmitingForm loading={isLoading} />
            </S.ReviewSendForm>
          </>
        ) : (
          <S.TextUnauth>
            <S.SignUpButton onClick={navigateHandle} type="button">
              Зарегистрируйтесь
            </S.SignUpButton>
            , чтобы оставить комментарий.
          </S.TextUnauth>
        )}

        <S.ReviewsList>
          {!isEmptyList ? (
            data &&
            data.map((comment) => (
              <S.Review key={comment.id}>
                <S.ReviewerAvatar
                  src={`${process.env.REACT_APP_API_URL}/${comment.author.avatar}`}
                  alt="user avatar"
                />
                <div>
                  <S.ReviewerInfo>
                    <S.ReviewerName>{comment.author.name}</S.ReviewerName>
                    <S.ReviewDateRelease>
                      {comment.created_on && formateAdvDate(comment.created_on)}
                    </S.ReviewDateRelease>
                  </S.ReviewerInfo>
                  <S.ReviewerCommentBlock>
                    <S.ReviewerCommentTitle>Комментарий</S.ReviewerCommentTitle>
                    <S.ReviewCommentText>{comment.text}</S.ReviewCommentText>
                  </S.ReviewerCommentBlock>
                </div>
              </S.Review>
            ))
          ) : (
            <p>Отзывов пока нет.</p>
          )}
        </S.ReviewsList>
      </S.OverflowBlock>
    </S.ReviewsBlock>
  );
}

export default AdvReviews;
