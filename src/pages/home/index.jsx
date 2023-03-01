import React from 'react';
import Poster from '../../components/poster';
import { StyledContainer } from '../../global-styles';
import * as S from './styles';

function Home() {
  return (
    <main>
      <StyledContainer>
        <S.Title>Объявления</S.Title>
        <S.PosterList>
          <Poster />
        </S.PosterList>
      </StyledContainer>
    </main>
  );
}

export default Home;
