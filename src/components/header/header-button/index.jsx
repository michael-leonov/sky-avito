import React from 'react';
import * as S from './styles';

function HeaderButton({ children }) {
  return <S.Button type="button">{children}</S.Button>;
}

export default HeaderButton;
