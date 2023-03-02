import React, { useState } from 'react';
import { Overlay, StyledContainer } from '../../global-styles';
import * as S from './styles';
import testImg from '../../assets/static/adv-test.jpg';
import AdvReviews from '../../components/adv-reviews';

function AdvPage() {
  const isUserAdv = false;

  const [visibleReviews, setVisibleReviews] = useState(false);
  return (
    <S.Main>
      <StyledContainer>
        <S.AdvInfo>
          <S.AdvImagesBlock>
            <S.CurrentAdvImage
              src={testImg}
              alt="Ракетка для большого тенниса Triumph Pro STС Б/У"
            />
            <S.AdvImagesList>
              {Array.from({ length: 5 }, (_v, k) => (
                <S.AdvImage
                  key={k}
                  src={testImg}
                  alt="Ракетка для большого тенниса Triumph Pro STС Б/У"
                />
              ))}
            </S.AdvImagesList>
          </S.AdvImagesBlock>
          <div>
            <S.AdvTitle>
              Ракетка для большого тенниса Triumph Pro STС Б/У
            </S.AdvTitle>
            <S.AdvDataRelease>Сегодня в 10:45</S.AdvDataRelease>
            <S.AdvLocation>Санкт-Петербург</S.AdvLocation>
            <S.AdvReviews onClick={() => setVisibleReviews(true)}>
              23 отзыва
            </S.AdvReviews>
            <S.AdvPrice>2 200 ₽</S.AdvPrice>

            <S.PhoneButton>
              Показать телефон
              <span>8 905 ХХХ ХХ ХХ</span>
            </S.PhoneButton>

            <S.SellerInfo>
              <S.SellerAvatar src={testImg} alt="seller avatar" />
              <div>
                <S.SellerName to="/profile/1">Кирилл</S.SellerName>
                <S.SellerActivity>
                  Продает товары с августа 2021
                </S.SellerActivity>
              </div>
            </S.SellerInfo>
          </div>
        </S.AdvInfo>
        <div>
          <h2>Описание товара</h2>
          <S.AdvDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </S.AdvDescription>
        </div>
      </StyledContainer>
      {visibleReviews && (
        <>
          <AdvReviews closeForm={() => setVisibleReviews(false)} />
          <Overlay />
        </>
      )}
    </S.Main>
  );
}

export default AdvPage;
