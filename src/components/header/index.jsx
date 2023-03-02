import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import HeaderButton from './header-button';
import { StyledContainer } from '../../global-styles';

function Header({ isAuth }) {
  return (
    <S.Header>
      <StyledContainer>
        <S.HeaderInner>
          {isAuth ? (
            <Link to="/profile/1">
              <HeaderButton>Вход в личный кабинет</HeaderButton>
            </Link>
          ) : (
            <S.HeaderAuthButtons>
              <HeaderButton>Разместить обьявление</HeaderButton>
              <Link to="/profile/1">
                <HeaderButton>Лчиный кабинет</HeaderButton>
              </Link>
            </S.HeaderAuthButtons>
          )}
        </S.HeaderInner>
      </StyledContainer>
    </S.Header>
  );
}

export default Header;
