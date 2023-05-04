import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import HeaderButton from './header-button';
import { StyledContainer, Overlay } from '../../global-styles';
import AdvForm from '../adv-form';
import { userLogout } from '../../redux/slices/userActions';
import mobLogo from '../../assets/static/mob_logo_header.svg';

function Header() {
  const [visibleAddAdv, setVisibleAddAdv] = useState();

  const { userInfo, userToken } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <S.Header>
      <StyledContainer>
        <S.HeaderMobileLogo src={mobLogo} alt="mobile logo" />
        <S.HeaderInner>
          {!userToken ? (
            <Link to="/login">
              <HeaderButton>Вход в личный кабинет</HeaderButton>
            </Link>
          ) : (
            <S.HeaderAuthButtons>
              <HeaderButton onClick={() => setVisibleAddAdv(true)}>
                Разместить объявление
              </HeaderButton>
              <Link to={`/profile/${userInfo?.id}`}>
                <HeaderButton>Личный кабинет</HeaderButton>
              </Link>
              <HeaderButton onClick={logout}>Выйти</HeaderButton>
            </S.HeaderAuthButtons>
          )}
        </S.HeaderInner>
      </StyledContainer>

      {visibleAddAdv && (
        <Overlay>
          <AdvForm
            closeForm={() => setVisibleAddAdv(false)}
            isEditStatusForm={false}
          />
        </Overlay>
      )}
    </S.Header>
  );
}

export default Header;
