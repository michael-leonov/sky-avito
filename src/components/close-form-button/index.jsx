import React from 'react';
import * as S from './styles';

function CloseFormButton({ topPos, onClick }) {
  return (
    <S.CloseBtnWrapper top={topPos}>
      <S.CloseBtn onClick={onClick} />
    </S.CloseBtnWrapper>
  );
}

export default CloseFormButton;
