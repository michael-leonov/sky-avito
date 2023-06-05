import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';
import { HOME_ROUTE } from '../../utils/consts';
import { StyledContainer } from '../../global-styles';
import MainButton from '../main-button';
import logo from '../../assets/static/logo.svg';

function ReturnHome() {
  const { pathname } = useLocation();

  const isNoHome = pathname !== HOME_ROUTE;

  if (isNoHome) {
    return (
      <S.BackHomeBlock>
        <StyledContainer>
          <S.ReturnHomeWrapper>
            <img src={logo} alt="logo" />

            <Link to="/">
              <MainButton>Вернуться на главную</MainButton>
            </Link>
          </S.ReturnHomeWrapper>
        </StyledContainer>
      </S.BackHomeBlock>
    );
  }
}

export default ReturnHome;
