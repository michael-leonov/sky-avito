import React from 'react';
import * as S from './style';
import { StyledContainer } from '../../global-styles';
import Image404 from '../../assets/static/404.png';

function NotFound() {
  return (
    <S.Main>
      <StyledContainer>
        <S.NotFoundInner>
          <img src={Image404} alt="Страница не найдена" width={100} />
          <S.NotFoundText>Что-то пошло не так...</S.NotFoundText>
          <p>Пожалуйста, проверьте URL-адрес</p>
        </S.NotFoundInner>
      </StyledContainer>
    </S.Main>
  );
}

export default NotFound;
