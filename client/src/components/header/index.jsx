import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import HeaderButton from './header-button';
import { StyledContainer, Overlay } from '../../global-styles';
import AdvForm from '../adv-form';
import { userLogout } from '../../redux/slices/userActions';
import SearchBar from '../search-bar';
import { useGetAdvsQuery } from '../../redux/services/advs';
import { useShowAdvFormContext } from '../../context/showAdvForm';

function Header() {
  const [visibleAddAdv, setVisibleAddAdv] = useState();

  const { userInfo, userToken } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
  };

  const { data, isLoading, isError, isFetching } = useGetAdvsQuery();

  const { toggleShowAdvForm } = useShowAdvFormContext();

  const openForm = () => {
    setVisibleAddAdv(true);
    toggleShowAdvForm();
  };

  const closeForm = () => {
    setVisibleAddAdv(false);
    toggleShowAdvForm();
  };

  return (
    <S.Header>
      <StyledContainer>
        <S.HeaderMobileInner>
          <SearchBar advs={data} />
        </S.HeaderMobileInner>

        <S.HeaderInner>
          {!userToken ? (
            <Link to="/login">
              <HeaderButton>Вход в личный кабинет</HeaderButton>
            </Link>
          ) : (
            <S.HeaderAuthButtons>
              <HeaderButton onClick={openForm}>
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
          <AdvForm closeForm={closeForm} isEditStatusForm={false} />
        </Overlay>
      )}
    </S.Header>
  );
}

export default Header;
