import React from 'react';
import Adv from '../../components/adv';
import { StyledContainer } from '../../global-styles';
import * as S from './styles';

function Home() {
  return (
    <main>
      <StyledContainer>
        <S.Title>Объявления</S.Title>
        <S.AdvList>
          <Adv />
        </S.AdvList>
      </StyledContainer>
    </main>
  );
}

export default Home;
