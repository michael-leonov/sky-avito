import React from 'react';
import ProfileDataForm from '../../components/profile-data-form';
import { StyledContainer } from '../../global-styles';

function Profile() {
  return (
    <main>
      <StyledContainer>
        <h1>Здравсвуйте, Антон!</h1>
        <h2>Настройки профиля</h2>
        <ProfileDataForm />
        <h2>Мои товары</h2>
      </StyledContainer>
    </main>
  );
}

export default Profile;
