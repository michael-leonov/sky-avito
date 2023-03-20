import React, { useState } from 'react';
import MainButton from '../main-button';
import * as S from './styles';
import { formatPhone, getPhoneMasked } from '../../utils/hidePhoneNumber';

function PhoneButton({ phone = '' }) {
  const [isPhoneMasked, setIsPhoneMasked] = useState(true);

  const phoneFormatted = isPhoneMasked
    ? getPhoneMasked(phone)
    : formatPhone(phone);

  const handlePhoneClick = () => setIsPhoneMasked(false);

  if (!phone)
    return (
      <S.ButtonWrapper>
        <MainButton active={false} disabled>
          Телефон&nbsp;не&nbsp;предоставлен
        </MainButton>
      </S.ButtonWrapper>
    );

  return (
    // Переделать
    <S.ButtonWrapper>
      <MainButton onClick={handlePhoneClick}>
        {isPhoneMasked ? (
          <>
            <S.ShowPhoneText>Показать&nbsp;телефон</S.ShowPhoneText>
            <br />
            <span>{phoneFormatted}</span>
          </>
        ) : (
          <S.LinkPhone href={`tel:${phoneFormatted}`}>
            {phoneFormatted}
          </S.LinkPhone>
        )}
      </MainButton>
    </S.ButtonWrapper>
  );
}

export default PhoneButton;
