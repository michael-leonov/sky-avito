import React from 'react';
import * as S from './styles';

function MainButton({ children, active = true, type }) {
  if (!active)
    return (
      <S.InactiveButton type={type} disabled>
        {children}
      </S.InactiveButton>
    );

  return <S.Button type={type}>{children}</S.Button>;
}

export default MainButton;
