import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';
import logo from '../../assets/static/logo.svg';
import MainButton from '../main-button';
import { StyledContainer } from '../../global-styles';

function Search() {
  const { pathname } = useLocation();

  if (pathname !== '/')
    return (
      <Link to="/">
        <MainButton>Вернуться на главную</MainButton>
      </Link>
    );

  return (
    <S.Search>
      <StyledContainer>
        <S.SearchWrapper>
          <img src={logo} alt="logo" />
          <S.SearchBlock>
            <S.SearchInput placeholder="Поиск по объявлениям" />
            <MainButton>Найти</MainButton>
          </S.SearchBlock>
        </S.SearchWrapper>
      </StyledContainer>
    </S.Search>
  );
}

export default Search;
