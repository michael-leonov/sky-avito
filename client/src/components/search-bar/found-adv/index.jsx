import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { ADV_ROUTE } from '../../../utils/consts';
import NoImage from '../../../assets/static/no_image.jpg';

function FoundAdv({ id, title, price, images, onClick }) {
  return (
    <S.WrapperLink onClick={onClick}>
      <Link to={`${ADV_ROUTE}/${id}`}>
        <S.FoundAdv>
          <img
            src={
              (images.length &&
                `${process.env.REACT_APP_API_URL}/${images[0]?.url}`) ||
              NoImage
            }
            alt="Фото товара"
            width={30}
            height={30}
          />
          <p>{title}</p>
          <p>
            <nobr>{price} ₽</nobr>
          </p>
        </S.FoundAdv>
      </Link>
    </S.WrapperLink>
  );
}

export default FoundAdv;
