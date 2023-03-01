import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import HeaderButton from './header-button';
import { StyledContainer } from '../../global-styles';

function Header() {
  return (
    <S.Header>
      <StyledContainer>
        <S.HeaderInner>
          <Link to="/profile">
            <HeaderButton>Вход в личный кабинет</HeaderButton>
          </Link>
        </S.HeaderInner>
      </StyledContainer>
    </S.Header>
  );
}

export default Header;
