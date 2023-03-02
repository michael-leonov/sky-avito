import React from 'react';
import ProfileDataForm from '../../components/profile-data-form';
import { StyledContainer } from '../../global-styles';
import Adv from '../../components/adv';
import * as S from './styles';

function Profile() {
  return (
    <S.Main>
      <StyledContainer>
        <h1>Здравсвуйте, Антон!</h1>
        <h2>Настройки профиля</h2>
        <ProfileDataForm />
        <h2>Мои товары</h2>
        <S.AdvList>
          <Adv />
        </S.AdvList>
      </StyledContainer>
    </S.Main>
  );
}

export default Profile;
