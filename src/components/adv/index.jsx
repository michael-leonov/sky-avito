import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { ADV_ROUTE } from '../../utils/consts';
import testImg from '../../assets/static/test.jpg';

function Adv() {
  return (
    <S.Adv>
      <Link to={`${ADV_ROUTE}/1`}>
        <S.AdvImage src={testImg} alt="" />
      </Link>
      <Link to={`${ADV_ROUTE}/1`}>
        <S.AdvTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvTitle>
      </Link>

      <S.AdvPrice>2 200 ₽</S.AdvPrice>
      <S.AdvLocation>Санкт Петербург</S.AdvLocation>
      <S.AdvDataRelease>Сегодня в 10:45</S.AdvDataRelease>
    </S.Adv>
  );
}

export default Adv;
