/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { ADV_ROUTE } from '../../utils/consts';
import formateAdvDate from '../../utils/formateAdvDate';
import noImagePic from '../../assets/static/no_image.jpg';
import formatePrice from '../../utils/formatePrice';

function Adv({ id, title, price, images, user, created_on }) {
  return (
    <S.Adv>
      <Link to={`${ADV_ROUTE}/${id}`}>
        <S.AdvImage
          src={
            images && images[0]
              ? `${process.env.REACT_APP_API_URL}/${images[0]?.url}`
              : noImagePic
          }
          alt={title}
        />
      </Link>
      <Link to={`${ADV_ROUTE}/${id}`}>
        <S.AdvTitle>{title}</S.AdvTitle>
      </Link>

      <S.AdvPrice>{formatePrice(price)} ₽</S.AdvPrice>
      <S.AdvLocation>{user.city}</S.AdvLocation>
      <S.AdvDataRelease>
        {created_on && formateAdvDate(created_on)}
      </S.AdvDataRelease>
    </S.Adv>
  );
}

export default Adv;
